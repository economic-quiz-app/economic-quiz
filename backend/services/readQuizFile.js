import fs from "node:fs/promises";
import { join } from "node:path";

const readQuizFile = async () => {
  const filePath = join(process.cwd(), "data/quiz.json");
  const quizData = await fs.readFile(filePath, "utf-8");
  const quizzes = JSON.parse(quizData);

  return quizzes.map(quiz => ({
    id: quiz["번호"],
    type: quiz["구분"],
    question: quiz["문제내용"],
    choices:
      quiz["구분"] === "OX퀴즈"
        ? ["O", "X"]
        : [quiz["보기1"], quiz["보기2"], quiz["보기3"], quiz["보기4"]],
    answer: parseInt(quiz["정답"][0]) - 1,
    explanation: quiz["해설"],
  }));
};

export default readQuizFile;
