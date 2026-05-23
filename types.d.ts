export type RawQuiz = {
  번호: number;
  구분: "OX퀴즈" | "객관식";
  문제내용: string;
  보기1: string;
  보기2: string;
  보기3: string;
  보기4: string;
  정답: string;
  해설: string;
};

export type Quiz = {
  id: number;
  type: string;
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
};
