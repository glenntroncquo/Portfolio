import React from 'react';
import emailjs from 'emailjs-com';

import { ContactNavigation } from '../components/ContactNavigation';

export const Contact: React.FC = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log('Form submitted');
    await emailjs.init('user_KJTnTtDs0btnqzGo33NQg');

    emailjs.sendForm('contact_service', 'contact_form', event.target).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div>
      <header className='contact-header'>
        <ContactNavigation />
      </header>

      <section className='contact' data-aos='zoom-in'>
        <p className='contact-text'>
          Thanks for taking the time to reach out. How can I help you today?
        </p>

        <form onSubmit={handleSubmit} className='contact-form'>
          <div className='contact-inputs'>
            <div>
              <label htmlFor='name' className='contact-label'>
                Name
              </label>
              <input
                type='text'
                name='user_name'
                id='name'
                className='contact-input'
              />
            </div>

            <div>
              <label htmlFor='user_email' className='contact-label'>
                Email
              </label>
              <input
                type='email'
                name='user_email'
                id='user_email'
                className='contact-input'
              />
            </div>
          </div>

          <div className='contact-textbox'>
            <label htmlFor='message' className='contact-label'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              className='contact-textarea'
            ></textarea>
          </div>

          <input type='submit' className='contact-submit' />
        </form>
      </section>
    </div>
  );
};
