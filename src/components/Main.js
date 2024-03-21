import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './Main.css'
import { SlUser, SlBriefcase } from "react-icons/sl";
import { FaRegFileAlt } from "react-icons/fa";


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
                  </div>
               </div>
            </div>
            <div className='content'>
               <Outlet />
            </div>
            <div className='Footer'>
               <div className='list'>
                  <Link to='/' className={pathname === '/' && 'isActive'}>
                     <SlUser />
                     About
                  </Link>
                  <Link to='Skills' className={pathname === '/Skills' && 'isActive'}>

                     Skills
                  </Link>
                  <Link to='Projects' className={pathname === '/Projects' && 'isActive'}>
                     <SlBriefcase />
                     Work
                  </Link>
                  <Link to='contact' className={pathname === '/contact' && 'isActive'}>contact</Link>
                  <Link to='Resume' className={pathname === '/Resume' && 'isActive'} >
                     <FaRegFileAlt />
                     Resume
                  </Link>
                  <Link to='Resume' className={pathname === '/Resume' && 'isActive'} >Blog</Link>
                  <Link to='Resume' className={pathname === '/Resume' && 'isActive'} >Resume</Link>
                  <Link to='Resume' className={pathname === '/Resume' && 'isActive'} >Resume</Link>
               </div>
            </div>
         </div>
      </div>
   )
}
