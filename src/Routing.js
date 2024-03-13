import React from 'react'
import { BrowserRouter as MainRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SocialMedia from './components/SocialMedia'
import Skills from './components/Skilles'
import Resume from './components/Resume'


export default function Routing() {
   return (
      <MainRouter basename="/my-resume">
         <Routes >
            <Route path='/' element={<Main />} >
               <Route index element={<Home />} />
               <Route path='Skills' element={<Skills />} />
               <Route path='Projects' element={<Projects />} />
               <Route path='SocialMedia' element={<SocialMedia />} />
               <Route path='contact' element={<Contact />} />
               <Route path='Resume' element={<Resume />} />
            </Route>
         </Routes>
      </MainRouter>
   )
}
