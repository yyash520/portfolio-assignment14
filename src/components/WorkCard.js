import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Chip, Stack } from '@mui/material';

const WorkCard = ({ title, description, image, link, techList }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          {techList.map((tech, index) => (
            <Chip key={index} label={tech} size="small" />
          ))}
        </Stack>
      </CardContent>
      <Button href={link} size="small" sx={{ mb: 2 }}>View Project</Button>
    </Card>
  );
};

export default WorkCard;