import React from "react";
import {Alert} from "react-bootstrap";

type Props = {
  show: boolean;
  text: {message: string; variant: string};
};

export const ResponseAlert = (props: Props) => {
  return (
    <Alert show={props.show} variant={props.text.variant} className="text-center">
      {props.text.message}
    </Alert>
  );
};
