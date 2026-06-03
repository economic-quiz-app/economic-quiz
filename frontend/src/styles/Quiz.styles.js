// [파일 목적]
// Quiz.jsx의 스타일을 컴포넌트 로직과 분리해서 관리하는 파일
// CSS 파일 역할을 하지만 MUI의 styled()를 사용해 작성
// 이 파일에서 만든 컴포넌트를 Quiz.jsx에서 import해서 JSX 태그처럼 사용

// [styled()란?]
// MUI 컴포넌트를 기반으로 스타일이 입혀진 새 컴포넌트를 만드는 함수
// styled(기반컴포넌트)({ 스타일 }) 형태로 작성
// 반환값은 새 컴포넌트 → <QuizWrapper>, <StartButton> 처럼 JSX에서 바로 사용 가능

// [Box란?]
// MUI의 범용 레이아웃 컴포넌트 — 실제로는 div로 렌더링됨
// div를 직접 쓰는 것과 동일하지만 MUI 스타일 시스템과 통합되어 있어
// styled()로 감쌀 때 MUI 테마와 연동이 자연스러움

// [Button이란?]
// MUI의 버튼 컴포넌트 — 기본 button 태그보다 접근성, 상태(hover/disabled) 처리가 내장됨
// variant="contained" 처럼 props로 모양을 제어할 수 있음

import { styled } from "@mui/material";
import { Box, Button } from "@mui/material";

// [사용 목적] 시작 화면 전체를 감싸는 컨테이너
// Quiz.jsx의 최상위 div 역할 — 화면 중앙 정렬과 배경색 담당
export const QuizWrapper = styled(Box)({
  minHeight: "100dvh",        // dvh: 모바일 주소창 높이를 제외한 실제 뷰포트 높이 (vh보다 모바일에 정확)
  display: "flex",            // 자식 요소를 flexbox로 배치
  flexDirection: "column",    // 세로 방향으로 쌓기
  alignItems: "center",       // 가로축 기준 가운데 정렬
  justifyContent: "center",   // 세로축 기준 가운데 정렬 (수직 중앙)
  padding: "0 16px",          // 좌우 여백 — 모바일 엣지에 붙지 않도록
  backgroundColor: "#f5f5f5", // 연한 회색 배경
});

// [사용 목적] 퀴즈 시작 / 문제 출력 버튼 두 개를 세로로 묶는 그룹
// 버튼들의 간격과 너비를 한 곳에서 제어
export const QuizButtonGroup = styled(Box)({
  display: "flex",
  flexDirection: "column", // 버튼을 세로로 나열
  gap: "16px",             // 버튼 사이 간격 (margin 대신 gap 사용 — 첫/마지막 예외처리 불필요)
  width: "100%",           // 부모 너비를 꽉 채움
  maxWidth: "400px",       // 최대 너비 제한 — 큰 화면에서 버튼이 너무 넓어지지 않도록
});

// [사용 목적] 퀴즈를 시작하는 버튼 (파스텔 블루)
// 클릭 시 Quiz.jsx에서 start 상태를 true로 변경 → QuizContainer로 전환
export const StartButton = styled(Button)({
  padding: "24px 0",          // 버튼 높이를 키우기 위한 상하 여백
  borderRadius: "12px",       // 둥근 모서리
  backgroundColor: "#aecbfa", // 파스텔 블루
  color: "#1a3a5c",           // 진한 네이비 텍스트
  fontWeight: "bold",
  fontSize: "1rem",
  textTransform: "none",      // MUI Button 기본값인 대문자 변환 제거
  boxShadow: "none",          // MUI Button 기본 그림자 제거
  "&:hover": {                // & 는 이 컴포넌트 자신을 가리킴 — CSS의 .btn:hover 와 동일
    backgroundColor: "#97b8f5", // 호버 시 살짝 진하게
    boxShadow: "none",
  },
});

// [사용 목적] 전체 문제 목록을 보여주는 버튼 (파스텔 그린)
// 클릭 시 Quiz.jsx에서 showList 상태를 true로 변경 → QuizList로 전환
// 데이터 로딩 중(loading=true)일 때는 disabled 처리되어 클릭 불가
export const ListButton = styled(Button)({
  padding: "24px 0",
  borderRadius: "12px",
  backgroundColor: "#b7e1cd", // 파스텔 그린
  color: "#1a3d2b",           // 진한 초록 텍스트
  fontWeight: "bold",
  fontSize: "1rem",
  textTransform: "none",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#a0d4bc",
    boxShadow: "none",
  },
  "&:disabled": {             // disabled 상태일 때 — 데이터 로딩 중에 적용
    backgroundColor: "#b7e1cd", // 색상은 유지하되
    opacity: 0.5,               // 투명도로 비활성화 표시
  },
});
