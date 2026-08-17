import {useState} from 'react';

import useQuestions from '../hooks/useQuestions.js';
import QuizContainer from './QuizContainer.jsx';
import QuizIntro from './QuizIntro.jsx';

function Quiz() {
  const [isStarted, setStarted] = useState(false);
  const {questions, isLoading, isError} = useQuestions();

  if (isStarted) {
    return <QuizContainer onExit={() => setStarted(false)} questions={questions} />;
  }

  const status = isLoading ? 'loading' : isError ? 'error' : questions.length === 0 ? 'empty' : 'ready';

  return <QuizIntro status={status} onStart={() => setStarted(true)} />;
}

export default Quiz;
