// QuizResult.jsx 결과 화면 스타일 — MUI styled()로 CSS 역할 분리
import {styled} from '@mui/material';
import {Box, Button, Typography} from '@mui/material';

// 결과 화면 전체 컨테이너
export const ResultWrapper = styled(Box)(({theme}) => ({
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 16px',
  backgroundColor: '#f5f5f5',
  gap: '16px',
  [theme.breakpoints.up('sm')]: {
    padding: '0 32px',
    gap: '24px'
  }
}));

export const ResultLabel = styled(Typography)(({theme}) => ({
  fontSize: '0.875rem',
  color: '#888',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem'
  }
}));

export const ResultScore = styled(Typography)(({theme}) => ({
  fontSize: '2.25rem',
  fontWeight: 'bold',
  color: '#222',
  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem'
  }
}));

export const ResultDetail = styled(Box)(({theme}) => ({
  display: 'flex',
  gap: '24px',
  [theme.breakpoints.up('sm')]: {
    gap: '40px',
    fontSize: '1.125rem'
  }
}));

export const CorrectText = styled('span')({
  color: '#1a3d2b',
  fontWeight: 'bold'
});

export const WrongText = styled('span')({
  color: '#5c1a1a',
  fontWeight: 'bold'
});

export const EndButton = styled(Button)(({theme}) => ({
  padding: '12px 40px',
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
    padding: '14px 56px',
    fontSize: '1.125rem'
  }
}));
