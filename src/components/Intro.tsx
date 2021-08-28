import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../utils/dataAcces';

export const Intro = () => {
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState<string>();
  const [img, setImg] = useState<string>();

  const handleClick = async () => {
    // console.log(;
    let json = await getData(`https://pokeapi.co/api/v2/pokemon/${1+(Math.floor(Math.random() * (895 - 1)))}`);
    console.log(json);
    setName(json['forms'][0]['name']);
    setImg(json['sprites']["front_default"]);

    setClicked(true);
  };
  return (
    <section className='intro'>
      <div className='intro-img'></div>

      <h2 className='intro-header'>Hi, I'm Glenn</h2>
      <p className='intro-text'>
        A passionate full stack developer student based in Belgium,
        East-Flanders 😁
      </p>

      {/* <button className='intro-button'>Contact Me</button> */}

      {/* <svg
            xmlns='http://www.w3.org/2000/svg'
            width='450'
            height='450'
            viewBox='0 0 1067 1066'
            className='intro-svg'
          >
            <ellipse
              id='Ellipse_1'
              data-name='Ellipse 1'
              cx='533.5'
              cy='533'
              rx='533.5'
              ry='533'
              fill='#10cc8c'
            />
          </svg> */}
      <div className='intro-pokemon'>
        {clicked ? (
          <>
            {/* <img src="" alt="" /> */}

            <div className='pokemon-text'>
              <img className='pokemon-img' src={img} alt="image of a random pokemon" />
            A wild <span>{name}</span> appeared!
          </div>
          </>
        ) : (
          <img
            className='bounce'
            src='pokeball.svg'
            alt='image of a pokeball'
            onClick={handleClick}
          />
          
        )}
      </div>
    </section>
  );
};
