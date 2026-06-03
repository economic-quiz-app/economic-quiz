import {CardLabel, CardQuestion, CardWrapper} from '../styles/QuizQuestion.styles.js';
import QuizButton from './QuizButton.jsx';

// 문제 화면 — 문제 텍스트, 보기 버튼
// answered: 버튼 비활성화 + 정답/오답 색상 표시용
function QuizQuestion({question, answered, selectedIndex, onAnswer, onEnd}) {
  return (
    <CardWrapper>
      <div>
        <CardLabel>문제</CardLabel>
        <CardQuestion>{question.question}</CardQuestion>
      </div>

      <QuizButton
        choices={question.choices}
        onAnswer={onAnswer}
        disabled={answered}
        selectedIndex={selectedIndex}
        correctIndex={question.answer}
      />
    </CardWrapper>
  );
}

export default QuizQuestion;
