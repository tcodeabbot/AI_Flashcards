// Manuel's code

import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button } from '@mui/material';
import {SignUp } from '@clerk/nextjs';
import Link from 'next/link';
import { ClerkProvider } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <>


      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <Button color="inherit">
            <Link href="/sign-in" passHref>
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/signup" passHref>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      <Container color='white' maxWidth="sm" sx={{ mt: 8 }}>
            <SignUp />
        </Container>
 
    </>
  );
}