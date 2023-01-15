import React from "react";
import {Navbar, Container} from "react-bootstrap/";
import {Avatar, AppBar} from "@mui/material";

import {Points} from "../points/Points";
import {Logo} from "./Logo";

export const MainNavbar = () => {
  return (
    <AppBar position="static" sx={{backgroundColor: "#d84f2a"}}>
      <Container className="d-flex align-items-center justify-content-between">
        <Logo />

        <div className="d-flex align-items-center h-100">
          <Points />
          <Avatar
            alt="user profile picture."
            className="ms-2"
            sx={{width: 35, height: 35}}
          />
        </div>
      </Container>
    </AppBar>
  );
};
