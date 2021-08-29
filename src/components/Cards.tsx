import React from 'react';

export const Cards: React.FC = () => {
  return (
    <div className='cards' id='skills'>
      <div className='cards-wrapper'>
        <div className='cards-layout'>
          <img src='frontend.svg' alt='image of frontend' />
          <h3 className='cards-title'>Front-end Developer</h3>
          <p className='cards-info'>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>

          <p className='cards-subtitle'>Languages I speak:</p>
          <p className='cards-languages'>
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
          <h3 className='cards-title'>Back-end Developer</h3>
          <p className='cards-info'>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>

          <p className='cards-subtitle'>Languages I speak:</p>
          <p className='cards-languages'>
            Asp.Net Core
            <br />
            NodeJs
            <br />
            MySQL
            <br />
            CosmosDB
            <br />
            NoSQL
          </p>
        </div>
      </div>
    </div>
  );
};
