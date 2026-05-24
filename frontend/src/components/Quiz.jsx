import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion.jsx";

function Quiz() {
  const [start, setStart] = useState(false);

  if (!start) {
    return (
      <>
        <h1>경제 퀴즈</h1>
        <button onClick={() => setStart(true)}>퀴즈 시작</button>
      </>
    );
  }

  return <QuizQuestion start={setStart} />;
}

export default Quiz;
