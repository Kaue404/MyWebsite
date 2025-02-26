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
        marginInline: '5.2rem',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '7rem',
        alignItems: 'start',
        justifyContent: 'start',
        height: '100%', 
        textAlign: 'center',
        padding: '1rem',
      }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <Typography variant='h2' 
            sx={{ 
              fontWeight: 'bold', 
              mb: '1rem', 
              color: '#64337E', 
              textAlign:'justify' }}>
            Desenvolvedor Full-Stack | Front-End
          </Typography>
          <Typography variant='body1' sx={{ textAlign:'justify' }}>
            Sou apaixonado por transformar ideias em realidade por meio do 
            código, com experiência em diversas tecnologias, tenho objetivo 
            de participar de projetos com soluções impactantes. Sou estudante 
            de Desenvolvimento de Software Multiplataforma (DSM) na Fatec de 
            Franca, com certificações intermediárias e microcertificações 
            previstas até 2026, inglês avançado e conhecimentos em Front-end, 
            Back-end e tecnologia em geral. Já trabalhei na área de tecnologia 
            na empresa Lev Negócios sendo full stack e front end também, 
            utilizando várias ferramentas e frameworks.
          </Typography>
        </div>

        <div style={{ flex: 1 }}>
          <img 
            src="/images/EuMesmo.jpg"
            alt="Kauê José" 
            style={{ 
              width: '70%', 
              height: '700px', 
              borderRadius: '40px',
              objectFit: 'fill',
            }}/>
        </div>
      </div>
    </>
  );
}
