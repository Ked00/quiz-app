import React from "react";
import {FormControlLabel, Checkbox} from "@mui/material";
import {Col} from "react-bootstrap";

type Props ={
    answer:string
}

export const AnswerBox = (props: Props) => {
  return (
    <Col className="border border-dark p-3 mb-2 mx-2">
      <FormControlLabel
        control={<Checkbox />}
        label={props.answer}
        value={props.answer}
        // onClick={showValue}
      />
    </Col>
  );
};
