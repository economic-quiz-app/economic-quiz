// QuizQuestion.jsx / QuizAnswer.jsx 스타일 — MUI styled()로 CSS 역할 분리
import {styled} from '@mui/material';
import {Box, Button, Typography} from '@mui/material';

// 문제 화면 전체 컨테이너 — 모바일: 전체 화면 / 태블릿+: 중앙 정렬 + 최대 너비
export const CardWrapper = styled(Box)(({theme}) => ({
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  padding: '32px 16px',
  backgroundColor: '#f5f5f5',
  gap: '24px',
  [theme.breakpoints.up('sm')]: {
    padding: '48px 32px',
    maxWidth: '720px',
    margin: '0 auto',
    width: '100%'
  }
}));

export const CardLabel = styled(Typography)(({theme}) => ({
  fontSize: '0.875rem',
  color: '#888',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem'
  }
}));

export const CardQuestion = styled(Typography)(({theme}) => ({
  fontSize: '1.375rem',
  fontWeight: 'bold',
  color: '#222',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.75rem'
  }
}));

export const CardAnswer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
});

export const CardExplanation = styled(Box)(({theme}) => ({
  backgroundColor: '#e8f4fd',
  color: '#1a3a5c',
  borderRadius: '8px',
  padding: '12px 16px',
  width: '100%',
  boxSizing: 'border-box',
  [theme.breakpoints.up('sm')]: {
    padding: '16px 20px',
    fontSize: '1rem'
  }
}));

// QuizAnswer 전체 화면 컨테이너 — QuizQuestion과 독립적으로 전환되는 화면
export const CardAnswerButtons = styled(Box)({
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '32px 16px',
  backgroundColor: '#f5f5f5',
  gap: '16px'
});

// 정답/오답에 따라 배경색이 달라지는 결과 영역
export const AnswerResult = styled(Box)(({isCorrect}) => ({
  backgroundColor: isCorrect ? '#e8f5e9' : '#fce4ec',
  borderRadius: '12px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
}));

// 정답/오답에 따라 색상이 달라지는 결과 텍스트
export const AnswerResultText = styled(Box)(({isCorrect}) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: isCorrect ? '#1a3d2b' : '#5c1a1a'
}));

export const AnswerExplanationBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  fontSize: '0.9rem',
  color: '#444'
});

export const AnswerExplanation = styled(Box)({
  color: '#555',
  lineHeight: 1.6
});

// 종료/다음문제 버튼 좌우 배치 컨테이너
export const AnswerButtons = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%'
});

export const NextButton = styled(Button)(({theme}) => ({
  padding: '12px 28px',
  borderRadius: '20px',
  backgroundColor: '#aecbfa',
  color: '#1a3a5c',
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#aecbfa',
    opacity: 0.85,
    boxShadow: 'none'
  },
  [theme.breakpoints.up('sm')]: {
    padding: '14px 36px',
    fontSize: '1.125rem'
  }
}));

export const StopButton = styled(Button)(({theme}) => ({
  padding: '12px 28px',
  borderRadius: '20px',
  backgroundColor: '#d9d9d9',
  color: '#555',
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#d9d9d9',
    opacity: 0.85,
    boxShadow: 'none'
  },
  [theme.breakpoints.up('sm')]: {
    padding: '14px 36px',
    fontSize: '1.125rem'
  }
}));
