import {Box, styled} from '@mui/material';

import {IconCircleBase, PrimaryButton, ScreenWrapper} from './common.styles.js';

// QuizIntro.jsx 시작화면 전체를 감싸는 레이아웃 컨테이너
export const QuizWrapper = ScreenWrapper;

// 시작화면의 카드 영역 — 제목, 안내 정보, 시작 버튼을 감싸는 흰색 카드
// maxWidth: '400px' — 데스크탑에서 카드가 너무 넓어지지 않도록 최대 너비 제한
export const QuizCard = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
  maxWidth: '400px',
  padding: '40px 24px',
  borderRadius: '24px',
  backgroundColor: 'white',
  boxShadow: '0 2px 16px rgba(0,0,0,0.07)'
});

// 카드 상단 아이콘을 감싸는 원형 배경
export const IconCircle = styled(IconCircleBase)({
  marginBottom: '8px',
  backgroundColor: '#e8eeff'
});

// 퀴즈 시작 버튼
export const StartButton = styled(PrimaryButton)({
  width: '100%',
  marginTop: '8px'
});
