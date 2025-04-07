import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from '../components/header';

const Home = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="body1" paragraph>
            Hello! I'm Yash, a passionate Full Stack Web Development student currently studying at RRC Polytech in Winnipeg, Manitoba. I’m on a journey to become a skilled web developer who can build clean, scalable, and user-friendly applications that solve real-world problems.
          </Typography>
          <Typography variant="body1" paragraph>
            Throughout my coursework and personal projects, I’ve had hands-on experience with modern technologies like HTML5, CSS3, JavaScript, React, Node.js, Express, PHP, and MySQL. I’m also familiar with version control using Git and GitHub, responsive design principles, and deploying web apps using tools like Docker and Netlify.
          </Typography>
          <Typography variant="body1" paragraph>
            Some of the projects I’ve worked on include a dynamic ranch store website, an interactive calculator with validation, and a portfolio app that features contact forms, testimonials, and animated components. I enjoy both the creative and logical sides of web development — designing UIs and writing efficient code go hand in hand.
          </Typography>
          <Typography variant="body1" paragraph>
            I’m always eager to learn more, whether that’s through new tech stacks, collaboration with others, or real-world internships. In the future, I hope to contribute to innovative teams building powerful applications in tech-forward industries.
          </Typography>
          <Typography variant="body1" paragraph>
            Feel free to look around, check out my past work, and reach out through the contact section if you'd like to connect. I'm open to freelance opportunities, internships, or just chatting about tech!
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;
