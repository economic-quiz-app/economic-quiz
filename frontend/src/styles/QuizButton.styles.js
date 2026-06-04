// QuizButton.jsx 보기 버튼 스타일 — MUI styled()로 CSS 역할 분리
import {styled} from '@mui/material';
import {Box, Button} from '@mui/material';

// 보기 버튼 목록 컨테이너 (ul 역할)
export const ChoiceList = styled(Box)({
  listStyle: 'none', // ul 기본 bullet 제거
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '100%'
});

// 보기 버튼 — 답변 선택 후 className으로 정답/오답 색상 전환
// btn-correct: 정답(초록) / btn-wrong: 선택한 오답(핑크)
export const ChoiceButton = styled(Button)(({theme}) => ({
  width: '100%',
  padding: '14px 20px',
  border: '2px solid #4a90e2',
  borderRadius: '8px',
  backgroundColor: 'white',
  color: '#4a90e2',
  fontSize: '1rem',
  fontWeight: 'normal',
  justifyContent: 'flex-start', // MUI Button 기본(center)에서 좌측 정렬로 변경
  textTransform: 'none',
  boxShadow: 'none',
  transition: 'background 0.2s, color 0.2s',
  '&:hover': {
    backgroundColor: '#4a90e2',
    color: 'white',
    boxShadow: 'none'
  },
  '&:disabled': {
    opacity: 0.5,
    border: '2px solid #4a90e2',
    color: '#4a90e2'
  },
  '&.btn-correct:disabled': {
    backgroundColor: '#b7e1cd',
    borderColor: '#b7e1cd',
    color: '#1a3d2b',
    opacity: 1 // 정답 버튼은 투명도 유지 (강조)
  },
  '&.btn-wrong:disabled': {
    backgroundColor: '#f4b8c1',
    borderColor: '#f4b8c1',
    color: '#5c1a1a',
    opacity: 1
  },
  [theme.breakpoints.up('sm')]: {
    padding: '18px 24px',
    fontSize: '1.125rem'
  }
}));
