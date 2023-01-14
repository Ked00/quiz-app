import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Quiz_list} from "./views/quizzes/QuizListPage"
import { Quiz } from "./views/topic_test/Quiz"
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz_list />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
