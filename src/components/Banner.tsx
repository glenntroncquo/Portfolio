import React from 'react';

export const Banner = () => {
  return (
    <section className='banner'>
      <div className='banner-images'>
        <img className='banner-img' src='react-logo.svg' alt='logo of react' />
        <img
          className='banner-img'
          src='typescript-logo.svg'
          alt='logo of typescript'
        />
        <img
          className='banner-img'
          src='netcore-logo.svg'
          alt='logo of .netcore'
        />
        <img className='banner-img' src='sass-logo.svg' alt='logo of sass' />
        <img className='banner-img' src='mysql-logo.svg' alt='logo of mysql' />
        <img
          className='banner-img'
          src='nodejs-logo.svg'
          alt='logo of nodejs'
        />
      </div>

      <div className='banner-info' id='skills'>
        <div className='banner-text'>
          <div  className='banner-text-years'> 2</div>
          <div>
            <p>Years</p>
            <p>School</p>
            <p>Experience</p>
          </div>
        </div>
        <div className='banner-text-bold'>
          I started my journey as a Full Stack Developer 2 years ago at{' '}
          <a href='https://www.howest.be/en' target='_blank' rel='noreferrer'>
            Howest
          </a>
          ,{' '}
          <a href='https://mct.be/' rel='noreferrer' target='_blank'>
            MCT
          </a>{' '}
          to be specific. I'm still learning and hope to work on projects with
          you to broaden my experience :)
        </div>
      </div>
    </section>
  );
};
