'use client';

import { Typography, useMediaQuery } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Button from './components/button';
import FooterComponent from './components/footer';
import HeaderComponent from './components/header';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import theme from './styles/theme/Theme';

export default function Page() {
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

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
        flexDirection: isMediumScreen ? 'column' : 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        gap: '2rem',
        padding: '1rem',
      }}>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
        }}>
          <Typography 
            sx={{ 
              fontSize: isMediumScreen ? '2rem' : '3.5rem' }} 
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
          <Button href='/projetos'>
            Conheça meus projetos 
            <ArrowForward sx={{ marginLeft: '8px'}}/>
          </Button>
        </div>
        
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          borderLeft: isMediumScreen ? 'none' : '1px solid #ccc', 
          marginLeft: isMediumScreen ? '0' : '2rem',
        }}>

        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <FooterComponent />
      </div>
    </>
  );
}
