'use client';

import { Box, 
  Button, 
  Step, 
  StepContent, 
  StepLabel, 
  Stepper, 
  Typography,
  useMediaQuery } 
  from '@mui/material';
import HeaderComponent from '../components/header';
import React from 'react';
import theme from '../styles/theme/Theme';

const steps = [
  {
    label: '2022',
    description: '- Ensino Médio: PEI Sudário Ferreira',
  },
  {
    label: '2023',
    description: '- Curso de Inglês: CCBEU, Franca',
  },
  {
    label: '2024',
    description: `- Estágio de Desenvolvedor Full Stack: Lev Negócios <br /> 
    - Técnico Eletrônico: Hayabusa Produções`,
  },
  {
    label: '2025',
    description: `- Desenvolvedor Front End e Full Stack: Lev Negócios <br /> 
    - Diploma de Tecnólogo e Certificações em DSM: FATEC`,
  },
];

export default function Page() {

  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const lastStepIndex = steps.length - 1;

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
        marginInline: isMediumScreen ?'2rem' : '5.2rem',
        display: 'flex',
        flexDirection: isMediumScreen ? 'column' : 'row',
        marginTop: '7rem',
        alignItems: 'start',
        justifyContent: 'start',
        height: '100%', 
        textAlign: 'center',
        padding: '1rem',
      }}>

        <div style={{ 
          flex: 1, 
          marginRight: isMediumScreen ? '0rem' : '2rem' }}>
          <Typography variant='h2' 
            sx={{ 
              fontSize: isMediumScreen ? '1.7rem' : '2rem',
              fontWeight: 'bold', 
              mb: '1rem', 
              color: '#64337E', 
              textAlign:'left' }}>
            Desenvolvedor Full-Stack | Front-End
          </Typography>
          <Typography variant='body1' sx={{ mb: '1rem', textAlign:'justify' }}>
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
          <Box sx={{ maxWidth: 600 }}>
            <Stepper 
              activeStep={activeStep} 
              orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    sx={{
                      '& .MuiStepLabel-label': {
                        color: activeStep === index ? '#64337E' : '#A0A0A0',
                      },
                    }}
                    optional={index === steps.length - 1 ? null : null}>
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography 
                      dangerouslySetInnerHTML={{ __html: step.description }} />
                    <Box sx={{ mb: 2 }}>
                      <Button
                        variant='contained'
                        onClick={handleNext}
                        disabled={activeStep === lastStepIndex}
                        sx={{ mt: 1, mr: 1 }}>
                          Continuar
                      </Button>
                      <Button
                        variant='contained'
                        color='secondary'
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ color:'white', mt: 1, mr: 1 }}>
                          Voltar
                      </Button>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>
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
