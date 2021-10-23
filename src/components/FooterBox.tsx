import React from 'react';
import { Link } from 'react-router-dom';

export const FooterBox = () => {
  return (
    <div className='footerbox' id='footerbox'>
      <p>Let's start a project together</p>
      <p>Interested in working together? Let's queue up a chat!</p>

      <Link className='footerbox-contact' to='/contact'> Let's do this</Link>
    </div>
  );
};
