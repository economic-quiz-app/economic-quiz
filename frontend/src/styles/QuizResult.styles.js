// [파일 목적]
// QuizResult.jsx의 결과 화면 스타일을 분리해서 관리하는 파일
// 모바일 전체 화면 기준 레이아웃, 점수 표시, 정답/오답 개수, 종료 버튼 스타일을 담당

// [styled()란?]
// MUI 컴포넌트를 기반으로 스타일이 입혀진 새 컴포넌트를 만드는 함수
// styled(기반컴포넌트)({ 스타일 }) 형태로 작성
// 반환값은 새 컴포넌트 → <ResultWrapper>, <EndButton> 처럼 JSX에서 바로 사용 가능

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

// [사용 목적] 결과 화면 전체를 감싸는 컨테이너
// 카드 없이 전체 화면을 꽉 채우며 내용을 가운데 정렬
export const ResultWrapper = styled(Box)({
  minHeight: "100dvh",        // dvh: 모바일 주소창 높이를 제외한 실제 뷰포트 높이 (vh보다 모바일에 정확)
  display: "flex",
  flexDirection: "column",
  alignItems: "center",       // 가로축 가운데 정렬
  justifyContent: "center",   // 세로축 가운데 정렬
  padding: "0 16px",          // 좌우 여백 — 모바일 엣지에 붙지 않도록
  backgroundColor: "#f5f5f5", // 연한 회색 배경
  gap: "16px",                // 내부 요소 사이 간격 (margin 대신 gap 사용 — 첫/마지막 예외처리 불필요)
});

// [사용 목적] "결과" 라벨 텍스트
export const ResultLabel = styled(Typography)({
  fontSize: "0.875rem",  // 14px — 본문보다 작게
  color: "#888",
});

// [사용 목적] 정답 개수를 크게 표시하는 메인 점수 텍스트 (예: "정답 3 / 5")
export const ResultScore = styled(Typography)({
  fontSize: "2.25rem",  // 36px
  fontWeight: "bold",
  color: "#222",
});

// [사용 목적] 정답/오답 개수를 나란히 표시하는 상세 영역
export const ResultDetail = styled(Box)({
  display: "flex",
  gap: "24px",
});

// [사용 목적] 정답 개수 강조 텍스트 (진한 초록)
export const CorrectText = styled("span")({
  color: "#1a3d2b",
  fontWeight: "bold",
});

// [사용 목적] 오답 개수 강조 텍스트 (진한 빨강)
export const WrongText = styled("span")({
  color: "#5c1a1a",
  fontWeight: "bold",
});

// [사용 목적] 종료 버튼 — 클릭 시 시작 화면으로 돌아감
export const EndButton = styled(Button)({
  padding: "12px 40px",
  borderRadius: "20px",
  backgroundColor: "#aecbfa", // 파스텔 블루 — 시작 버튼과 동일한 계열
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
