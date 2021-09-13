import React from 'react';

export const Projects: React.FC = () => {
  return (
    <div className='project' id='projects'>
      <h3 className='project-header'> My Recent Works</h3>
      <p className='project-info'>
        Here are a few projects I've already worked on. Want to get in touch?{' '}
        <a href='mailto:glenntroncquo1@gmail.com'>Email me.</a>{' '}
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

              <a href='https://github.com/glenntroncquo/Meal_App'>
                Visit Github
              </a>
            </div>
          </div>

          <div className='project-item'>
            <img className='project-item-img' src='revolut.png' alt='' />
            <div className='project-item-info'>
              <h3>Animation School Project</h3>
              <p className='project-item-info-p'>
                Make a landing page for a brand of choice. Animate 4 sections of
                the page.
              </p>

              <p>Technologies: Html, CSS, After Effects</p>

              <a href='https://glenntroncquo.github.io/Motion_Design/'>
                Visit Website
              </a>
            </div>
          </div>

          <div className='project-item'>
            <img
              className='project-item-img'
              src='asp.net.png'
              alt='asp.net backend project'
            />
            <div className='project-item-info'>
              <h3>School Backend Project</h3>
              <p className='project-item-info-p'>
                ASP.NET WebAPI backend project with Docker.
              </p>

              <p>Technologies: ASP.NET, Docker, SQL</p>

              <a href='https://github.com/glenntroncquo/Project_Backend'>
                Visit Github
              </a>
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

              <a href='https://github.com/glenntroncquo'>Visit Github {'>'}</a>
            </div>
          </div>
        </div>

        <div className='image'>
          <img src='iPhone.svg' alt='iphone'/>
          <div className='overlay'>

            <div>
              Hello world ?
            </div>


          </div>
        </div>
      </div>

      <a
        href='https://github.com/glenntroncquo'
        target='_blank'
        rel='noreferrer'
        className='github-button'
      >
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='48'
            height='47.001'
            viewBox='0 0 48 47.001'
          >
            <g id='github-logo' transform='translate(0 -5.329)'>
              <g
                id='Group_1'
                data-name='Group 1'
                transform='translate(0 5.329)'
              >
                <path
                  id='Path_3'
                  data-name='Path 3'
                  d='M24,5.329a24.11,24.11,0,0,0-7.581,46.959c1.2.222,1.638-.522,1.638-1.161,0-.573-.021-2.088-.033-4.1C11.346,48.484,9.936,43.8,9.936,43.8c-1.089-2.784-2.664-3.525-2.664-3.525-2.181-1.494.162-1.464.162-1.464a5.041,5.041,0,0,1,3.675,2.484c2.142,3.681,5.619,2.619,6.987,2a5.143,5.143,0,0,1,1.524-3.222C14.292,39.463,8.688,37.4,8.688,28.165A9.34,9.34,0,0,1,11.16,21.7a8.683,8.683,0,0,1,.234-6.375s2.016-.648,6.6,2.469a22.654,22.654,0,0,1,12.018,0c4.581-3.117,6.594-2.469,6.594-2.469a8.7,8.7,0,0,1,.24,6.375,9.322,9.322,0,0,1,2.466,6.468c0,9.255-5.61,11.292-10.956,11.889a5.764,5.764,0,0,1,1.629,4.461c0,3.222-.03,5.82-.03,6.609,0,.645.432,1.4,1.65,1.158A24.112,24.112,0,0,0,24,5.329Z'
                  transform='translate(0 -5.329)'
                />
              </g>
            </g>
          </svg>
        </span>
        <p>See all on Github</p>
      </a>
    </div>
  );
};
