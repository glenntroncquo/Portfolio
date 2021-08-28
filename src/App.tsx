import React from 'react';
import { Banner } from './components/Banner';
import { Intro } from './components/Intro';

import { MobileNavigation } from './components/MobileNavigation';
import { Navigation } from './components/Navigation';

import './styles/screen.scss';

function App() {
  return (
    <div className='page'>
      <header className='header'>
        <Navigation />
        <MobileNavigation />
      </header>

      <div className='body'>
        <Intro />
        <Banner />
      </div>
    </div>
  );
}

export default App;
