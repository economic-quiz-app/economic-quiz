import {Typography} from '@mui/material';

import {
  CorrectText,
  EndButton,
  ResultDetail,
  ResultLabel,
  ResultScore,
  ResultWrapper,
  WrongText
} from '../styles/QuizResult.styles.js';

function QuizResult({score, onExit}) {
  return (
    <ResultWrapper>
      <ResultLabel>결과</ResultLabel>
      <ResultScore>정답 {score.correct} / 5</ResultScore>
      <ResultDetail>
        <Typography>
          정답 <CorrectText>{score.correct}개</CorrectText>
        </Typography>
        <Typography>
          오답 <WrongText>{score.wrong}개</WrongText>
        </Typography>
      </ResultDetail>
      <EndButton variant="contained" onClick={onExit}>
        종료
      </EndButton>
    </ResultWrapper>
  );
}

export default QuizResult;
