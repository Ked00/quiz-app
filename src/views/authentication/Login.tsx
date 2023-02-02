import React, {useState} from "react";
import {Row, Col, Stack, FloatingLabel, Form, Container} from "react-bootstrap";
import axios from "axios";
import {RedirectBlockButton} from "../../components/buttons/RedirectBlockButton";
import {BlockButton} from "../../components/buttons/BlockButton";
import {Logo} from "../../components/Logo/Logo";
import {useFormManager} from "../../hooks/formManager";
import {useAuthenticationApi} from "../../hooks/authenticationApi";
import {useVerify} from "../../hooks/verify";
import {useShowOrHide} from "../../hooks/showOrHide";
import {ResponseAlert} from "../../components/Alerts/ResponseAlert";

export const Login = () => {
  const formManager = useFormManager();
  const authentication = useAuthenticationApi("login", formManager.value);
  const getVerified = useVerify();
  const [visible, switchState] = useShowOrHide(true);

  // user has to double click in order to run the verify api call
  function makeApiCalls() {
    authentication.makeCall();
    getVerified.verify();
  }

  return (
    <>
      <ResponseAlert show={visible} text={authentication.response}/>
      <Row>
        <Col>
          <Container className="p-3">
            <Logo />
          </Container>
        </Col>
      </Row>

      <Row className="vh-100">
        <Col className="h-75 d-flex flex-column align-items-center justify-content-center">
          <div className="w-50">
            <h1 className="text-decoration-underline text-center mb-5">
              Login
            </h1>
            <Stack gap={3}>
              <FloatingLabel controlId="userName" label="Username">
                <Form.Control
                  className="border border-dark"
                  placeholder="Enter a username..."
                  name="username"
                  onChange={formManager.updateForm}
                />
              </FloatingLabel>

              <FloatingLabel controlId="password" label="password">
                <Form.Control
                  className="border border-dark"
                  placeholder="Enter a password..."
                  name="password"
                  onChange={formManager.updateForm}
                />
              </FloatingLabel>
            </Stack>
            <BlockButton text="Login" click={makeApiCalls} />
            <hr className="my-5"></hr>

            <RedirectBlockButton text="Register" redirectTo="/register" />
          </div>
        </Col>
      </Row>
    </>
  );
};
