import QuizQuestion from "./QuizQuestion.jsx";
import Result from "./QuizResult.jsx";
import useQuiz from "../hooks/useQuiz.js";

// 렌더링 분기만 담당 — 상태/로직은 useQuiz에 위임
// questions: Quiz.jsx에서 fetch한 데이터를 props로 전달받음
function QuizContainer({ onExit, questions }) {
  const {
    currentQuestion,
    score,
    selectedIndex,
    answered,
    isEnd,
    isLast,
    handleAnswer,
    handleNext,
  } = useQuiz(questions);

  if (isEnd) {
    return <Result score={score} onClick={onExit} />;
  }

  return (
    <QuizQuestion
      question={currentQuestion}
      answered={answered}
      selectedIndex={selectedIndex}
      onAnswer={handleAnswer}
      onNext={handleNext}
      onEnd={onExit}
      isLast={isLast}
    />
  );
}

export default QuizContainer;
