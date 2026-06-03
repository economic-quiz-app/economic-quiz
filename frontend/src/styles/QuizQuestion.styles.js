// [파일 목적]
// QuizQuestion.jsx의 문제 화면 스타일을 분리해서 관리하는 파일
// 모바일 전체 화면 기준 레이아웃, 문제 텍스트, 해설 박스, 하단 버튼 스타일을 담당

// [styled()란?]
// MUI 컴포넌트를 기반으로 스타일이 입혀진 새 컴포넌트를 만드는 함수
// styled(기반컴포넌트)({ 스타일 }) 형태로 작성
// 반환값은 새 컴포넌트 → <CardWrapper>, <NextButton> 처럼 JSX에서 바로 사용 가능

// [Box란?]
// MUI의 범용 레이아웃 컴포넌트 — 실제로는 div로 렌더링됨
// div를 직접 쓰는 것과 동일하지만 MUI 스타일 시스템과 통합되어 있어
// styled()로 감쌀 때 MUI 테마와 연동이 자연스러움

// [Button이란?]
// MUI의 버튼 컴포넌트 — 기본 button 태그보다 접근성, 상태(hover/disabled) 처리가 내장됨
// variant="contained" 처럼 props로 모양을 제어할 수 있음

// [Typography란?]
// MUI의 텍스트 컴포넌트 — h1~h6, p, span 등 텍스트 요소를 담당
// variant prop으로 시맨틱 태그와 스타일을 함께 지정할 수 있음

import { styled } from "@mui/material";
import { Box, Button, Typography } from "@mui/material";

// [사용 목적] 문제 화면 전체를 감싸는 컨테이너
// 카드 없이 전체 화면을 꽉 채우는 모바일 레이아웃
export const CardWrapper = styled(Box)({
  minHeight: "100dvh",        // dvh: 모바일 주소창 높이를 제외한 실제 뷰포트 높이 (vh보다 모바일에 정확)
  display: "flex",
  flexDirection: "column",
  padding: "32px 16px",       // 상하 여백은 넉넉하게, 좌우는 엣지에 붙지 않도록
  backgroundColor: "#f5f5f5", // 연한 회색 배경
  gap: "24px",                // 내부 요소 사이 간격 (margin 대신 gap 사용 — 첫/마지막 예외처리 불필요)
});

// [사용 목적] "문제" 라벨 텍스트 — 화면 상단에 표시되는 작은 회색 텍스트
export const CardLabel = styled(Typography)({
  fontSize: "0.875rem",  // 14px — 본문보다 작게
  color: "#888",
});

// [사용 목적] 문제 내용 텍스트 — 실제 퀴즈 질문을 표시
export const CardQuestion = styled(Typography)({
  fontSize: "1.375rem",  // 22px — 모바일 화면에 맞게
  fontWeight: "bold",
  color: "#222",
});

// [사용 목적] 해설 영역 컨테이너 — 답변 선택 후 아래에 표시됨
export const CardAnswer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

// [사용 목적] 해설 텍스트 박스 — 연한 파란 배경의 설명 영역
export const CardExplanation = styled(Box)({
  backgroundColor: "#e8f4fd", // 연한 파란 배경
  color: "#1a3a5c",
  borderRadius: "8px",
  padding: "12px 16px",
  width: "100%",
  boxSizing: "border-box",    // padding이 width에 포함되도록
});

// [사용 목적] 중단하기/다음문제 버튼을 좌우로 배치하는 컨테이너
export const CardAnswerButtons = styled(Box)({
  display: "flex",
  justifyContent: "space-between", // 중단하기는 왼쪽, 다음문제는 오른쪽
  width: "100%",
});

// [사용 목적] 다음문제/결과확인 버튼 (파스텔 블루) — 답변 선택 후에만 표시됨
export const NextButton = styled(Button)({
  padding: "12px 28px",
  borderRadius: "20px",
  backgroundColor: "#aecbfa", // 파스텔 블루
  color: "#1a3a5c",
  fontSize: "1rem",
  fontWeight: "bold",
  textTransform: "none",      // MUI Button 기본값인 대문자 변환 제거
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#aecbfa",
    opacity: 0.85,
    boxShadow: "none",
  },
});

// [사용 목적] 중단하기 버튼 (회색) — 퀴즈 진행 중 언제든 시작 화면으로 돌아가는 버튼
export const StopButton = styled(Button)({
  padding: "12px 28px",
  borderRadius: "20px",
  backgroundColor: "#d9d9d9", // 밝은 회색
  color: "#555",
  fontSize: "1rem",
  fontWeight: "bold",
  textTransform: "none",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#d9d9d9",
    opacity: 0.85,
    boxShadow: "none",
  },
});
