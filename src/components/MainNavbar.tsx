import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap/";
import {Avatar} from "@mui/material";

import {Points} from "../points/Points";

export const MainNavbar = () => {
  return (
    <Navbar className="bg-secondary w-100">
      <Container>
        <Navbar.Brand>The basics</Navbar.Brand>

        <div className="d-flex align-items-center h-100">
          <Points />
          <Avatar
            alt="user profile picture."
            src={require("../images/add.png")}
          />
        </div>
      </Container>
    </Navbar>
  );
};
