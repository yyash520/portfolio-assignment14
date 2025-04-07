import React from 'react';
import { Container, Grid, Typography, Box, Chip, Stack } from '@mui/material';
import Header from '../components/header';

const workItems = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with React, Node.js, and MongoDB",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D",
    link: "",
    techList: ["React", "Node.js", "MongoDB", "Redux", "Material-UI"]
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio website built with React and Material-UI",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "https://yyash520.github.io/YashsRuggedRidgeRanch/",
    techList: ["React", "Material-UI", "CSS3", "Responsive Design"]
  },
  {
    title: "Charity_at_Home",
    description: "Kanban-style task management application with drag-and-drop functionality",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "https://github.com/yyash520/charity_at_home",
    techList: ["React", "React DnD", "Firebase", "Context API"]
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with 5-day forecast",
    image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "#",
    techList: ["React", "API Integration", "Chart.js", "Geolocation"]
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "#",
    techList: ["React", "D3.js", "Express", "REST API"]
  },
  {
    title: "CRM App",
    description: "Search and save recipes with nutritional information",
    image: "https://images.unsplash.com/flagged/photo-1558963675-94dc9c4a66a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
    link: "https://github.com/yyash520/crm_project",
    techList: ["React", "Edamam API", "Local Storage", "React Router"]
  }
];

const WorkCard = ({ title, description, image, link, techList }) => {
  return (
    <Box sx={{
      border: '1px solid rgba(255, 255, 255, 0.12)',
      borderRadius: '8px',
      overflow: 'hidden',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
      },
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: '100%',
          height: '180px',
          objectFit: 'cover'
        }}
      />
      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
          {techList.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                color: 'primary.main'
              }}
            />
          ))}
        </Stack>
      </Box>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Box
          component="a"
          href={link}
          sx={{
            display: 'inline-block',
            px: 3,
            py: 1,
            backgroundColor: 'primary.main',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'primary.dark'
            }
          }}
        >
          View Project
        </Box>
      </Box>
    </Box>
  );
};

const Work = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 6,
            fontWeight: 700,
            textAlign: 'center',
            color: 'text.primary'
          }}
        >
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {workItems.map((work, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <WorkCard {...work} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Work;