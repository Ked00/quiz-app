import React from "react";
import {
  Row,
  Col,
  Stack,
  FloatingLabel,
  Form,
  Container,
  Button,
} from "react-bootstrap";

import {useFormManager} from "../../hooks/formManager";
import {useAuthenticationApi} from "../../hooks/authenticationApi";
import {useShowOrHide} from "../../hooks/showOrHide";
import {ResponseAlert} from "../../components/Alerts/ResponseAlert";

import {RedirectBlockButton} from "../../components/buttons/RedirectBlockButton";
import {BlockButton} from "../../components/buttons/BlockButton";
import {Logo} from "../../components/Logo/Logo";

export const Register = () => {
  const formManager = useFormManager();
  const authentication = useAuthenticationApi("register", formManager.value);
  const [visible, switchState] = useShowOrHide(true);

  return (
    <>
      <ResponseAlert show={visible} text={authentication.response} />
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
              Register
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
            <BlockButton text="Register" click={authentication.makeCall} />
            <hr className="my-5"></hr>

            <RedirectBlockButton text="Login" redirectTo="/" />
          </div>
        </Col>
      </Row>
    </>
  );
};
