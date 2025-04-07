import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import Header from '../components/header';

const DeveloperSetup = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Developer Setup
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            VS Code Setup
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Extensions"
                secondary="ESLint, Prettier, Material Icon Theme, Live Server"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Settings"
                secondary="Auto save enabled, format on save, tab size 2"
              />
            </ListItem>
          </List>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Terminal Setup
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Shell"
                secondary="Zsh with Oh-My-Zsh"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Theme"
                secondary="Powerlevel10k with custom prompt"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Tools"
                secondary="Git, Node.js, Docker, Homebrew"
              />
            </ListItem>
          </List>
        </Paper>

        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Preferred Editor Font
          </Typography>
          <Typography paragraph>
            Fira Code with ligatures enabled
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Font size: 14px | Line height: 1.5
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default DeveloperSetup;