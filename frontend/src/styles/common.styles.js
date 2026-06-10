import {Box, Button, styled} from '@mui/material';

// 전체 화면을 채우는 레이아웃 컨테이너 — Quiz, QuizResult 화면에서 공통 사용
// minHeight: '100dvh' — 모바일 주소창을 제외한 실제 화면 높이 기준
// alignItems/justifyContent: 'center' — 자식 카드를 화면 정중앙에 배치
export const ScreenWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100dvh',
  padding: '0 24px',
  backgroundColor: '#f0f4ff'
});

// 원형 아이콘 배경 — Quiz, QuizResult 화면에서 공통 사용
// borderRadius: '50%' — 정사각형 Box를 원형으로 만드는 방법
// size prop으로 크기를 조절 (기본값 '72px')
export const IconCircleBase = styled(Box)(({size = '72px'}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: size,
  height: size,
  borderRadius: '50%'
}));

// 파란색 주요 액션 버튼 — 시작, 제출, 다음, 재시작 등에서 공통 사용
// textTransform: 'none' — MUI Button 기본 대문자 변환 방지
// boxShadow: 'none' — MUI Button 기본 그림자 제거
export const PrimaryButton = styled(Button)({
  padding: '16px 0',
  borderRadius: '14px',
  backgroundColor: '#3a5bd9',
  boxShadow: 'none',
  color: 'white',
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#2d4abf',
    boxShadow: 'none'
  },
  '&:disabled': {
    backgroundColor: '#c8cfe8',
    color: 'white'
  }
});
