import { Box, Typography, useMediaQuery } from '@mui/material';
import {
  GitHub,
  Instagram, 
  LinkedIn, 
  WhatsApp,
} from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme/Theme';

const FooterComponent: React.FC = () => {

  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={theme}>
      <Box
        component='footer'
        sx={{
          backgroundColor: '#121212',
          color: '#F1F1F1',
          fontWeight: 'light',
          pt: 4,
          width: '100%',
          textAlign: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          position: 'relative',
        }}>
        <div style={{
          margin: '0 auto',
          width: '100%',
          justifyContent: 'center',
          alignContent: 'center',
          maxWidth: '2000px',
          paddingInline: '24px',
        }}>
          <Grid 
            container 
            spacing={12}
            sx={{
              justifyContent: 'center',
              textAlign: isMediumScreen ? 'center' : 'left',
            }}>
            <Grid>
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                Páginas
              </Typography>
              <Box>
                <Link href='/' 
                  style={{ 
                    textDecoration: 'none', 
                    color: 'white', 
                    fontWeight: 'light' }}>
                  Home
                </Link>
              </Box>
              <Box>
                <Link href='/sobre' 
                  style={{ 
                    textDecoration: 'none', 
                    color: 'white', 
                    fontWeight: 'light' }}>
                  Sobre
                </Link>
              </Box>
              <Box>
                <Link href='/contato' 
                  style={{ 
                    textDecoration: 'none', 
                    color: 'white', 
                    fontWeight: 'light' }}>
                  Contato
                </Link>
              </Box>
              <Box>
                <Link href='/projetos' 
                  style={{ 
                    textDecoration: 'none', 
                    color: 'white', 
                    fontWeight: 'light' }}>
                  Projetos
                </Link>
              </Box>
            </Grid>

            <Grid>
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                Contato
              </Typography>
              <Box>
                <Link href='https://api.whatsapp.com/send/?phone=5516999733423' 
                  style={{ 
                    textDecoration: 'none', 
                    color: 'white', 
                    fontWeight: 'light' }}>
                  (16) 99973-3423
                </Link>
              </Box>
              <Box>
                <Link 
                  href='mailto:jkaue986@gmail.com' 
                  style={{ 
                    textDecoration: 'none', 
                    color: 'white', 
                    fontWeight: 'light',
                    wordBreak: 'break-all', 
                    overflowWrap: 'break-word',
                  }}>
                  jkaue986@gmail.com
                </Link>
              </Box>
            </Grid>
            <Grid>
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                Redes Sociais
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  marginTop: 1,
                  justifyContent: 'left',
                  alignItems: 'left',
                }}>
                <Link href='https://www.instagram.com/jkaue_404/'>
                  <Instagram sx={{ color: '#F1F1F1', fontSize: 32 }} />
                </Link>
                <Link href=
                  // eslint-disable-next-line @stylistic/max-len
                  ' https://www.linkedin.com/in/kauê-josé-023220268'>
                  <LinkedIn sx={{ color: '#F1F1F1', fontSize: 32 }} />
                </Link>
                <Link href='https://api.whatsapp.com/send/?phone=5516999733423'>
                  <WhatsApp sx={{ color: '#F1F1F1', fontSize: 32 }} />
                </Link>
                <Link href='https://github.com/Kaue404'>
                  <GitHub sx={{ color: '#F1F1F1', fontSize: 32 }} />
                </Link>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 2,
              textAlign: 'center',
              alignSelf: 'center',
              justifySelf: 'center',
              height: '100%',
              width: '100%',
              backgroundColor: '#121212',
            }}>
            <Typography variant='body1' sx={{ fontWeight: 'light', p: 4 }}>
              © {new Date().getFullYear()} Kauê José Abdalla Leal
            </Typography>
          </Box>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default FooterComponent;
