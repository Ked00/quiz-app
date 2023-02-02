import React from "react";
import {Button} from "react-bootstrap";

type Props = {
  text: string;
  click?: () => void;
  href?: string
};

export const BlockButton = (props: Props) => {
  return (
    <div className="d-grid mt-4">
      <Button variant="primary" size="lg" onClick={props.click} href={props.href}>
        {props.text}
      </Button>
    </div>
  );
};
