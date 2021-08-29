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
            <img className='project-item-img' src='iPhone.svg' alt='' />
            <div className='project-item-info'>
              <h3>Meal App</h3>
              <p className='project-item-info-p'>
                Meal planning app {'->'} <br />
                Sign up / Login. Explore new meals and add meals to calendar or
                favorites.
              </p>

              <p>Technologies: React Native, Firebase, Spoonacular API</p>

              <a href=''>Visit Github {'>'}</a>
            </div>
          </div>

          <div className='project-item'>
            <img className='project-item-img' src='iPhone.svg' alt='' />
            <div className='project-item-info'>
              <h3>Meal App</h3>
              <p className='project-item-info-p'>
                Meal planning app {'->'} <br />
                Sign up / Login. Explore new meals and add meals to calendar or
                favorites.
              </p>

              <p>Technologies: React Native, Firebase, Spoonacular API</p>

              <a href=''>Visit Github {'>'}</a>
            </div>
          </div>

          <div className='project-item'>
            <img className='project-item-img' src='iPhone.svg' alt='' />
            <div className='project-item-info'>
              <h3>Meal App</h3>
              <p className='project-item-info-p'>
                Meal planning app {'->'} <br />
                Sign up / Login. Explore new meals and add meals to calendar or
                favorites.
              </p>

              <p>Technologies: React Native, Firebase, Spoonacular API</p>

              <a href=''>Visit Github {'>'}</a>
            </div>
          </div>

          <div className='project-item'>
            <img className='project-item-img' src='iPhone.svg' alt='' />
            <div className='project-item-info'>
              <h3>Meal App</h3>
              <p className='project-item-info-p'>
                Meal planning app {'->'} <br />
                Sign up / Login. Explore new meals and add meals to calendar or
                favorites.
              </p>

              <p>Technologies: React Native, Firebase, Spoonacular API</p>

              <a href=''>Visit Github {'>'}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
