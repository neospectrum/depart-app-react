import './App.scss';
import React, { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import { AppRouter } from './components/AppRouter';
import { CubeLoader } from './components/CubeLoader/CubeLoader';

export const App = () => {
  const [ visible, setVisible ] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 3333);
  }, []);

  return (
    <>
      <div className={ visible ? 'wrapper' : 'wrapper-loader'}>
        { visible ?
            <Layout>
              <AppRouter/>
            </Layout>
          :
            <CubeLoader/>
        }
      </div>
    </>
  );
};