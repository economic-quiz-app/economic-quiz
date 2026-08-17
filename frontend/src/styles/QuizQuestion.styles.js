import {Box, Button, LinearProgress, styled} from '@mui/material';

import {PrimaryButton} from './common.styles.js';

// 문제 화면 전체를 감싸는 레이아웃 컨테이너
// boxSizing: 'border-box' — padding을 포함해 높이를 계산 (100dvh 초과 방지)
export const CardWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100dvh',
  boxSizing: 'border-box',
  backgroundColor: '#f0f4ff'
});

// 상단 진행 정보 행 — "문제 N / 총 문제 수" 텍스트와 "종료" 버튼을 양 끝에 배치
export const ProgressHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 20px 8px'
});

// 헤더 우측의 "종료" 텍스트 버튼
// padding: 0, minWidth: 'auto' — MUI Button 기본 여백/최소 너비 제거
export const EndTextButton = styled(Button)({
  padding: 0,
  minWidth: 'auto',
  color: '#555',
  fontSize: '0.875rem',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#222'
  }
});

// 문제 진행률을 시각화하는 가로 프로그레스 바
// '& .MuiLinearProgress-bar' — MUI 내부 클래스에 직접 접근해 바 색상 변경
export const StyledLinearProgress = styled(LinearProgress)({
  height: '3px',
  backgroundColor: '#e0e0e0',
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#3a5bd9'
  }
});

// 문제 텍스트와 선택지 버튼을 감싸는 흰색 카드
// flexGrow: 1 — 남은 공간을 채워 제출 버튼이 항상 하단으로 밀리도록 함
export const QuestionCard = styled(Box)({
  flexGrow: 1,
  margin: '16px',
  padding: '24px',
  borderRadius: '20px',
  backgroundColor: 'white',
  boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
});

// 제출 버튼을 하단에 고정하는 래퍼
// position: 'sticky' + bottom: 0 — 스크롤 시에도 화면 하단에 고정
export const SubmitButtonWrapper = styled(Box)({
  position: 'sticky',
  bottom: 0,
  padding: '12px 16px 24px',
  backgroundColor: '#f0f4ff'
});

// 제출 버튼
export const SubmitButton = styled(PrimaryButton)({
  width: '100%'
});
