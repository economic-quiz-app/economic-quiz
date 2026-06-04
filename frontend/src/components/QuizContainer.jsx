import useQuiz from '../hooks/useQuiz.js';
import QuizAnswer from './QuizAnswer.jsx';
import QuizQuestion from './QuizQuestion.jsx';
import QuizResult from './QuizResult.jsx';

function QuizContainer({onExit, questions}) {
  const {
    currentQuestion,
    score,
    selectedIndex,
    isAnswered,
    isCorrect,
    isAnswerShown,
    isEnd,
    isLast,
    handleAnswer,
    handleNext
  } = useQuiz(questions);

  if (isEnd) {
    return <QuizResult score={score} onExit={onExit} />;
  }

  if (isAnswerShown) {
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
      isAnswered={isAnswered}
      selectedIndex={selectedIndex}
      onAnswer={handleAnswer}
      onEnd={onExit}
    />
  );
}

export default QuizContainer;
