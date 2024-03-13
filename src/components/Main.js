import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './Main.css'

export default function Main() {
   const location = useLocation();
   const { pathname } = location;
   return (
      <div className='container'>
         <div className='wrapper'>
            <div className='header'>
               <div className='Header_wrapper'>
                  <div className='Logo'>
                     Venkata <span>Narendra</span>
                  </div>
                  <div className='list'>
                     <Link to='/' className={pathname === '/' && 'isActive'}>Home</Link>
                     <Link to='Skills' className={pathname === '/Skills' && 'isActive'}>Skills </Link>
                     <Link to='Projects' className={pathname === '/Projects' && 'isActive'}>Projects</Link>
                     <Link to='SocialMedia' className={pathname === '/SocialMedia' && 'isActive'}>SocialMedia</Link>
                     <Link to='contact' className={pathname === '/contact' && 'isActive'}>contact</Link>
                     <Link to='Resume' className={pathname === '/Resume' && 'isActive'} >Resume</Link>
                  </div>
               </div>
            </div>
            <div className='content'>
               <Outlet />
            </div>
            <div className='Footer'>
               <div className='Footer_wrapper'>
                  <li>G.venkataNarendra</li>
                  <li>Hyderabad</li>
                  <li>dev.gvnarendra@gmail.com</li>
               </div>
            </div>
         </div>
      </div>
   )
}
