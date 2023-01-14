import React from "react";
import {Avatar} from "@mui/material";

import {MainNavbar} from "../../components/MainNavbar";
import {Subject} from "../quizzes/QuizItems/Subject";

export const Quiz_list = () => {
  return (
    <div className="bg-dark vh-100">
      <MainNavbar />

      <h1 className="text-white mt-5 p-3">Communication</h1>
      <div>
        <Subject />
      </div>
    </div>
  );
};
