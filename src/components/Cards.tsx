import React from 'react';

export const Cards: React.FC = () => {
  return (
    <div className='cards'>
      <div className='cards-wrapper'>
        <div className='cards-layout'>
          <img src='frontend.svg' alt='image of frontend' />
          <h3 className='cards-title'>Front-end Developer</h3>
          <p className='cards-info'>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>

          <p className='cards-subtitle'>Languages I speak:</p>
          <p>
            HTML
            <br />
            CSS
            <br />
            SASS/SCSS
            <br />
            JS
            <br />
            ReactJs
            <br />
            VueJs
          </p>
        </div>
        <div className='cards-layout'>
          <img src='frontend.svg' alt='image of frontend' />
          <h3 className='cards-title'>Front-end Developer</h3>
          <p className='cards-info'>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>

          <p className='cards-subtitle'>Languages I speak:</p>
          <p>
            HTML
            <br />
            CSS
            <br />
            SASS/SCSS
            <br />
            JS
            <br />
            ReactJs
            <br />
            VueJs
          </p>
        </div>
      </div>
    </div>
  );
};
