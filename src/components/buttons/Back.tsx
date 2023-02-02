import React from "react";
import {Button} from "react-bootstrap";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type Props = {
  decreaseProgress: () => void;
  goBack: () => void;
};

export const Back = (props: Props) => {
  function doSomeActions() {
    props.decreaseProgress();
    props.goBack();
  }
  return (
    <Button variant="primary" onClick={doSomeActions}>
      <ArrowBackIcon />
    </Button>
  );
};
