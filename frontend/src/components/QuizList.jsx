// 전체 문제 목록 화면 — 문제 번호, 유형, 질문 텍스트 나열
function QuizList({ questions, onBack }) {
  return (
    <div>
      <button onClick={onBack}>← 돌아가기</button>
      <ul>
        {questions.map(q => (
          <li key={q.id}>
            <strong>{q.id}. [{q.type}]</strong>{" "}
            {q.question}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizList;
