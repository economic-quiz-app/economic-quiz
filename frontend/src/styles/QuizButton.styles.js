import {Box, Button, styled} from '@mui/material';

// 선택지 버튼 목록을 감싸는 리스트 컨테이너
// component="ul"로 렌더링되므로 listStyle: 'none', padding: 0으로 브라우저 기본 스타일을 초기화
// gap으로 버튼 간격을 설정해 첫/마지막 항목에 별도 margin 처리가 불필요
export const ChoiceList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
  padding: 0,
  listStyle: 'none'
});

// 개별 선택지 버튼
// justifyContent: 'flex-start' — MUI Button의 기본 중앙 정렬 대신 텍스트를 왼쪽 정렬
// transition — 선택 시 테두리/배경 색상 변화를 0.15초 동안 부드럽게 전환
//
// className에 따른 상태별 스타일:
//   '.selected'  — 선택된 상태: 파란 테두리 + 연한 파란 배경
//   '&:disabled' — 제출 후 비활성 상태: 기본 텍스트 색 유지 (MUI 기본값은 흐리게 변함)
export const ChoiceButton = styled(Button)({
  justifyContent: 'flex-start',
  gap: '12px',
  width: '100%',
  padding: '14px 16px',
  border: '1.5px solid #e0e0e0',
  borderRadius: '12px',
  backgroundColor: 'white',
  boxShadow: 'none',
  color: '#333',
  fontSize: '0.9375rem',
  fontWeight: 'normal',
  textTransform: 'none',
  transition: 'border-color 0.15s, background 0.15s',
  '&:hover': {
    backgroundColor: '#f0f4ff',
    borderColor: '#3a5bd9',
    boxShadow: 'none'
  },
  '&.selected': {
    borderColor: '#3a5bd9',
    backgroundColor: '#f0f4ff',
    color: '#3a5bd9'
  },
  '&:disabled': {
    color: '#333'
  }
});
