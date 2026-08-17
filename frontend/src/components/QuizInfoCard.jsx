import {Box, Typography} from '@mui/material';

import {InfoBadge, InfoCard} from '../styles/Quiz.styles.js';

function QuizInfoCard({badge, badgeSx, title, description}) {
  return (
    <InfoCard>
      <InfoBadge size="24px" sx={{color: '#3a5bd9', ...badgeSx}}>
        {badge}
      </InfoBadge>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '2px'}}>
        <Typography fontSize="0.875rem" fontWeight="bold" color="#222">
          {title}
        </Typography>
        <Typography fontSize="0.8rem" color="#888">
          {description}
        </Typography>
      </Box>
    </InfoCard>
  );
}

export default QuizInfoCard;
