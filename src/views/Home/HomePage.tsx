import React from "react";

import {MainNavbar} from "../../components/Navbar/HomePageNavbar";
import {QuizCard} from "../../components/cards/QuizCard";

import {useVerify} from "../../hooks/verify";

export const Quiz_list = () => {
  const verify = useVerify()

  return (
    <div className="vh-100 overflow-scroll" style={{backgroundColor: "lavender"}} onLoad={verify.verify}>
      <MainNavbar />

      <h1 className="text-dark mt-5 p-3">Typescript</h1>
      <div>
        <QuizCard alternative="obama" topic="Types" />
        <QuizCard alternative="obama" topic="Type Annotations" />
        <QuizCard alternative="obama" topic="Type Inference" />
        <QuizCard alternative="obama" topic="Type Aliases" />
        <QuizCard alternative="obama" topic="Arrays" />
        <QuizCard alternative="obama" topic="Function Types" />
        <QuizCard alternative="obama" topic="Union Types" />
        <QuizCard alternative="obama" topic="Typing objects" />
      </div>
    </div>
  );
};
