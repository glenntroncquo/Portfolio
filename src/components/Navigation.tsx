import React from 'react';

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
          <a href='#footerbox'>Contact me</a>
        </li>
      </ul>
    </nav>
  );
};
