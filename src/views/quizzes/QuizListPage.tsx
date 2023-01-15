import React from "react";

import {MainNavbar} from "../../components/MainNavbar";
import {QuizCard} from "./QuizListComponents/QuizCard";

export const Quiz_list = () => {
  return (
    <div className="vh-100" style={{backgroundColor: "lavender"}}>
      <MainNavbar />

      <h1 className="text-dark mt-5 p-3">Typescript</h1>
      <div>
        <QuizCard alternative="obama" progress={100} topic="Types" />
        <QuizCard alternative="obama" progress={100} topic="Type Annotations" />
        <QuizCard alternative="obama" progress={100} topic="Type Inference" />
        <QuizCard alternative="obama" progress={100} topic="Type Aliases" />
        <QuizCard alternative="obama" progress={33} topic="Arrays" />
        <QuizCard alternative="obama" progress={100} topic="Function Types" />
        <QuizCard alternative="obama" progress={100} topic="Union Types" />
        <QuizCard alternative="obama" progress={100} topic="Typing objects" />
      </div>
    </div>
  );
};
