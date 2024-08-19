import React from 'react';
import { Container, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';
import "../../../globals.css"; // Import global styles for consistency

export default function SignInPage() {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#2c3e50" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Flashcard SaaS
          </Typography>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            <Link href="/sign-in" passHref>
              Login
            </Link>
          </Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            <Link href="/sign-up" passHref>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 8, bgcolor: "#ffffff", p: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" textAlign="center" mb={3} sx={{ fontWeight: "bold", color: "#2c3e50" }}>
          Sign In to Flashcard SaaS
        </Typography>
        <SignIn />
        <Box textAlign="center" mt={2}>
          <Typography variant="body2" color="textSecondary">
            Don't have an account yet?{" "}
            <Link href="/sign-up" passHref>
              <Button variant="outlined" sx={{ mt: 1 }}>
                Sign Up
              </Button>
            </Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
}
