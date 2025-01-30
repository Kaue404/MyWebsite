import Link from 'next/link';
import React from 'react';
import { SxProps } from '@mui/material';
import clsx from 'clsx';

interface LinkComponentProps {
  href: string;
  isActive?: boolean;
  sx?: SxProps; 
  children: React.ReactNode;
}

const LinkComponent: React.FC<LinkComponentProps> = ({
  href,
  isActive = false,
  children,
  sx,
  ...props
}) => {
  return (
    <Link href={href} {...props} legacyBehavior passHref>
      <a
        className={clsx({ active: isActive })}
        style={{
          textDecoration: isActive ? 'none' : 'none',
          color: isActive ? '#F1F1F1' : '#64337E',
          fontWeight: isActive ? '500' : '500',
          fontFamily: 'Montserrat',
          transition: 'color 0.3s ease', 
          ...((sx as React.CSSProperties) || {}),
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.color = 
          isActive ? '#64337E' : '#808080';
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.color = 
          isActive ? '#F1F1F1' : '#64337E';
        }}
      >
        {children}
      </a>
    </Link>
  );
};

export default LinkComponent;
