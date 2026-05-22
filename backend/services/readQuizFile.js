import fs from "node:fs/promises";

const QUIZ_FILE_PATH = "./backend/data/quiz.json";
const readQuizFile = async () => {
  const quizData = await fs.readFile(QUIZ_FILE_PATH, "utf-8");
  const quizzes = JSON.parse(quizData);

  return quizzes.map(quiz => ({
    id: quiz["번호"],
    type: quiz["구분"],
    question: quiz["문제내용"],
    choices:
      quiz["구분"] === "OX퀴즈"
        ? ["O", "X"]
        : [quiz["보기1"], quiz["보기2"], quiz["보기3"], quiz["보기4"]],
    answer: parseInt(quiz["정답"][0]) - 1, // 값이 "2번" 혹은 "2번(X)" 형태여서 해당 보기의 인덱스로 변환
    explanation: quiz["해설"],
  }));
};

export default readQuizFile;
