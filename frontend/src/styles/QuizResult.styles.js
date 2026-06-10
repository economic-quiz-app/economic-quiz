import {Box, styled} from '@mui/material';

import {IconCircleBase, PrimaryButton, ScreenWrapper} from './common.styles.js';

// 결과 화면 전체를 감싸는 레이아웃 컨테이너
export const ResultWrapper = ScreenWrapper;

// 결과를 표시하는 흰색 카드 — 아이콘, 점수, 동기 메시지, 버튼을 세로로 배치
export const ResultCard = styled(Box)({
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
export const ResultIconCircle = styled(IconCircleBase)({
  marginBottom: '8px',
  backgroundColor: '#e8eeff'
});

// 다시 시작하기 버튼
export const RestartButton = styled(PrimaryButton)({
  width: '100%',
  marginTop: '8px'
});
