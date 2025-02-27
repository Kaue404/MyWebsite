'use client';

import FooterComponent from '../components/footer';
import HeaderComponent from '../components/header';
import React from 'react';

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
        EM BREVE!
      </div>
      

      <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <FooterComponent />
      </div>
    </>
  );
}
