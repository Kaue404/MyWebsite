import '../styles/animations.css';
import { 
  Card, 
  CardContent, 
  Typography, 
  useMediaQuery } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';

interface Card {
  imageUrl: string;
  title: string;
  animation?: string; 
  onClick?: () => void;
}

interface CardsSectionComponentProps {
  cards: Card[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx?: any;
}

const CardsSectionComponent: 
React.FC<CardsSectionComponentProps> = ({ cards, sx }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card) => {
        if (card) { 
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight * 
            0.8 && !card.classList.contains('visible')) {
            card.classList.add('visible');
          }
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className="cards-gallery"
      style={{
        display: 'grid',
        gridTemplateColumns: (() => {
          if (isMediumScreen) return 'repeat(1, 1fr)';
          return 'repeat(3, 1fr)';
        })(),
        columnGap: (() => {
          if (isSmallScreen) return '8px';
          if (isMediumScreen) return '8px';
          if (isLargeScreen) return '20px';
          return '24px';
        })(),
        rowGap: (() => {
          if (isSmallScreen) return '8px';
          return '24px';
        })(),
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        ...sx,
      }}>
      {cards.map((card, index) => (
        <Card
          key={index}
          ref={(el) => { if (el) cardRefs.current[index] = el; }}
          className={'card animated'}
          data-animation={card.animation}
          component="div"
          onClick={card.onClick} 
          style={{
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            padding: isSmallScreen ? '0' : '16px',
            backgroundColor: '#1E1E1E',
            width: (() => {
              if (isMediumScreen) return '300px';
              if (isLargeScreen) return '270px';
              return '360px';
            })(),
            height: '260px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            cursor: 'pointer', 
            ...sx?.card, 
          }}>
          <CardContent style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'start',
              marginTop: (() => {
                if (isSmallScreen) return '0px';
                if (isMediumScreen) return '0px';
                return '8px';
              })(),
              marginBottom: (() => {
                if (isSmallScreen) return '0px';
                if (isMediumScreen) return '0px';
                return '8px';
              })(),
            }}>
              {card.imageUrl && (
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  style={{
                    objectFit: 'cover',
                    maxWidth: '290px',
                    maxHeight: '170px',
                    minHeight: '170px',
                    width: '100%',
                    height: '100%',
                  }} />
              )}
            </div>
            <Typography component="div"
              sx={{
                color: '#64337E',
                fontWeight: '700',
                marginLeft: '8px',
                textAlign: 'center',
                fontSize: (() => {
                  if (isLargeScreen) return '0.8rem';
                  return '1.45rem';
                })(),
              }}>
              {card.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardsSectionComponent;
