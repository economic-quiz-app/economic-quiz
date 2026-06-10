import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {Typography} from '@mui/material';

import {
  AnswerButtons,
  AnswerIconCircle,
  AnswerResult,
  AnswerResultText,
  CardAnswerButtons,
  ExplanationCard,
  NextButton,
  StopButton
} from '../styles/QuizQuestion.styles.js';

function QuizAnswer({isCorrect, correctAnswer, explanation, isLast, onNext, onEnd}) {
  return (
    <CardAnswerButtons>
      <AnswerResult isCorrect={isCorrect}>
        <AnswerIconCircle isCorrect={isCorrect} size="64px">
          {isCorrect ? (
            <CheckCircleOutlinedIcon sx={{fontSize: 36, color: '#1a7a3d'}} />
          ) : (
            <HighlightOffIcon sx={{fontSize: 36, color: '#d93a3a'}} />
          )}
        </AnswerIconCircle>

        <AnswerResultText isCorrect={isCorrect}>{isCorrect ? '정답입니다!' : '오답입니다'}</AnswerResultText>
        <Typography fontSize="0.875rem" color="#777">
          정답: {correctAnswer}
        </Typography>
      </AnswerResult>

      <ExplanationCard>
        <Typography fontSize="0.875rem" fontWeight="bold" color="#333" mb="8px">
          해설
        </Typography>
        <Typography fontSize="0.875rem" color="#555" lineHeight={1.7}>
          {explanation}
        </Typography>
      </ExplanationCard>

      <AnswerButtons>
        <StopButton variant="contained" onClick={onEnd}>
          종료
        </StopButton>
        <NextButton variant="contained" onClick={onNext}>
          {isLast ? '결과 보기' : '다음 문제'}
        </NextButton>
      </AnswerButtons>
    </CardAnswerButtons>
  );
}

export default QuizAnswer;
