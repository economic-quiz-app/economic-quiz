import {useState} from 'react';

function useQuiz(questions) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({correct: 0, wrong: 0});
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isAnswered, setAnswered] = useState(false);
  const [isCorrect, setCorrect] = useState(false);
  const [isAnswerShown, setAnswerShown] = useState(false);

  const isEnd = currentQuestionIndex >= questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  const isLast = currentQuestionIndex === questions.length - 1;

  const handleSelect = index => {
    if (isAnswered) return;
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    if (selectedIndex === null) return;
    const correct = selectedIndex === currentQuestion.answer;
    setScore(prev => ({
      correct: correct ? prev.correct + 1 : prev.correct,
      wrong: correct ? prev.wrong : prev.wrong + 1
    }));
    setCorrect(correct);
    setAnswered(true);
    setAnswerShown(true);
  };

  const handleNext = () => {
    setCurrentQuestionIndex(prev => prev + 1);
    setSelectedIndex(null);
    setAnswered(false);
    setCorrect(false);
    setAnswerShown(false);
  };

  return {
    currentQuestion,
    currentQuestionIndex,
    totalCount: questions.length,
    score,
    selectedIndex,
    isAnswered,
    isCorrect,
    isAnswerShown,
    isEnd,
    isLast,
    handleSelect,
    handleSubmit,
    handleNext
  };
}

export default useQuiz;
