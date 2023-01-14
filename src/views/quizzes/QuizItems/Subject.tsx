import React from "react";
import {Avatar} from "@mui/material";
import {ProgressBar} from "react-bootstrap";

export const Subject = () => {
  return (
    <div className="p-3 text-white">
      <Avatar
        alt=""
        src={require("../../../images/obama.jpg")}
        className="float-start me-3"
      />
      <span className="fs-5">Pitching Method</span>
      <ProgressBar className="w-25">
        <ProgressBar animated striped variant="danger" now={33.33} />
        <ProgressBar animated striped variant="warning" now={33.33} />
        <ProgressBar animated striped variant="success" now={33.33} />
      </ProgressBar>
    </div>
  );
};
