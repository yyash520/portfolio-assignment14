import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import Header from '../components/header';

const resources = [
  {
    title: "React Documentation",
    image: "data:image/png;base64,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",
    summary: "Official React documentation for learning hooks, components, and core concepts.",
    link: "https://reactjs.org/docs/getting-started.html"
  },
  {
    title: "MDN Web Docs",
    image: "https://via.placeholder.com/150",
    summary: "Comprehensive resource for JavaScript, HTML, CSS, and other web standards.",
    link: "https://developer.mozilla.org/"
  },
  {
    title: "FreeCodeCamp",
    image: "data:image/jpeg;base64,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",
    summary: "Free interactive coding tutorials in web development, JavaScript, and more.",
    link: "https://www.freecodecamp.org/"
  },
  {
    title: "W3Schools",
    image: "/images/w3school.png",
    summary: "Beginner-friendly tutorials for web technologies including HTML, CSS, and JavaScript.",
    link: "https://www.w3schools.com/"
  },
  {
    title: "JavaScript Info",
    image: "https://via.placeholder.com/150",
    summary: "A modern tutorial covering JavaScript from the basics to advanced topics.",
    link: "https://javascript.info/"
  },
  {
    title: "DevDocs",
    image: "https://via.placeholder.com/150",
    summary: "Fast, searchable documentation for multiple programming languages and tools.",
    link: "https://devdocs.io/"
  }
];

const Resources = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Resources
        </Typography>
        <Typography variant="body1" paragraph>
          Here are some resources I personally find useful throughout my journey in full stack development:
        </Typography>

        <Grid container spacing={3}>
          {resources.map((resource, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={resource.image}
                  alt={resource.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {resource.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {resource.summary}
                  </Typography>
                </CardContent>
                <Button
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{ m: 2 }}
                >
                  Visit Resource
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Resources;
