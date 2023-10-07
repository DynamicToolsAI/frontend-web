import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h1" color="error" gutterBottom>
        404 Error!
      </Typography>
      <Typography variant="h5" color="textSecondary" paragraph>
        Page not found.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Home page
      </Button>
    </Container>
  );
};

export default NotFound;
