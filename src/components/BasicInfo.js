import React from 'react';
import { Container, Typography, Box, Avatar, Paper } from '@mui/material';
import Header from '../components/header';

const BasicInfo = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, my: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
            <Avatar
              alt="Your Name"
              src="/path/to/your/image.jpg"
              sx={{ width: 150, height: 150, mb: 2 }}
            />
            <Typography variant="h3" component="h1">
              Your Name
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Your Profession/Title
            </Typography>
          </Box>

          <Typography variant="h5" gutterBottom>
            About Me
          </Typography>
          <Typography paragraph>
            [Your introduction/bio goes here. Talk about your background, education,
            and what you're passionate about in development.]
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Contact Information
          </Typography>
          <Typography paragraph>
            Email: your.email@example.com<br />
            GitHub: github.com/yourusername<br />
            LinkedIn: linkedin.com/in/yourprofile
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default BasicInfo;