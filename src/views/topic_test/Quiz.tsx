import React, {ChangeEvent, useState} from "react";
import {Row, Col} from "react-bootstrap";
import {Checkbox, FormGroup, FormControlLabel} from "@mui/material";

export const Quiz = () => {

  return (
    <div
      className="vh-100 overflow-hidden"
      style={{backgroundColor: "lavender"}}
    >
      <h5 className="text-center p-3">Pitching</h5>
      <div className="h-100 d-flex align-items-center">
        <div className="h-75 w-100">
          <h1 className="text-center p-3">
            What are three methods of pitching ?
          </h1>

          <FormGroup>
            <Row className="d-flex justify-content-center mt-5" xs={1} md={3}>
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
        </div>
      </div>
    </div>
  );
};
