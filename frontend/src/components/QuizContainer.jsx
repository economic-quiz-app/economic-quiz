import useQuiz from '../hooks/useQuiz.js';
import QuizAnswer from './QuizAnswer.jsx';
import QuizQuestion from './QuizQuestion.jsx';
import Result from './QuizResult.jsx';

// 렌더링 분기만 담당 — 상태/로직은 useQuiz에 위임
// questions: Quiz.jsx에서 fetch한 데이터를 props로 전달받음
function QuizContainer({onExit, questions}) {
  const {
    currentQuestion,
    score,
    selectedIndex,
    answered,
    isCorrect,
    showAnswer,
    isEnd,
    isLast,
    handleAnswer,
    handleNext
  } = useQuiz(questions);

  if (isEnd) {
    return <Result score={score} onClick={onExit} />;
  }

  // showAnswer가 true가 되면 QuizAnswer 화면으로 전환 (타이머는 useQuiz에서 처리)
  if (showAnswer) {
    return (
      <QuizAnswer
        isCorrect={isCorrect}
        correctAnswer={currentQuestion.choices[currentQuestion.answer]}
        explanation={currentQuestion.explanation}
        isLast={isLast}
        onNext={handleNext}
        onEnd={onExit}
      />
    );
  }

  return (
    <QuizQuestion
      question={currentQuestion}
      answered={answered}
      selectedIndex={selectedIndex}
      onAnswer={handleAnswer}
      onEnd={onExit}
    />
  );
}

export default QuizContainer;
