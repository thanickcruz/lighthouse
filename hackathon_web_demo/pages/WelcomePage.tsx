import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const WelcomePage: React.FC = () => {
  useEffect(() => {
    const setStyles = (element: HTMLElement, styles: Partial<CSSStyleDeclaration>) => {
      Object.assign(element.style, styles);
    };

    setStyles(document.body, {
      margin: '0',
      padding: '0',
      height: '100vh',
    });

    setStyles(document.documentElement, {
      margin: '0',
      padding: '0',
      height: '100%',
    });
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log('Button clicked!');
    navigate('/form');
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: '#add8e6',
        textAlign: 'center',
        color: '#fff',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Looking for Insurance?
      </Typography>
      <Typography variant="subtitle1" sx={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        Take our short quiz to find the right match for you!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ padding: '10px 20px', fontSize: '1rem', borderRadius: '5px' }}
        onClick={handleButtonClick}
      >
        Take Our Short Quiz
      </Button>
    </Container>
  );
};

export default WelcomePage;
