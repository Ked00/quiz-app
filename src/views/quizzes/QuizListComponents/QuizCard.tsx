import React from "react";
import {Avatar, Slide} from "@mui/material";
import {ProgressBar} from "react-bootstrap";

type Props = {
  alternative: string;
  progress: number;
  topic: string;
};

export const QuizCard = (props: Props) => {
  const [state, setState] = React.useState(true);
  // function switchState() {
  //   setState((prev) => !prev);
  // }

  return (
    <>
      <Slide in={state}>
        <div className="p-3 text-white mb-4">
          <a href="/quiz">
            <Avatar
              alt={props.alternative}
              src={require("../../../images/obama.jpg")}
              className="float-start me-3"
              sx={{width: 60, height: 60}}
            />
          </a>
          <span className="fs-5 text-dark">{props.topic}</span>
          <ProgressBar
            animated
            striped
            variant="success"
            now={props.progress}
            style={{width: "70%"}}
          />
        </div>
      </Slide>
    </>
  );
};
