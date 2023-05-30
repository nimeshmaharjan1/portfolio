import React, { ReactNode } from 'react';
import { Work_Sans } from 'next/font/google';
import Header from './header';

const work_sans = Work_Sans({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });
const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={work_sans.className}>
      <Header></Header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
