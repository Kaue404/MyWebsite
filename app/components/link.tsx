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
  const [hovered, setHovered] = React.useState(false);

  const getColor = () => {
    if (hovered) return isActive ? '#64337E' : '#808080';
    return isActive ? '#F1F1F1' : '#64337E';
  };

  return (
    <Link
      href={href}
      className={clsx({ active: isActive })}
      style={{
        textDecoration: 'none',
        color: getColor(),
        fontWeight: '500',
        fontFamily: 'Montserrat',
        transition: 'color 0.3s ease',
        ...((sx as React.CSSProperties) || {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkComponent;
