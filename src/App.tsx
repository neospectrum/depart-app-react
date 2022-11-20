import React from 'react';

import Layout from './components/Layout';
import { AppRouter } from './components/AppRouter';

import './App.scss';

// App -------------------------------------------------------------------------
function App() {

  return (
    <div className="wrapper">
      <Layout>
        <AppRouter/>
      </Layout>
    </div>
  );
};

export default App;
