import React, {useState, useEffect} from "react";
import {Row, Col, Modal} from "react-bootstrap";
import {FormGroup, RadioGroup} from "@mui/material";
import axios from "axios";

import {AnswerRadioButton} from "../../components/buttons/AnswerRadioButton";
import {Logo} from "../../components/Logo/Logo";
import {questionStructure} from "../../../../backend/src/types/questionStructure";
import {Next} from "../../components/buttons/Next";
import {ProgressStatus} from "../../components/progress/ProgressStatus";

import {useLoopArray} from "../../hooks/loopArray";
import {useUpdateProgressBar} from "../../hooks/updateTestProgress";
import {Back} from "../../components/buttons/Back";
import {EndTest} from "../../components/buttons/EndTest";

import {useVerify} from "../../hooks/verify";
import {useShowOrHide} from "../../hooks/showOrHide";
import {BlockButton} from "../../components/buttons/BlockButton";

export const Quiz = () => {
  const [questionInfo, setQuestionInfo] = useState<questionStructure>({
    question: "Loading...",
    answers: [],
    type: "single", //can remove
  });
  const progress = useUpdateProgressBar();
  const switchPage = useLoopArray(1);
  const [selected, setSelected] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const verify = useVerify();
  const [summary, setSummary] = useState(100);
  const [visible, switchState] = useShowOrHide(false);

  useEffect(() => {
    axios
      .get(`test/q${switchPage.currentIndex}`)
      .then((res) => setQuestionInfo(res.data))
      .catch((err) => console.log(err));
  }, [switchPage.currentIndex]);

  // make api call to backend to get boolean of the answer selected
  function checkAnswer() {
    if (selected) {
      axios
        .post("test/checkAnswer", {
          answer: selected,
        })
        .then((res) => increase(res.data));
    } else {
      alert("Please select an answer");
    }
  }

  // checks wheter the answer is correct or not
  function increase(correct: boolean) {
    if (correct) {
      switchPage.nextIndex();
      progress.increaseProgress();
      setIsCorrect(false);
      setSelected("");
    } else {
      alert("try again");
      setSummary((prev) => prev - 20);
    }
  }

  const radioButton = questionInfo.answers.map((item, index) => {
    return (
      <AnswerRadioButton
        key={index}
        answer={item.text}
        selectAnswer={setSelected}
      />
    );
  });

  return (
    <>
      <div
        className="vh-100 overflow-scroll"
        style={{backgroundColor: "lavender"}}
        onLoad={verify.verify} //not working properly
      >
        <div className="d-flex justify-content-between p-3">
          <Logo />
        </div>

        <div className="h-100 d-flex align-items-center">
          <div className="h-75 w-100">
            <h1 className="text-center p-3">{questionInfo.question}</h1>

            <FormGroup>
              <Row className="d-flex justify-content-center mt-4" xs={1}>
                <RadioGroup name="answers" className="w-100 h-100">
                  {radioButton}
                </RadioGroup>
              </Row>
            </FormGroup>

            <Row className="d-flex justify-content-center my-4 w-100">
              <Col
                className="text-end p-3 rounded border border-white shadow-lg w-75 d-flex align-items-center justify-content-between"
                md={10}
              >
                <Back
                  decreaseProgress={progress.decreaseProgress}
                  goBack={switchPage.prevIndex}
                />
                <ProgressStatus progressvalue={progress.currentProgress} />
                {progress.currentProgress < 80 ? (
                  <Next checkAnswer={checkAnswer} />
                ) : (
                  <EndTest click={switchState} />
                )}
              </Col>
            </Row>
          </div>
        </div>
        <Modal show={visible} className="text-center" centered>
          <Modal.Body>
            <h1>TEST SUMMARY</h1>
            <h3>You scored {`${summary}`}</h3>
            <BlockButton text={"Back"} href="/main"/>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
