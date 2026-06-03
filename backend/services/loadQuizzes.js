import fs from 'node:fs/promises';

/** @import { RawQuiz, Quiz } from '../types.js' */

const QUIZ_FILE_PATH = './backend/data/quiz.json';

/**
 * 퀴즈 데이터를 읽어와 서버 포맷으로 변환하여 반환합니다.
 * @returns {Promise<Quiz[]>}
 * */
const loadQuizzes = async () => {
  const quizData = await fs.readFile(QUIZ_FILE_PATH, 'utf-8');
  /** @type {RawQuiz[]} */
  const quizzes = JSON.parse(quizData);

  return quizzes.map(quiz => ({
    id: quiz['번호'],
    type: quiz['구분'],
    question: quiz['문제내용'],
    choices: quiz['구분'] === 'OX퀴즈' ? ['O', 'X'] : [quiz['보기1'], quiz['보기2'], quiz['보기3'], quiz['보기4']],
    answer: Number(quiz['정답'][0]) - 1, // 값이 "2번" 혹은 "2번(X)" 형태여서 해당 보기의 인덱스로 변환
    explanation: quiz['해설']
  }));
};

export default loadQuizzes;
