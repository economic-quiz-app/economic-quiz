import { useState } from "react";

// 퀴즈 진행에 필요한 모든 상태와 핸들러를 관리
// questions: useQuestions에서 받은 5문제
function useQuiz(questions) {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState({ current: 0, wrong: 0 });
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [answered, setAnswered] = useState(false);

  const isEnd = currentQ >= questions.length;
  const currentQuestion = questions[currentQ];
  const isLast = currentQ === questions.length - 1;

  const handleAnswer = index => {
    const isCorrect = index === currentQuestion.answer;
    setScore(prev => ({
      current: isCorrect ? prev.current + 1 : prev.current,
      wrong: isCorrect ? prev.wrong : prev.wrong + 1,
    }));
    setSelectedIndex(index);
    setAnswered(true);
  };

  const handleNext = () => {
    setCurrentQ(prev => prev + 1);
    setSelectedIndex(null);
    setAnswered(false);
  };

  return {
    currentQuestion,
    score,
    selectedIndex,
    answered,
    isEnd,
    isLast,
    handleAnswer,
    handleNext,
  };
}

export default useQuiz;
