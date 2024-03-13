import React from 'react'

export default function Home() {
   return (
      <div className='Home_container'>
         <div className='Home_wrapper'>
            <div className='Home_content'>
               <div className='content_wrapper'>
                  <h2>Hello</h2>
                  <h2>I, AM</h2>
                  <h1>G venkata Narendra</h1>
                  <h2>Software Engineer (MERN)</h2>
                  <p className='summary'>👋 Hey there! I'm G venkata narendra, a MERN stack developer passionate about making cool websites. With 2 years of experience, I focus on creating fast, easy-to-use web apps. I also specialize in building secure APIs using Node.js and Lambda. Let's create something awesome together!</p>
                  <div className='Buttons'>
                     <button>Hire Me</button>
                     <button className='Black_button'>Contact Me</button>
                  </div>
               </div>
            </div>
            <div className='Home_image'>
               <img src='my-resume/assets/Home.png' alt='home' />
            </div>
         </div>
      </div>
   )
}
