import React, { useState } from "react";
import QuizButton from "./QuizButton.jsx";
import Result from "./Result.jsx";
import useQuestions from "../hooks/useQuestions.js";

function QuizQuestion({ start }) {
  const { questions, loading } = useQuestions();
  const [currentQ, setCurrentQ] = useState(0);
  const [info, setInfo] = useState({ current: 0, wrong: 0, isCorrect: null });
  const [answered, setAnswered] = useState(false);

  if (loading) return <p>문제를 불러오는 중...</p>;

  const isEnd = currentQ >= questions.length;
  const currentQuestion = questions[currentQ];

  const chk_answer = index => {
    const chk = index === currentQuestion.answer;

    setInfo(prev => ({
      current: chk ? prev.current + 1 : prev.current,
      wrong: chk ? prev.wrong : prev.wrong + 1,
      isCorrect: chk,
    }));

    setAnswered(prev => !prev);
  };

  const handleNext = () => {
    setCurrentQ(prev => prev + 1);
    setAnswered(prev => !prev);
  };

  const handleEnd = () => {
    setCurrentQ(0);
    setInfo({ current: 0, wrong: 0, isCorrect: null });
    setAnswered(false);
    start(false);
  };

  if (isEnd) {
    return <Result info={info} onClick={handleEnd} />;
  }

  return (
    <>
      <div>
        <h1>문제</h1>
        <p>{currentQuestion.question}</p>
      </div>
      <div>
        <QuizButton choices={currentQuestion.choices} onAnswer={chk_answer} />
      </div>

      {answered && (
        <div>
          <p>{info.isCorrect ? "정답입니다." : "오답입니다."}</p>
          <p>{currentQuestion.explanation}</p>
          <button onClick={handleNext}>
            {currentQ === questions.length - 1 ? "결과확인" : "다음문제"}
          </button>
        </div>
      )}
    </>
  );
}

export default QuizQuestion;
