import React from 'react';
import { useState } from 'react';

import { HamburgerSpring } from 'react-animated-burgers';

export const MobileNavigation: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className='navbar-mobile'>
      <a href='.'>Glenn Troncquo</a>

      <div className='hamburger'>
        <HamburgerSpring
          isActive={isActive}
          toggleButton={toggleButton}
          barColor={'#202836'}
          buttonWidth={24}
        />
      </div>
      <ul
        className={
          isActive ? 'navbar-mobile-links open' : 'navbar-mobile-links'
        }
      >
        <li>
          <a href='.' onClick={toggleButton}>
            Home
          </a>
        </li>
        <li>
          <a href='#skills' onClick={toggleButton}>
            Skills
          </a>
        </li>

        <li>
          <a href='#projects' onClick={toggleButton}>
            Projects
          </a>
        </li>

        <li>
          <a href='#footerbox' onClick={toggleButton}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
