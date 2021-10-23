import React from 'react';
import { Link } from 'react-router-dom';

export const ContactNavigation: React.FC = () => {
  return (
    <nav className='contact-navbar'>
      <Link to='/' className='contact-home'>
        Glenn Troncquo
      </Link>

      <div className='contact-navbar-buttons'>
        <svg
          className='contact-navbar-refresh'
          aria-hidden='true'
          data-prefix='fas'
          data-icon='undo-alt'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          data-fa-i2svg=''
        >
          <path
            fill='#10cc8c'
            d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'
          ></path>
        </svg>

        <Link to='/'>
          <svg
            className='contact-navbar-close'
            aria-hidden='true'
            data-prefix='fas'
            data-icon='times'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384 512'
            data-fa-i2svg=''
          >
            <path
              fill='#10cc8c'
              d='M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z'
            ></path>
          </svg>
        </Link>
      </div>
    </nav>
  );
};
