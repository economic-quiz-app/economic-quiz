import {useEffect, useState} from 'react';

// 마운트 시 백엔드에서 랜덤 5문제를 fetch해서 반환
function useQuestions() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://quiz-api-jpp7.onrender.com/quizzes?random=true&count=5')
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      });
  }, []);

  return {questions, isLoading};
}

export default useQuestions;
