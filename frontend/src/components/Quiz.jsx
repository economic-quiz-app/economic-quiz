import React, { useState } from "react";
import QuizContainer from "./QuizContainer.jsx";

function Quiz() {
  const [start, setStart] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchQuestions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8080/api/questions");
      if (!response.ok) throw new Error("서버 응답 오류");
      const data = await response.json();
      setQuestions(data);
    } catch (err) {
      setError("문제를 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  if (start) {
    return <QuizContainer start={setStart} />;
  }

  return (
    <>
      <h1>경제 퀴즈</h1>
      <button onClick={() => setStart(true)}>퀴즈 시작</button>
      <button onClick={handleFetchQuestions} disabled={loading}>
        {loading ? "불러오는 중..." : "문제 출력"}
      </button>
      {error && <p>{error}</p>}
      {questions && (
        <ul>
          {questions.map(q => (
            <li key={q.id}>
              <strong>{q.id}. [{q.type}]</strong> {q.question}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Quiz;
