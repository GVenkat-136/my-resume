import React from 'react'
import { SkillesList } from './utilities/SkilesData'
export default function Skilles() {
   return (
      <div class="Skills_container">
         <div class='skills_wrapper'>
            {
               SkillesList && SkillesList?.map((technology, index) => {
                  return (
                     <div className="card" key={index}>
                        <div className="percent">
                           <svg >
                              <circle cx="75" cy="75" r="70"></circle>
                              <circle cx="75" cy="75" r="70" style={{ '--percent': `${technology?.percent}`, stroke: technology?.color, }}></circle>
                           </svg>
                           <div className="number">
                              <img src={technology?.src} alt={technology?.label} />
                           </div>
                        </div>
                        <div className="title">
                           <h2>{technology?.label}</h2>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </div >
   )
}
