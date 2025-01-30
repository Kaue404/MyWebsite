import { 
  Box,
  Button,
  Drawer, 
  IconButton, 
  useMediaQuery, 
} from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import Link from 'next/link';
import LinkComponent from './link';
import Logo from '../../public/images/Logo.png';
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
          }}
        >
          <Link href='/'>
            <Image
              src={Logo}
              alt='Logo'
              layout='intrinsic'
              width={(() => {
                if (isXSmallScreen) return 90;
                if (isSmallScreen) return 95;
                if (isMediumScreen && !isSmallScreen) return 100;
                if (isLargeScreen && !isMediumScreen) return 120;
                if (isXLargeScreen && !isLargeScreen) return 126;
                return 127.17;
              })()}
              height={(() => {
                if (isXSmallScreen) return 15;
                if (isSmallScreen) return 20;
                if (isMediumScreen && !isSmallScreen) return 25;
                if (isLargeScreen && !isMediumScreen) return 30;
                if (isXLargeScreen && !isLargeScreen) return 36;
                return 36.33;
              })()}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
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
                    <LinkComponent isActive href='/sobre'>
                        Home
                    </LinkComponent>
                    <LinkComponent isActive href='/produtos'>
                        Sobre
                    </LinkComponent>
                    <LinkComponent isActive href='/'>
                        Contato
                    </LinkComponent>
                    <LinkComponent isActive href='/'>
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
                href='/'>
                  Sobre
              </LinkComponent>
              <LinkComponent
                isActive
                href='/'>
                  Contato
              </LinkComponent>
              <Button
                sx={{
                  backgroundImage: 'linear-gradient(45deg, #D68BB4, #64337E)',
                  color: 'white',
                  paddingInline: 2,
                  borderRadius: 5,
                  fontWeight: '700',
                  fontSize: '0.8rem',
                  transition: 
                  // eslint-disable-next-line @stylistic/max-len
                  'background-image 0.5s ease, background-color 0.5s ease, color 0.5s ease',
                  '&:hover': {
                    backgroundImage: 'none', 
                    backgroundColor: '#D68BB4',
                    color: 'white',
                  },
                  '&:active': {
                    backgroundColor: '#64337E', 
                    backgroundImage: 'none',
                  },
                }}
              >
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
