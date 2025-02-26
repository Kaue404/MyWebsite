'use client';

import { Container, Typography } from '@mui/material';
import Button from './components/button';
import React from 'react';

const Custom404: React.FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}>
      <Typography variant="h1" 
        sx={{ fontSize: '4rem', fontWeight: 'bold', mb: 2 }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Página não encontrada
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        A página que você está procurando
        pode ter sido removida ou não está disponível.
      </Typography>
      <Button href="/">
          Voltar para a página inicial
      </Button>
    </Container>
  );
};

export default Custom404;
