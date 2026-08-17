import {Box, styled} from '@mui/material';

import {IconCircleBase} from './common.styles.js';

// 퀴즈 안내 정보(문제 수, 즉시 피드백)를 표시하는 행 컨테이너
// alignItems: 'flex-start' — 아이콘과 텍스트의 높이가 다를 때 위쪽 기준으로 정렬
export const InfoCard = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
  width: '100%',
  padding: '14px 16px',
  borderRadius: '12px',
  backgroundColor: '#f7f8fc'
});

// InfoCard 좌측의 작은 원형 뱃지 (숫자, 체크 표시 등)
// flexShrink: 0 — 텍스트 길이에 관계없이 크기 고정
// size prop은 사용처에서 "24px"로 전달
export const InfoBadge = styled(IconCircleBase)({
  fontSize: '0.875rem',
  fontWeight: 'bold',
  flexShrink: 0
});
