import React, {useState, useEffect} from "react";
import {Offcanvas, Container, Form} from "react-bootstrap/";
import {Avatar, AppBar} from "@mui/material";
import axios from "axios";
import {Logo} from "../Logo/Logo";
import {BlockButton} from "../buttons/BlockButton";

import {useShowOrHide} from "../../hooks/showOrHide";
import {useFormManager} from "../../hooks/formManager";

export const MainNavbar = () => {
  const [visible, switchState] = useShowOrHide(false);
  const [data, setData] = useState({username: "", password: ""});
  const collectInfo = useFormManager();

  useEffect(() => {
    axios
      .get("account/info")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);


  function update() {
    axios.patch("account/update", {
      username: data.username,
      newname: collectInfo.value.username
        ? collectInfo.value.username
        : data.username,

      newpassword: collectInfo.value.password
        ? collectInfo.value.password
        : data.password,
    });
  }

  return (
    <AppBar position="static" sx={{backgroundColor: "#d84f2a"}}>
      <Container className="d-flex align-items-center justify-content-between p-2">
        <Logo />

        <div className="d-flex align-items-center h-100">
          <Avatar
            alt="user profile picture."
            className="ms-2"
            sx={{width: 35, height: 35}}
            onClick={switchState}
          />
          <Offcanvas placement="end" show={visible} onHide={switchState}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Title className="text-center">
              Edit Profile
            </Offcanvas.Title>
            <Offcanvas.Body className="d-flex flex-column justify-content-between">
              <h1 className="text-center">{data.username}</h1>

              <div className="mb-3">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      placeholder="Enter a username..."
                      name="username"
                      onChange={collectInfo.updateForm}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      placeholder="Enter a Password..."
                      name="password"
                      onChange={collectInfo.updateForm}
                    />
                  </Form.Group>
                  <BlockButton click={update} text={"Submit"} />
                </Form>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </Container>
    </AppBar>
  );
};
