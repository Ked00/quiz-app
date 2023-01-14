import React from "react";

import {MainNavbar} from "../../components/MainNavbar";
import {QuizCard} from "./QuizListComponents/QuizCard";

export const Quiz_list = () => {
  return (
    <div className="vh-100" style={{backgroundColor: "lavender"}}>
      <MainNavbar />

      <h1 className="text-dark mt-5 p-3">Communication</h1>
      <div>
        <QuizCard alternative="obama" progress={100} topic="Pitching method" />
        <QuizCard alternative="obama" progress={33} topic="Framing" />
      </div>
    </div>
  );
};
