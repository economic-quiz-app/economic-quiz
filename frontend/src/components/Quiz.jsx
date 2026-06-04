import {CircularProgress, Typography} from '@mui/material';
import {useState} from 'react';

import useQuestions from '../hooks/useQuestions.js';
import {ListButton, QuizButtonGroup, QuizWrapper, StartButton} from '../styles/Quiz.styles.js';
import QuizContainer from './QuizContainer.jsx';
import QuizList from './QuizList.jsx';

function Quiz() {
  const [start, setStart] = useState(false);
  const [showList, setShowList] = useState(false);
  const {questions, isLoading} = useQuestions();

  if (start) {
    return <QuizContainer onExit={() => setStart(false)} questions={questions} />;
  }

  if (showList) {
    return <QuizList questions={questions} onBack={() => setShowList(false)} />;
  }

  return (
    <QuizWrapper>
      <Typography variant="h5" fontWeight="bold" mb={4} color="#1a3a5c">
        경제 퀴즈
      </Typography>

      <QuizButtonGroup>
        <StartButton variant="contained" size="large" onClick={() => setStart(true)}>
          퀴즈 시작
        </StartButton>

        <ListButton variant="contained" size="large" onClick={() => setShowList(true)} disabled={isLoading}>
          {isLoading ? <CircularProgress size={20} sx={{color: '#1a3d2b'}} /> : '문제 출력'}
        </ListButton>
      </QuizButtonGroup>
    </QuizWrapper>
  );
}

export default Quiz;
