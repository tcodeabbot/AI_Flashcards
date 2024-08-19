"use client";

import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

export default function Home() {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#007bff" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", color: "#fff" }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in" sx={{ textTransform: "none" }}>
              Login
            </Button>
            <Button color="inherit" href="/sign-up" sx={{ textTransform: "none" }}>
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: 'calc(100vh - 64px)', // Adjust for the height of the AppBar
          background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#333',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Welcome to Flashcard SaaS
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            The easiest way to create flashcards from your text.
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="primary"
              href="/generate"
              sx={{
                textTransform: 'none',
                mr: 2,
                px: 4,
                py: 2,
                fontSize: '1.1rem',
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                textTransform: 'none',
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                color: '#333',
                borderColor: '#333',
                '&:hover': {
                  borderColor: '#555',
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
