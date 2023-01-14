import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Quiz_list} from "./views/quizzes/Quiz_list"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz_list />} />
      </Routes>
    </BrowserRouter>
  );
}
