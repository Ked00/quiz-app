import React, {MouseEvent} from "react";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {Col} from "react-bootstrap";

type Props = {
  answer: string;
  selectAnswer: (text: string)=> void
};

export const AnswerRadioButton = (props: Props) => {
  return (
    <Col className="border border-dark p-3 mb-2">
      <FormControlLabel
        control={<Radio />}
        label={props.answer}
        value={props.answer}
        onClick={(event)=>{
          props.selectAnswer(event.currentTarget.innerText)
        }}
        
      />
    </Col>
  );
};
