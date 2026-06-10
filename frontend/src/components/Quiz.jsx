import ShowChartIcon from '@mui/icons-material/ShowChart';
import {Box, Typography} from '@mui/material';
import {useState} from 'react';

import useQuestions from '../hooks/useQuestions.js';
import {IconCircle, InfoBadge, InfoCard, QuizCard, QuizWrapper, StartButton} from '../styles/Quiz.styles.js';
import QuizContainer from './QuizContainer.jsx';

function Quiz() {
  const [isStarted, setStarted] = useState(false);
  const {questions, isLoading, isError} = useQuestions();

  if (isStarted) {
    return <QuizContainer onExit={() => setStarted(false)} questions={questions} />;
  }

  return (
    <QuizWrapper>
      <QuizCard>
        <IconCircle>
          <ShowChartIcon sx={{fontSize: 36, color: '#3a5bd9'}} />
        </IconCircle>

        <Typography fontSize="1.5rem" fontWeight="bold" color="#1a1a1a" textAlign="center">
          경제 퀴즈
        </Typography>

        <Typography fontSize="0.875rem" color="#777" textAlign="center" lineHeight={1.6}>
          경제 기초 개념을 테스트하고
          <br />
          새로운 지식을 배워보세요
        </Typography>

        <InfoCard>
          <InfoBadge size="24px" sx={{backgroundColor: '#dde4ff', color: '#3a5bd9', fontSize: '0.75rem'}}>
            5
          </InfoBadge>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '2px'}}>
            <Typography fontSize="0.875rem" fontWeight="bold" color="#222">총 5개의 문제</Typography>
            <Typography fontSize="0.8rem" color="#888">각 문제마다 4개의 선택지가 제공됩니다</Typography>
          </Box>
        </InfoCard>

        <InfoCard>
          <InfoBadge size="24px" sx={{backgroundColor: '#e8eeff', color: '#3a5bd9'}}>
            ✓
          </InfoBadge>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '2px'}}>
            <Typography fontSize="0.875rem" fontWeight="bold" color="#222">즉시 피드백</Typography>
            <Typography fontSize="0.8rem" color="#888">각 문제의 정답과 해설을 바로 확인하세요</Typography>
          </Box>
        </InfoCard>

        <StartButton variant="contained" onClick={() => setStarted(true)} disabled={isLoading || isError}>
          시작하기
        </StartButton>

        {isLoading && (
          <Typography fontSize="0.8rem" color="#999" textAlign="center">
            문제를 불러오는 중입니다...
          </Typography>
        )}

        {isError && (
          <Typography fontSize="0.8rem" color="#d93a3a" textAlign="center">
            문제를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.
          </Typography>
        )}
      </QuizCard>
    </QuizWrapper>
  );
}

export default Quiz;
