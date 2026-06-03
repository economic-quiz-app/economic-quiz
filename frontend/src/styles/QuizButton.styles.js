// [파일 목적]
// QuizButton.jsx의 보기 버튼 목록 스타일을 분리해서 관리하는 파일
// 보기 버튼의 기본 스타일, 정답/오답 색상, 비활성화 상태를 담당

// [styled()란?]
// MUI 컴포넌트를 기반으로 스타일이 입혀진 새 컴포넌트를 만드는 함수
// styled(기반컴포넌트)({ 스타일 }) 형태로 작성
// 반환값은 새 컴포넌트 → <ChoiceList>, <ChoiceButton> 처럼 JSX에서 바로 사용 가능

// [Box란?]
// MUI의 범용 레이아웃 컴포넌트 — 실제로는 div로 렌더링됨
// component prop으로 ul 같은 시맨틱 태그로 변경 가능

// [Button이란?]
// MUI의 버튼 컴포넌트 — 기본 button 태그보다 접근성, 상태(hover/disabled) 처리가 내장됨
// variant="contained" 처럼 props로 모양을 제어할 수 있음

import { styled } from "@mui/material";
import { Box, Button } from "@mui/material";

// [사용 목적] ul 역할 — 보기 버튼들을 세로로 나열하는 컨테이너
export const ChoiceList = styled(Box)({
  listStyle: "none",       // 기본 bullet(•) 제거 — ul은 기본으로 bullet을 표시하므로 퀴즈 UI에서는 제거
  padding: 0,
  display: "flex",
  flexDirection: "column", // 보기를 세로로 나열
  gap: "12px",             // 버튼 사이 간격 (margin 대신 gap 사용 — 첫/마지막 예외처리 불필요)
  width: "100%",
});

// [사용 목적] 각 보기 버튼 — 정답/오답 여부에 따라 색상이 바뀌는 버튼
// 테두리형 버튼으로 구성, 답변 선택 후 정답/오답에 따라 className으로 색상 전환
export const ChoiceButton = styled(Button)({
  width: "100%",
  padding: "14px 20px",
  border: "2px solid #4a90e2", // 파란 테두리
  borderRadius: "8px",
  backgroundColor: "white",
  color: "#4a90e2",
  fontSize: "1rem",
  fontWeight: "normal",
  justifyContent: "flex-start", // 텍스트 왼쪽 정렬 (MUI Button 기본은 center)
  textTransform: "none",        // MUI Button 기본값인 대문자 변환 제거
  boxShadow: "none",
  transition: "background 0.2s, color 0.2s", // 호버 시 색상 전환 애니메이션

  "&:hover": {
    backgroundColor: "#4a90e2", // 호버 시 배경을 파란색으로
    color: "white",
    boxShadow: "none",
  },

  // disabled 상태 — 답변 선택 후 모든 버튼 비활성화
  "&:disabled": {
    opacity: 0.5,
    border: "2px solid #4a90e2",
    color: "#4a90e2",
  },

  // 정답 버튼 — disabled 상태에서 파스텔 그린으로 강조
  // QuizButton.jsx에서 className으로 "btn-correct" 전달 시 적용
  "&.btn-correct:disabled": {
    backgroundColor: "#b7e1cd",
    borderColor: "#b7e1cd",
    color: "#1a3d2b",
    opacity: 1, // 다른 버튼과 달리 투명도 유지 (강조)
  },

  // 오답 버튼 (사용자가 선택한 틀린 보기) — disabled 상태에서 파스텔 핑크로 강조
  "&.btn-wrong:disabled": {
    backgroundColor: "#f4b8c1",
    borderColor: "#f4b8c1",
    color: "#5c1a1a",
    opacity: 1,
  },
});
