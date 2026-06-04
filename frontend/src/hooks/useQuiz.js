import {useEffect, useState} from 'react';

// 퀴즈 진행에 필요한 모든 상태와 핸들러를 관리
// questions: useQuestions에서 받은 5문제
function useQuiz(questions) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({correct: 0, wrong: 0});
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isAnswered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false); // 선택한 답이 정답인지 여부
  const [isAnswerShown, setShowAnswer] = useState(false); // 1초 후 해설 화면 전환 여부

  const isEnd = currentQuestionIndex >= questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  const isLast = currentQuestionIndex === questions.length - 1;

  // isAnswered가 true가 되면 1초 후 isAnswerShown를 true로 변경
  useEffect(() => {
    if (!isAnswered) return;

    const timer = setTimeout(() => {
      setShowAnswer(true);
    }, 1000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 또는 isAnswered 변경 시 타이머 정리
  }, [isAnswered]);

  const handleAnswer = index => {
    const isCorrect = index === currentQuestion.answer;
    setScore(prev => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      wrong: isCorrect ? prev.wrong : prev.wrong + 1
    }));
    setSelectedIndex(index);
    setIsCorrect(isCorrect);
    setAnswered(true);
  };

  const handleNext = () => {
    setCurrentQuestionIndex(prev => prev + 1);
    setSelectedIndex(null);
    setAnswered(false);
    setIsCorrect(false);
    setShowAnswer(false);
  };

  return {
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
  };
}

export default useQuiz;
