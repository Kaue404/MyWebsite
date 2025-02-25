import { 
  Box,
  Button,
  Drawer, 
  IconButton, 
  Typography, 
  useMediaQuery, 
} from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import LinkComponent from './link';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme/Theme';
  
const HeaderComponent = () => {
  const isXLargeScreen = useMediaQuery(theme.breakpoints.down('xl'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'transparent',
          height: '6rem',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          borderRadius: 0,
        }}> 
        <Box
          sx={{
            maxWidth: '3000px',
            alignSelf: 'center',
            justifySelf: 'right',
            width: '100%',
            height: '6rem',
            backgroundColor: '#121212', 
            borderRadius: 0,
            boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            paddingInline: (() => {
              if (isXSmallScreen) return '0px';
              if (isSmallScreen) return '10px';
              if (isMediumScreen) return '40px';
              if (isLargeScreen) return '50px';
              if (isXLargeScreen) return '60px';
              return '100px';
            })(),
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Link style={{textDecoration: 'none'}} href='/'>
            <Typography sx={{
              fontSize: '2rem',
              fontWeight: '600',
              transition: '0.5s ease, color 0.5s ease',
              '&:hover': {
                color: 'white',
              },
              '&:active': {
                color: '#D68BB4', 
              },
            }}>
              Kauê
            </Typography>
          </Link>
  
          {isMediumScreen ? (
            <>
              <Grid sx={{
                display: 'flex',
                justifySelf: 'right',
                alignSelf: 'center',
                alignContent: 'center',
                gap: 1.5,
              }}>
                <IconButton
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  onClick={toggleMenu}>
                  <MenuIcon sx={{ color: '#3F3F3F' }} />
                </IconButton>
                <Drawer anchor='right' open={menuOpen} onClose={toggleMenu}>
                  <Box
                    sx={{
                      height: '100%',
                      width: 250,
                      backgroundColor: '#121212',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: 2,
                      gap: 2,
                      borderRadius: 0,
                    }}>
                    <LinkComponent isActive href='/'>
                        Home
                    </LinkComponent>
                    <LinkComponent isActive href='/sobre'>
                        Sobre
                    </LinkComponent>
                    <LinkComponent isActive href='/contato'>
                        Contato
                    </LinkComponent>
                    <LinkComponent isActive href='/projetos'>
                        Meus Projetos
                    </LinkComponent>
                  </Box>
                </Drawer>
              </Grid>
            </>
  
          ) : (
            <Grid
              container
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: (() => {
                  if (isLargeScreen) return 6;
                  if (isXLargeScreen) return 8;
                  return 10;
                })(),
              }}>
              <LinkComponent 
                isActive 
                href='/'>
                  Home
              </LinkComponent>
              <LinkComponent 
                isActive 
                href='/sobre'>
                  Sobre
              </LinkComponent>
              <LinkComponent
                isActive
                href='/contato'>
                  Contato
              </LinkComponent>
              <Button
                sx={{
                  backgroundColor: '#64337E',
                  color: 'white',
                  paddingInline: 2,
                  borderRadius: 5,
                  fontWeight: '700',
                  fontSize: '0.8rem',
                  transition: 
                  // eslint-disable-next-line @stylistic/max-len
                  'background-color 0.5s ease, background-color 0.5s ease, color 0.5s ease',
                  '&:hover': {
                    backgroundColor: '#D68BB4',
                    color: 'white',
                  },
                  '&:active': {
                    backgroundColor: '#64337E', 
                  },
                }}>
                Meus Projetos
              </Button>
            </Grid>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
  
export default HeaderComponent;
