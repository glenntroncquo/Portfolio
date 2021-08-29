import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../utils/dataAcces';

export const Intro = () => {

  return (
    <section className='intro'>
      <div className='intro-img'></div>

      <h2 className='intro-header'>Hi, I'm Glenn</h2>
      <p className='intro-text'>
        A passionate full stack development student based in Belgium,
        East-Flanders 😁
      </p>

      <button className='intro-button'>Contact Me</button>

      {/* <img className='intro-desktop' src="desktop.svg" alt="" /> */}
      <div className='intro-socials'>
        <img src="instagram-logo.svg" alt="" />
        <img src="linkedin-logo.svg" alt="" />
        <img src="github-logo.svg" alt="" />
      </div>
      <img className='intro-ellipse' src="Ellipse.svg" alt="" />
    </section>
  );
};
