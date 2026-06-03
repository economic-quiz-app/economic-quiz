import { Typography } from "@mui/material";
import {
  ResultWrapper,
  ResultLabel,
  ResultScore,
  ResultDetail,
  CorrectText,
  WrongText,
  EndButton,
} from "../styles/QuizResult.styles.js";

// 결과 화면 — 정답/오답 개수 표시, 종료 버튼
// score: useQuiz에서 전달받은 { current, wrong }
function Result({ score, onClick }) {
  return (
    <ResultWrapper>
      <ResultLabel>결과</ResultLabel>
      <ResultScore>정답 {score.current} / 5</ResultScore>
      <ResultDetail>
        <Typography>정답 <CorrectText>{score.current}개</CorrectText></Typography>
        <Typography>오답 <WrongText>{score.wrong}개</WrongText></Typography>
      </ResultDetail>
      <EndButton variant="contained" onClick={onClick}>종료</EndButton>
    </ResultWrapper>
  );
}

export default Result;
