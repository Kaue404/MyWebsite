'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import Theme from './styles/theme/Theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <html lang='pt-br'>
          <body>{children}</body>
        </html>
      </ThemeProvider>
    </>
  );
}
