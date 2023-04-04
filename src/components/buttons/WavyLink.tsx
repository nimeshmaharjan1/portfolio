import React, { ReactNode } from 'react';
import { WavyLink } from 'react-wavy-transitions';
const WavyLinkChild: React.FC<{ to: string; children: ReactNode }> = ({ to, children }) => {
  return (
    <WavyLink duration={1000} direction="up" color="#C5A6E2" to={to}>
      {children}
    </WavyLink>
  );
};

export default WavyLinkChild;
