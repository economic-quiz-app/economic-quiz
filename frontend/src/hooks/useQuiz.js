import {useEffect, useState} from 'react';

// 퀴즈 진행에 필요한 모든 상태와 핸들러를 관리
// questions: useQuestions에서 받은 5문제
function useQuiz(questions) {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState({current: 0, wrong: 0});
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false); // 선택한 답이 정답인지 여부
  const [showAnswer, setShowAnswer] = useState(false); // 1초 후 해설 화면 전환 여부

  const isEnd = currentQ >= questions.length;
  const currentQuestion = questions[currentQ];
  const isLast = currentQ === questions.length - 1;

  // answered가 true가 되면 1초 후 showAnswer를 true로 변경
  useEffect(() => {
    if (!answered) return;

    const timer = setTimeout(() => {
      setShowAnswer(true);
    }, 1000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 또는 answered 변경 시 타이머 정리
  }, [answered]);

  const handleAnswer = index => {
    const correct = index === currentQuestion.answer;
    setScore(prev => ({
      current: correct ? prev.current + 1 : prev.current,
      wrong: correct ? prev.wrong : prev.wrong + 1
    }));
    setSelectedIndex(index);
    setIsCorrect(correct);
    setAnswered(true);
  };

  const handleNext = () => {
    setCurrentQ(prev => prev + 1);
    setSelectedIndex(null);
    setAnswered(false);
    setIsCorrect(false);
    setShowAnswer(false);
  };

  return {
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
  };
}

export default useQuiz;
