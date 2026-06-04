import {Box, Button, List, ListItem, Typography} from '@mui/material';

function QuizList({questions, onBack}) {
  return (
    <Box
      minHeight="100dvh"
      display="flex"
      flexDirection="column"
      padding="32px 16px"
      backgroundColor="#f5f5f5"
      gap="16px"
    >
      <Button onClick={onBack} sx={{alignSelf: 'flex-start', textTransform: 'none', color: '#1a3a5c'}}>
        ← 돌아가기
      </Button>

      <List disablePadding sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        {questions.map(q => (
          <ListItem
            key={q.id}
            sx={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '12px 16px',
              alignItems: 'flex-start',
              gap: '8px'
            }}
          >
            <Typography fontWeight="bold" color="#1a3a5c" minWidth="fit-content">
              {q.id}. [{q.type}]
            </Typography>
            <Typography>{q.question}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default QuizList;
