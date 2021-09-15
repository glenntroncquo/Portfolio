import React from 'react';
import { MobileNavigation } from '../components/MobileNavigation';
import { Navigation } from '../components/Navigation';

export const Contact: React.FC = () => {
  return (
    <div className='contact'>
      <header className='header'>
        <Navigation />
        <MobileNavigation />
      </header>

      
    </div>
  );
};
