import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {Typography} from '@mui/material';

import {RestartButton, ResultCard, ResultIconCircle, ResultWrapper} from '../styles/QuizResult.styles.js';

function QuizResult({score, onExit}) {
  const total = score.correct + score.wrong;
  const percentage = Math.round((score.correct / total) * 100);
  const motivation = score.correct === total
    ? '완벽합니다! 모든 문제를 맞혔어요!'
    : score.correct >= total / 2
      ? '잘 하셨어요! 조금만 더 연습하면 완벽해질 거예요!'
      : '다시 도전해보세요! 연습하면 더 나아질 거예요! 💪';

  return (
    <ResultWrapper>
      <ResultCard>
        <ResultIconCircle>
          <HomeOutlinedIcon sx={{fontSize: 36, color: '#3a5bd9'}} />
        </ResultIconCircle>

        <Typography fontSize="1.5rem" fontWeight="bold" color="#1a1a1a">
          퀴즈 완료!
        </Typography>

        <Typography fontSize="2.5rem" fontWeight="bold" color="#1a1a1a">
          {score.correct}
          <Typography component="span" fontSize="1.25rem" fontWeight="normal" color="#888">
            /5
          </Typography>
        </Typography>

        <Typography fontSize="0.875rem" color="#888">정답률 {percentage}%</Typography>

        <Typography fontSize="0.875rem" color="#e07b00" textAlign="center" lineHeight={1.5}>
          {motivation}
        </Typography>

        <RestartButton variant="contained" onClick={onExit}>
          다시 시작하기
        </RestartButton>
      </ResultCard>
    </ResultWrapper>
  );
}

export default QuizResult;
