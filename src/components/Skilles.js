import React, { useState } from 'react'
import { SkillesList, SkillesListData } from './utilities/SkilesData'
export default function Skilles() {
   const [openSkill, setOpenSkill] = useState('CSS')
   return (
      <div class="Skills_container">
         <div class='skills_wrapper'>
            <div className='Skills_nav'>
               <div className='nav_wrapper'>
                  {
                     SkillesListData && SkillesListData?.map((icon, i) => {
                        return (
                           <li key={i} style={{ background: openSkill === icon?.label ? icon?.color : '', color: openSkill === icon?.label ? "#fff" : '' }} onClick={() => setOpenSkill(icon?.label)}>
                              <span>
                                 {icon.label}
                              </span>
                           </li>
                        )
                     })
                  }
               </div>
            </div>
            <div className='Skille_content'>
               <div className='Content_title'>
                  <span style={{ color: SkillesList[openSkill]?.color }}>{SkillesList[openSkill]?.label} :</span>
               </div>
               <div className='Skill_Conent_wrapper'>
                  <div className='Card_wrapper'>
                     <div className="card" >
                        <div className="percent">
                           <svg>
                              <circle cx="125" cy="125" r="120"></circle>
                              <circle cx="125" cy="125" r="120" style={{ '--percent': `${SkillesList[openSkill]?.percent}`, stroke: SkillesList[openSkill]?.color }}></circle>
                           </svg>
                           <div className="number">
                              <img src={SkillesList[openSkill]?.src} alt={SkillesList[openSkill]?.label} />
                           </div>
                        </div>
                        <div className="title">
                           {/* <h2>{SkillesList[openSkill]?.label}</h2> */}
                        </div>
                     </div>
                  </div>
                  <div className='Card_content'>
                     <div className='Contnet_List'>
                        {
                           SkillesList[openSkill]?.List?.map((s, i) => {
                              return (
                                 <li key={i}>
                                    <b>{s?.split(':')[0]} : </b>
                                    {s?.split(':')[1]}
                                 </li>
                              )
                           })
                        }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}
