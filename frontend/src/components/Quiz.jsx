import ShowChartIcon from '@mui/icons-material/ShowChart';
import {Typography} from '@mui/material';
import {useState} from 'react';

import useQuestions from '../hooks/useQuestions.js';
import {IconCircle, QuizCard, QuizWrapper, StartButton} from '../styles/Quiz.styles.js';
import QuizContainer from './QuizContainer.jsx';
import QuizInfoCard from './QuizInfoCard.jsx';

const STATUS_MESSAGE = {
  loading: {text: '문제를 불러오는 중입니다...', color: '#999'},
  error: {text: '문제를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.', color: '#d93a3a'},
  empty: {text: '출제할 문제가 없습니다. 잠시 후 다시 시도해주세요.', color: '#d93a3a'}
};

function Quiz() {
  const [isStarted, setStarted] = useState(false);
  const {questions, isLoading, isError} = useQuestions();

  const status = isLoading ? 'loading' : isError ? 'error' : questions.length === 0 ? 'empty' : 'ready';
  const message = STATUS_MESSAGE[status];

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

        <QuizInfoCard
          badge="5"
          badgeSx={{backgroundColor: '#dde4ff', fontSize: '0.75rem'}}
          title="총 5개의 문제"
          description="각 문제마다 4개의 선택지가 제공됩니다"
        />

        <QuizInfoCard
          badge="✓"
          badgeSx={{backgroundColor: '#e8eeff'}}
          title="즉시 피드백"
          description="각 문제의 정답과 해설을 바로 확인하세요"
        />

        <StartButton variant="contained" onClick={() => setStarted(true)} disabled={status !== 'ready'}>
          시작하기
        </StartButton>

        {message && (
          <Typography fontSize="0.8rem" color={message.color} textAlign="center">
            {message.text}
          </Typography>
        )}
      </QuizCard>
    </QuizWrapper>
  );
}

export default Quiz;
