import React from 'react';

export const Projects: React.FC = () => {
  return (
    <div className='project'>
      <h3 className='project-header'> My Recent Works</h3>
      <p className='project-info'>
        Here are a few projects I've already worked on. Want to get in touch?{' '}
        <span>Email me.</span>
      </p>

      <div className='project-images-wrapper'>
        <div className='project-slider'>
          <div className='project-item'>
            <img src='Iphone.svg' alt='' style={{ width: 420 }} />
          </div>
          <div className='project-item'>
            <img src='Iphone.svg' alt='' style={{ width: 420 }} />
          </div>
          <div className='project-item'>
            <img src='Iphone.svg' alt='' style={{ width: 420 }} />
          </div>
          <div className='project-item'>
            <img src='Iphone.svg' alt='' style={{ width: 420 }} />
          </div>
          <div className='project-item'>
            <img src='Iphone.svg' alt='' style={{ width: 420 }} />
          </div>
          <div className='project-item'>
            <img src='Iphone.svg' alt='' style={{ width: 420 }} />
          </div>
          <div className='project-item'>
            <img src='Iphone.svg' alt='' style={{ width: 420 }} />
          </div>
          <div className='project-item'>
            <img src='Iphone.svg' alt='' style={{ width: 420 }} />
          </div>
          <div className='project-item'>
            <img src='Iphone.svg' alt='' style={{ width: 420 }} />
          </div>
          <div className='project-item'>
            <img src='Iphone.svg' alt='' style={{ width: 420 }} />
          </div>
          <div className='project-item'>
            <img src='Iphone.svg' alt='' style={{ width: 420 }} />
          </div>
          <div className='project-item'>
            <img src='Iphone.svg' alt='' style={{ width: 420 }} />
          </div>
        </div>
      </div>
    </div>
  );
};
