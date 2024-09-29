import React from 'react';
import { Container, Typography } from '@mui/material';

interface ContainerLayoutProps {
  children: React.ReactNode;
}

export const ContainerLayout: React.FC<ContainerLayoutProps> = ({ children }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#add8e6',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
        Insurance Form
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: '2rem' }}>
        Please fill out the form below
      </Typography>
      {children}
    </Container>
  );
};
