'use client';

import { Container, Box, Typography, Button, Grid } from '@mui/material';

export default function HomePage() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #e0f7fa 0%, #ffffff 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem 1rem',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#0277bd' }}>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ marginBottom: '2rem', color: '#455a64' }}>
          The easiest way to create flashcards from your text.
        </Typography>
        <Box sx={{ marginBottom: '3rem' }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: '0.75rem 1.5rem',
              fontSize: '1.1rem',
              marginRight: '1rem',
              backgroundColor: '#0288d1',
              borderRadius: '24px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              '&:hover': { backgroundColor: '#0277bd' },
            }}
            href="/generate"
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              padding: '0.75rem 1.5rem',
              fontSize: '1.1rem',
              borderRadius: '24px',
              borderColor: '#0288d1',
              color: '#0288d1',
              '&:hover': { borderColor: '#0277bd', color: '#0277bd' },
            }}
          >
            Learn More
          </Button>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/images/feature1.png" alt="Feature 1" style={{ width: '80px', marginBottom: '1rem' }} />
              <Typography variant="h6" sx={{ fontWeight: '500' }}>
                Create Flashcards
              </Typography>
              <Typography variant="body1" sx={{ color: '#607d8b' }}>
                Generate flashcards from any text instantly.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/images/feature2.png" alt="Feature 2" style={{ width: '80px', marginBottom: '1rem' }} />
              <Typography variant="h6" sx={{ fontWeight: '500' }}>
                Save & Review
              </Typography>
              <Typography variant="body1" sx={{ color: '#607d8b' }}>
                Store your flashcards and review them anytime.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/images/feature3.png" alt="Feature 3" style={{ width: '80px', marginBottom: '1rem' }} />
              <Typography variant="h6" sx={{ fontWeight: '500' }}>
                AI-Powered
              </Typography>
              <Typography variant="body1" sx={{ color: '#607d8b' }}>
                Leverage AI to enhance your learning experience.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
