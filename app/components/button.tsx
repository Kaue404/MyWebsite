'use client';

import { Button, ButtonProps } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import React from 'react';
import theme from '../styles/theme/Theme';

export interface ButtonComponentProps extends Omit<ButtonProps, 'variant'> {
  customVariant?: 'primary' | 'secondary' | 'tertiary'; 
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  customVariant = 'primary',
  onClick,
  sx,
  children,
  ...props
}) => {
  const theme = useTheme();

  const getColor = () => {
    switch (customVariant) {
      case 'primary':
        return theme.palette.primary.main;
      case 'secondary':
        return theme.palette.primary.light;
      case 'tertiary':
        return theme.palette.secondary.main;
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: getColor(),
        color: 'white',
        borderRadius: 10,
        transition: 'all 0.3s ease-in-out', 
        boxShadow: 'none', 
        ...sx,
        '&:hover': {
          backgroundColor: '#D68BB4',
          color: 'white',
        },
        '&:active': {
          backgroundColor: '#64337E', 
        },
      }}
      {...props}>
      {children}
    </Button>
  );
  
};

const ThemedButtonComponent: React.FC<ButtonComponentProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonComponent {...props} />
    </ThemeProvider>
  );
};

export default ThemedButtonComponent;
