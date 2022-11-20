import React, { FC, ReactNode } from 'react';

import { useScroll } from 'framer-motion';

import { Page } from './containers/Page';
import { Footer } from './template/Footer/Footer';
import { Header } from './template/Header/Header';

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { scrollY } = useScroll();

  const offsetY = [ 0, 310 ];

  return (
      <>
        <Header scrollY={ scrollY } offsetY={ offsetY }/>
          <Page>
              { children }
          </Page>
        <Footer/>
      </>
  );
};

export default Layout;
