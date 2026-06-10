import {Typography} from '@mui/material';

import {
  CardWrapper,
  EndTextButton,
  ProgressHeader,
  QuestionCard,
  StyledLinearProgress,
  SubmitButton,
  SubmitButtonWrapper
} from '../styles/QuizQuestion.styles.js';
import QuizButton from './QuizButton.jsx';

function QuizQuestion({question, currentIndex, totalCount, isAnswered, selectedIndex, onAnswer, onSubmit, onEnd}) {
  const progress = (currentIndex / totalCount) * 100;

  return (
    <CardWrapper>
      <ProgressHeader>
        <Typography fontSize="0.875rem" color="#555">
          문제 {currentIndex + 1} / {totalCount}
        </Typography>
        <EndTextButton onClick={onEnd}>종료</EndTextButton>
      </ProgressHeader>

      <StyledLinearProgress variant="determinate" value={progress} />

      <QuestionCard>
        <Typography fontSize="1.125rem" fontWeight="bold" color="#1a1a1a" lineHeight={1.5} mb="20px">
          {question.question}
        </Typography>

        <QuizButton
          choices={question.choices}
          onAnswer={onAnswer}
          disabled={isAnswered}
          selectedIndex={selectedIndex}
        />
      </QuestionCard>

      <SubmitButtonWrapper>
        <SubmitButton variant="contained" disabled={selectedIndex === null} onClick={onSubmit}>
          제출하기
        </SubmitButton>
      </SubmitButtonWrapper>
    </CardWrapper>
  );
}

export default QuizQuestion;
