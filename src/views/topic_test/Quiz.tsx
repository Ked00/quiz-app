import React, {ChangeEvent, useState} from "react";
import {Row, Col, Button} from "react-bootstrap";
import {
  FormGroup,
  LinearProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import {AnswerBox} from "./AnswerCheckBox/AnswerBox";
import { Logo } from "../../components/Logo";

export const Quiz = () => {
  return (
    <div
      className="vh-100 position-static overflow-scroll"
      style={{backgroundColor: "lavender"}}
    >
      <div className="d-flex justify-content-between p-3">
        <Logo />
        <h3>Pitching</h3>
        <Button>Save Progress</Button>
      </div>

      <div className="h-100 d-flex align-items-center">
        <div className="h-75 w-100">
          <h1 className="text-center p-3">
            What are two methods of pitching ?
          </h1>

          <FormGroup>
            <Row className="d-flex justify-content-center mt-4" xs={1} md={3}>
              <AnswerBox answer="Inclusive" />
              <AnswerBox answer="Exclusive" />
            </Row>
          </FormGroup>

          <Row className="d-flex justify-content-center mb-4 position-absolute w-100 bottom-0">
            <Col
              className="text-end p-3 rounded border border-white shadow-lg w-75 d-flex align-items-center justify-content-between"
              md={10}
            >
              <Button variant="primary">
                <ArrowBackIcon />
              </Button>
              <LinearProgress
                variant="determinate"
                value={50}
                sx={{width: "60%"}}
              />
              <Button variant="primary" className="w-25">
                Next Question
                <span className="ms-4">
                  <ArrowForwardIcon />
                </span>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
