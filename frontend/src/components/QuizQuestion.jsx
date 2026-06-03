import QuizButton from "./QuizButton.jsx";
import {
  CardWrapper,
  CardLabel,
  CardQuestion,
  CardAnswer,
  CardExplanation,
  CardAnswerButtons,
  NextButton,
  StopButton,
} from "../styles/QuizQuestion.styles.js";

// 문제 화면 — 문제 텍스트, 보기 버튼, 해설, 중단/다음 버튼
function QuizQuestion({ question, answered, selectedIndex, onAnswer, onNext, onEnd, isLast }) {
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

      <CardAnswerButtons>
        <StopButton variant="contained" onClick={onEnd}>
          중단하기
        </StopButton>
        {answered && (
          <NextButton variant="contained" onClick={onNext}>
            {isLast ? "결과확인" : "다음문제"}
          </NextButton>
        )}
      </CardAnswerButtons>

      {answered && (
        <CardAnswer>
          <CardExplanation>{question.explanation}</CardExplanation>
        </CardAnswer>
      )}
    </CardWrapper>
  );
}

export default QuizQuestion;
