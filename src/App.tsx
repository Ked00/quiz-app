import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Quiz_list} from "./views/Home/HomePage";
import {Quiz} from "./views/quizPage/Quiz";
import {Login} from "./views/authentication/Login";
import {Register} from "./views/authentication/Register";


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Quiz_list />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
