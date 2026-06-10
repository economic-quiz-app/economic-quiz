import {Box, styled} from '@mui/material';

import {IconCircleBase, PrimaryButton, ScreenWrapper} from './common.styles.js';

// Quiz.jsx 시작화면 전체를 감싸는 레이아웃 컨테이너
export const QuizWrapper = ScreenWrapper;

// 시작화면의 카드 영역 — 제목, 안내 정보, 시작 버튼을 감싸는 흰색 카드
// maxWidth: '400px' — 데스크탑에서 카드가 너무 넓어지지 않도록 최대 너비 제한
export const QuizCard = styled(Box)({
  backgroundColor: 'white',
  borderRadius: '24px',
  padding: '40px 24px',
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  boxShadow: '0 2px 16px rgba(0,0,0,0.07)'
});

// 카드 상단 아이콘을 감싸는 원형 배경
export const IconCircle = styled(IconCircleBase)({
  backgroundColor: '#e8eeff',
  marginBottom: '8px'
});

// 퀴즈 안내 정보(문제 수, 즉시 피드백)를 표시하는 행 컨테이너
// alignItems: 'flex-start' — 아이콘과 텍스트의 높이가 다를 때 위쪽 기준으로 정렬
export const InfoCard = styled(Box)({
  width: '100%',
  backgroundColor: '#f7f8fc',
  borderRadius: '12px',
  padding: '14px 16px',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px'
});

// InfoCard 좌측의 작은 원형 뱃지 (숫자, 체크 표시 등)
// flexShrink: 0 — 텍스트 길이에 관계없이 크기 고정
// size prop은 사용처에서 "24px"로 전달
export const InfoBadge = styled(IconCircleBase)({
  fontSize: '0.875rem',
  fontWeight: 'bold',
  flexShrink: 0
});

// 퀴즈 시작 버튼
export const StartButton = styled(PrimaryButton)({
  width: '100%',
  marginTop: '8px'
});
