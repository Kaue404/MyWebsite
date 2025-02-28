'use client';

import { Typography, useMediaQuery } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Button from './components/button';
import FooterComponent from './components/footer';
import HeaderComponent from './components/header';
import Image from 'next/image';
import ImageCode from '../public/images/Code.png';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import theme from './styles/theme/Theme';

export default function Page() {
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
        marginTop: '10rem',
        marginBottom: '5rem',
        display: 'flex',
        flexDirection: isMediumScreen ? 'column' : 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
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
              fontSize: (() => {
                if (isSmallScreen) return '2rem';
                if (isMediumScreen) return '2.2rem';
                if (isLargeScreen) return '2.5rem';
                return '3.5rem';
              })()}} 
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
          <Button
            sx={{
              fontSize: isLargeScreen ? '0.8rem' : '1.2rem',
            }} 
            href='/projetos'>
            Conheça meus projetos 
            <ArrowForward sx={{
              fontSize: isLargeScreen ? '16px' : '32px', 
              marginLeft: '8px'}}/>
          </Button>
        </div>
        
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingInline: isMediumScreen ? '0' : '1rem',
          borderLeft: isMediumScreen ? 'none' : '1px solid #ccc', 
          marginLeft: isMediumScreen ? '0' : '2rem',
        }}>
          <Image 
            src={ImageCode} 
            alt="Imagem de programação" 
            style={{ 
              maxWidth: (() => {
                if (isSmallScreen) return '290px';
                if (isMediumScreen) return '450px';
                if (isLargeScreen) return '550px';
                return '700px';
              })(),
              height: 'auto', 
              borderRadius: '8px',
            }}
          />
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <FooterComponent />
      </div>
    </>
  );
}
