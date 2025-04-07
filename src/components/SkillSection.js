import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const SkillSection = ({ title, items }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SkillSection;