'use client';

import HeaderComponent from './components/header';
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', 
        textAlign: 'center',
        gap: '2rem',
        padding: '1rem',
      }}>
        <Typography 
          sx={{ 
            fontSize: '3.5rem' }} 
          variant="h1">
          <TypeAnimation
            sequence={[
              'Olá, Bem vindo ao meu Portifólio WebSite',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={0} 
          />
        </Typography>

        <div
          style={{
            opacity: 0.2,
            transition: 'opacity 1.5s ease-in-out',
            position: 'absolute', 
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}>
          <Image
            src="/images/Background.jpg"
            alt="Fundo"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}
