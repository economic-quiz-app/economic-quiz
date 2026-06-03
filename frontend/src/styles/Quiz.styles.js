// Quiz.jsx 시작 화면 스타일 — MUI styled()로 CSS 역할 분리
import {styled} from '@mui/material';
import {Box, Button} from '@mui/material';

// 시작 화면 전체 컨테이너
export const QuizWrapper = styled(Box)(({theme}) => ({
  minHeight: '100dvh', // 모바일 주소창 높이 제외한 실제 뷰포트 (vh보다 정확)
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 16px',
  backgroundColor: '#f5f5f5',
  [theme.breakpoints.up('sm')]: {
    padding: '0 32px'
  }
}));

// 퀴즈 시작 / 문제 출력 버튼 그룹 — 모바일: 세로 / 태블릿+: 가로
export const QuizButtonGroup = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
  maxWidth: '400px',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    maxWidth: '600px',
    width: 'auto'
  }
}));

// 퀴즈 시작 버튼
export const StartButton = styled(Button)(({theme}) => ({
  padding: '24px 0',
  borderRadius: '12px',
  backgroundColor: '#aecbfa',
  color: '#1a3a5c',
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'none', // MUI 기본값(대문자 변환) 제거
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#97b8f5',
    boxShadow: 'none'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.125rem',
    padding: '20px 40px'
  }
}));

// 문제 목록 버튼 — 로딩 중 disabled 처리
export const ListButton = styled(Button)(({theme}) => ({
  padding: '24px 0',
  borderRadius: '12px',
  backgroundColor: '#b7e1cd',
  color: '#1a3d2b',
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#a0d4bc',
    boxShadow: 'none'
  },
  '&:disabled': {
    backgroundColor: '#b7e1cd',
    opacity: 0.5
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.125rem',
    padding: '20px 40px'
  }
}));
