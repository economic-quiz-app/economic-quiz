import {useEffect, useState} from 'react';

function useQuestions() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch('https://quiz-api-jpp7.onrender.com/quizzes?random=true&count=5')
      .then(res => {
        if (!res.ok) throw new Error('서버 응답 오류');
        return res.json();
      })
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return {questions, isLoading, isError};
}

export default useQuestions;
