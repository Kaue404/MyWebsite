'use client';

import HeaderComponent from './components/header';
import React from 'react';
import { Typography } from '@mui/material';

export default function Page() {
  return (
    <>
      <div style={{
        position: 'fixed',
        width: '100%',
        zIndex: 10,
        top: 0,
      }}>
        <HeaderComponent />
      </div>

      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column', // Altera a direção do flex para column
        alignItems: 'center', // Centraliza os itens horizontalmente
        marginTop: '7rem',
        justifyContent: 'center',
      }}>
        <Typography variant="h1">
          Kauê José Abdalla Leal
        </Typography>
        <Typography sx={{ color: '#64337E' }} variant="h2">
          Desenvolvedor Full-Stack
        </Typography>
      </div>
    </>
  );
}
