'use client';
import './styles/globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import Theme from './styles/theme/Theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <html lang='pt-br'>
          <body>{children}</body>
        </html>
      </ThemeProvider>
    </>
  );
}
