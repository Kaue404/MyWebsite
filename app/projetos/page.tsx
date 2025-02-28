'use client';

import CardsSection from '../components/cardsSection';
import FooterComponent from '../components/footer';
import HeaderComponent from '../components/header';
import React from 'react';

export default function Page() {

  const cards = [
    { 
      imageUrl: '/images/API-Pokemon.png', 
      title: 'Site de API Pokemon', 
      animation: 'slideDown',
      onClick: () => window.location.href = 
      'https://github.com/Kaue404/API-Pokemon',
    },
    { 
      imageUrl: '/images/Wonderlust-PI.png', 
      title: 'Projeto PI: Wonderlust', 
      animation: 'slideUp',
      onClick: () => window.location.href = 
      'https://github.com/FatecFranca/DSM-G09-PI3-2024-1',
    },
    { 
      imageUrl: '/images/Sample-Chart.png', 
      title: 'Sample de Gráficos', 
      animation: 'slideDown',
      onClick: () => window.location.href = 
      'https://github.com/Kaue404/Samples',
    },
    { 
      imageUrl: '/images/Project-Dome.png', 
      title: 'Projeto PI: Dome', 
      animation: 'slideDown',
      onClick: () => window.location.href = 
      'https://github.com/bodelha/dome',
    },
    { 
      imageUrl: '/images/ProjetoApi-Web.png', 
      title: 'Sample de API Web', 
      animation: 'slideUp',
      onClick: () => window.location.href = 
      'https://github.com/Kaue404/lab-web-2024-2',
    },
    { 
      imageUrl: '/images/Atividade-Native.png', 
      title: 'Projeto React Native', 
      animation: 'slideDown',
      onClick: () => window.location.href = 
      'https://github.com/Kaue404/AtividadeNative',
    },
  ];

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
        marginTop: '14rem',
        marginBottom: '8rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%', 
        textAlign: 'center',
        gap: '2rem',
      }}>
        <div style={{ 
          width: '100%', 
          height: '62%',
          position: 'relative', 
          display: 'flex' }}>
          <CardsSection cards={cards} />
        </div>
      </div>
      
      <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <FooterComponent />
      </div>
    </>
  );
}
