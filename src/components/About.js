import React from 'react';
import { Box, Typography, Container, Avatar, Paper } from '@mui/material';
import Header from '../components/header';

const About = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ mt: 12, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
            <Avatar
              alt="Profile Photo"
              src="/cat.jpeg"
              // Replace with your image path
              sx={{ width: 150, height: 150, mb: 3 }}
            />
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              About Me
            </Typography>
          </Box>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
            My Journey
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            Hi, I'm Yash — a Full Stack Web Development student at RRC Polytech in Winnipeg, MB.
            I’ve always been drawn to technology and how things work under the hood. My journey into web development started with curiosity and grew into a deep passion for coding, solving problems, and building functional web applications from scratch.
          </Typography>

          <Typography paragraph sx={{ mb: 3 }}>
            Over the past year, I’ve gained hands-on experience in designing responsive UIs, writing clean backend logic, and managing databases. I enjoy working on both the front and back end — from creating seamless user experiences to writing secure and efficient server-side code.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
            Education
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            Diploma in Full Stack Web Development<br />
            Red River College Polytechnic, Expected Graduation: 2025
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
            Skills & Expertise
          </Typography>
          <Typography paragraph>
            - Frontend Development (React, JavaScript, HTML5, CSS3)<br />
            - Backend Technologies (Node.js, Express, PHP)<br />
            - Database Management (MySQL, MongoDB)<br />
            - Responsive Design & UI/UX Principles<br />
            - Git & Version Control, Docker, REST APIs<br />
            - Agile Development Practices
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default About;
