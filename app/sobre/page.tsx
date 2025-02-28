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
import FooterComponent from '../components/footer';
import HeaderComponent from '../components/header';
import Link from '../components/link';
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
    label: '2025 - Atualmente',
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
        marginBottom: '3rem',
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
          <Typography variant='h2' 
            sx={{ 
              fontSize: isMediumScreen ? '1.7rem' : '2rem',
              fontWeight: 'bold', 
              mb: '1rem', 
              color: '#64337E', 
              textAlign:'left' }}>
            Jornada:
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

      <div style={{
        marginInline: isMediumScreen ?'2rem' : '8rem',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem',
      }}>
        <Typography variant='h2' 
          sx={{ 
            fontSize: isMediumScreen ? '1.7rem' : '2rem',
            fontWeight: 'bold', 
            mb: '1rem', 
            color: '#64337E', 
            textAlign:'center' }}>
            Minha História e meus Principais Hobbies
        </Typography>
        <Typography variant='body1' 
          sx={{ mb: 1, textAlign:'justify', textIndent: '30px' }}>
            Nasci no dia 12/03/2005, tenho olhos castanhos, cabelo enrolado
            preto e com 1,90 de altura, gosto de comer sushi e lasanha,
            minhas cores favoritas são preto e roxo (acho que da pra perceber 
            pelo site), gosto de ouvir Rock, Trap e Rap e sou uma pessoa 
            calma e brincalhona, que é mais de ficar em casa e ficar tranquilo.
            Eu vivi minha vida inteira em Franca-SP e desde criança eu gostava
            muito de jogar em sites e assistir vídeos na internet, jogava
            aqueles joguinhos de flash, mesmo tendo um ps1 no quarto e assistia 
            alguns youtubers. Quando fiquei um pouco mais velho, pedi para minha
            Mãe um outro vídeogame, na época ganhei um xbox360 e com ele, joguei
            muito com meu primo e sozinho em casa. Foi dai que surgiu minha 
            atração por tecnologia, decidi fazer um curso de inglês por 5 anos e
            entrar para área de tecnologia em uma faculdade. 
        </Typography>
        <Typography variant='body1' 
          sx={{ mb: 1, textAlign:'justify', textIndent: '30px' }}>
            Meu primeiro trabalho foi em uma pequena empresa sendo técnico 
            eletrônico, lá eu sofri um pouquinho mas de resto foi tranquilo, 
            depois de um tempo eu entrei para a Lev Negócios, como estágiário em
            Suporte de Operações, depois de alguns meses eu troquei para a área
            de TI da empresa sendo estagiário Full Stack e atualmente estou
            efetivado na mesma, fazendo papel tanto de Full Stack quanto de 
            Front End.
        </Typography>
        <Typography variant='body1' 
          sx={{ textAlign:'justify', textIndent: '30px' }}>
              Em relação aos jogos, meu jogo preferido é Spider-Man de ps4, até
            porque ele também é meu herói preferido, meu gênero de jogo
            preferido é RPG e o meu verdadeiro sonho nessa área é poder 
            desenvolver meu próprio jogo, criando desde o ínicio até o final do 
            desenvolvimento. Acredito que jogos são uma verdadeira arte
            em todos os sentidos e acredito também que seja a maneira mais fácil
            de se expressar por meio dela, até porque um jogo tem música, tem
            cenas cinematográficas, há uma história e você tem o controle sobre 
            ela.
        </Typography>
        <div style={{display: 'flex'}}>
          <Typography variant='body1' 
            sx={{ mb: 4, textAlign:'justify' }}>
            Caso tenha interesse em conversar comigo, acesse minhas redes 
            sociais, ou a página de
          </Typography>
          <Link sx={{
            height: '100%',
            marginLeft: '6px',
          }} href='/contato'>
            Contato
          </Link>
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <FooterComponent />
      </div>
    </>
  );
}
