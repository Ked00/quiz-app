import React from "react";
import {Button} from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type Props = {
  checkAnswer: () => void;
};

export function Next(props: Props) {

  return (
    <Button variant="primary" className="w-25" onClick={props.checkAnswer}>
      Next
      <span className="ms-4">
        <ArrowForwardIcon />
      </span>
    </Button>
  );
}
