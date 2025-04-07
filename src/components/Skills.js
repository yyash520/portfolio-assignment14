import React from 'react';
import { Container, Typography } from '@mui/material';
import Header from '../components/header';
import SkillSection from '../components/SkillSection';

const skillsData = {
  languages: [
    "JavaScript (ES6+)",
    "Python (Basics)",
    "HTML5 & CSS3",
    "SQL"
  ],
  frameworks: [
    "React (Hooks, Router)",
    "Node.js",
    "Express.js",
    "Bootstrap",
    "Tailwind CSS"
  ],
  tools: [
    "Git & GitHub",
    "Docker",
    "VS Code",
    "MongoDB Compass",
    "Postman",
    "Figma (for basic UI design)"
  ]
};

const Skills = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom sx={{ mt: 4 }}>
          My Skills
        </Typography>
        <SkillSection title="Languages" items={skillsData.languages} />
        <SkillSection title="Frameworks & Libraries" items={skillsData.frameworks} />
        <SkillSection title="Tools & Technologies" items={skillsData.tools} />
      </Container>
    </>
  );
};

export default Skills;
