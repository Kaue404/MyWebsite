'use client';

import HeaderComponent from '../components/header';
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
        display: 'flex',
        flexDirection: 'column',
        marginTop: '7rem',
        alignItems: 'start',
        justifyContent: 'start',
        height: '100vh', 
        textAlign: 'center',
        gap: '2rem',
        padding: '1rem',
      }}>
        <Typography variant='body1' sx={{ textAlign:'justify' }}>
          Sou apaixonado por transformar ideias em realidade por meio do 
          código, com experiência em diversas tecnologias e tenho objetivo 
          de participar de projetos com soluções impactantes. Estudante de 
          Desenvolvimento de Software Multiplataforma (DSM) na Fatec de Franca, 
          com certificações intermediárias e microcertificações previstas até 
          2026, inglês avançado e conhecimentos em Front-end, Back-end e 
          tecnologia em geral.
        </Typography>
      </div>
      
    </>
  );
}
