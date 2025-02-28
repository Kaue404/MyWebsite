'use client';

import { 
  Alert,
  Box, 
  Button, 
  Snackbar, 
  TextField, 
  Typography, 
  useMediaQuery} from '@mui/material';
import React, { useState } from 'react';
import FooterComponent from '../components/footer';
import HeaderComponent from '../components/header';
import theme from '../styles/theme/Theme';

export default function Page() {
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const MAX_NAME_LENGTH = 50;
  const MAX_EMAIL_LENGTH = 100;
  const MAX_MESSAGE_LENGTH = 500;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > MAX_NAME_LENGTH || 
      email.length > MAX_EMAIL_LENGTH || 
      message.length > MAX_MESSAGE_LENGTH) {
      setSnackbarMessage('Um ou mais campos excederam o limite de caracteres.');
      setOpenSnackbar(true);
      return;
    }

    const mensagemWhatsApp = `Nome: ${name}\nEmail: ${email}\n ${message}`;
    const mensagemCodificada = encodeURIComponent(mensagemWhatsApp);
    const numeroTelefone = '5516999733423';
    const linkWhatsApp = 
    `https://wa.me/${numeroTelefone}?text=${mensagemCodificada}`;
    window.open(linkWhatsApp, '_blank');
  
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };


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

      <div
        style={{
          marginTop: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          height: '100vh',
          padding: '1rem',
          width: '100%',
        }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: (() => {
              if (isSmallScreen) return '300px';
              if (isMediumScreen) return '500px';
              if (isLargeScreen) return '700px';
              return '800px';
            })(),
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            padding: '16px',
            backgroundColor: '#1E1E1E',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
          <Typography 
            sx={{
              fontSize: isSmallScreen ? '2rem' : '2.5rem',
              fontWeight: 'bold',
            }}
            variant="h4" 
            component="h1" 
            gutterBottom>
          Fale Comigo:
          </Typography>
          <TextField
            type="text"
            label="Seu Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            inputProps={{ maxLength: MAX_NAME_LENGTH }}
            helperText={`${name.length}/${MAX_NAME_LENGTH}`}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'white',
              },
              '& .MuiOutlinedInput-input': {
                color: 'white',
              },
              '& .MuiFormHelperText-root': {
                color: 'white',
              },
            }}
            fullWidth/>
          <TextField
            type="email"
            label="Seu Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            inputProps={{ maxLength: MAX_EMAIL_LENGTH }}
            helperText={`${email.length}/${MAX_EMAIL_LENGTH}`}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', 
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'white',
              },
              '& .MuiOutlinedInput-input': {
                color: 'white',
              },
              '& .MuiFormHelperText-root': {
                color: 'white',
              },
            }}
            fullWidth/>
          <TextField
            label="Sua Mensagem"
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            multiline
            rows={4}
            inputProps={{ maxLength: MAX_MESSAGE_LENGTH }}
            helperText={`${message.length}/${MAX_MESSAGE_LENGTH}`}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'white',
              },
              '& .MuiOutlinedInput-input': {
                color: 'white',
              },
              '& .MuiFormHelperText-root': {
                color: 'white',
              },
            }}
            fullWidth/>
          <Button sx={{
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
          }}
          disabled={name.length > 
          MAX_NAME_LENGTH || 
          email.length > MAX_EMAIL_LENGTH || 
          message.length > MAX_MESSAGE_LENGTH}
          variant='contained' type='submit'>
            Enviar
          </Button>
        </Box>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} 
          severity="error" 
          sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <FooterComponent />
      </div>
    </>
  );
}
