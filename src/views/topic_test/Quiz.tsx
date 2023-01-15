import React, {ChangeEvent, useState} from "react";
import {Row, Col, Button} from "react-bootstrap";
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  LinearProgress,
} from "@mui/material";

export const Quiz = () => {
  return (
    <div className="vh-100 position-static" style={{backgroundColor: "lavender"}}>
      <h3 className="text-center p-3">Pitching</h3>
      <div className="h-100 d-flex align-items-center">
        <div className="h-75 w-100">
          <h1 className="text-center p-3">
            What are two methods of pitching ?
          </h1>

          <FormGroup>
            <Row className="d-flex justify-content-center mt-4" xs={1} md={3}>
              <Col className="border border-dark p-3 mb-2 mx-2">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Inclusive"
                  value="Inclusive"
                  // onClick={showValue}
                />
              </Col>

              <Col className="border border-dark p-3 mb-2 mx-2">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Underhand Pitch"
                  value="Underhand Pitch"
                  // onClick={showValue}
                />
              </Col>

              <Col className="border border-dark p-3 mb-2 mx-2">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Exclusive"
                  value="Exclusive"
                  // onClick={showValue}
                />
              </Col>

              <Col className="border border-dark p-3 mb-2 mx-2">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Exclusive"
                  value="Exclusive"
                  // onClick={showValue}
                />
              </Col>

              <Col className="border border-dark p-3 mb-2 mx-2">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Exclusive"
                  value="Exclusive"
                  // onClick={showValue}
                />
              </Col>

              <Col className="border border-dark p-3 mb-2 mx-2">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Exclusive"
                  value="Exclusive"
                  // onClick={showValue}
                />
              </Col>
            </Row>
          </FormGroup>

          <Row className="d-flex justify-content-center mb-4 position-absolute w-100 bottom-0">
            <Col
              className="text-end p-3 rounded border border-white shadow-lg w-75 d-flex align-items-center justify-content-between"
              md={10}
            >
              <Button variant="primary">Back</Button>
              <LinearProgress
                variant="determinate"
                value={50}
                sx={{width: "60%"}}
              />
              <Button variant="primary" className="w-25">
                Submit
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
