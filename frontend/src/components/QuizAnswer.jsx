import {
  AnswerButtons,
  AnswerExplanation,
  AnswerExplanationBox,
  AnswerResult,
  AnswerResultText,
  CardAnswerButtons,
  NextButton,
  StopButton
} from '../styles/QuizQuestion.styles.js';

// 정답/오답 결과 화면 — QuizQuestion과 독립적으로 전체 화면에 표시
// isCorrect: 정답 여부 → 결과 텍스트와 배경색 결정
function QuizAnswer({isCorrect, correctAnswer, explanation, isLast, onNext, onEnd}) {
  return (
    <CardAnswerButtons>
      <AnswerResult isCorrect={isCorrect}>
        <AnswerResultText isCorrect={isCorrect}>{isCorrect ? '정답입니다!' : '오답입니다!'}</AnswerResultText>
        <AnswerExplanationBox>
          <p>정답: {correctAnswer}</p>
          <AnswerExplanation>{explanation}</AnswerExplanation>
        </AnswerExplanationBox>
      </AnswerResult>

      <AnswerButtons>
        <StopButton variant="contained" onClick={onEnd}>
          종료
        </StopButton>
        <NextButton variant="contained" onClick={onNext}>
          {isLast ? '결과확인' : '다음문제'}
        </NextButton>
      </AnswerButtons>
    </CardAnswerButtons>
  );
}

export default QuizAnswer;
