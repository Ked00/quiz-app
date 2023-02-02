import React from "react";
import { Button } from "react-bootstrap";

type Props = {
  text: string;
  redirectTo: string;
};

export const RedirectBlockButton = (props: Props) => {
  return (
    <div className="d-grid">
      <Button variant="primary" size="lg" href={`${props.redirectTo}`}>
        {props.text}
      </Button>
    </div>
  );
};
