import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className='navbar'>
      <a href='.'>Glenn Troncquo</a>
      <ul className='navbar-items'>
        <li>
          <a href='.'>Home</a>
        </li>
        <li>
          <a href='#skills'>Skills</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <Link to='/contact'>Contact me</Link>
        </li>
      </ul>
    </nav>
  );
};
