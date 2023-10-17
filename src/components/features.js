import React from 'react'
import {feature} from '../constants/';
import {FcAutomatic} from "react-icons/fc" 

import { AiOutlineAreaChart } from "react-icons/ai";
import {AiOutlineMonitor} from "react-icons/ai";
import {AiFillDashboard} from 'react-icons/ai'
import {AiFillFrown} from 'react-icons/ai'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiOutlineApi } from 'react-icons/ai';
import { SiApacheairflow } from "react-icons/si";
import { BsGear } from "react-icons/bs";



const iconMap = {
  "Complete automation": <BsGear />,
  "Precise parameter control": <AiFillDashboard />,
  "Cultivation of fruits to maturity": <SiApacheairflow />,
  "Reduced disease risks": <AiFillFrown />,
  "Remote accessibility": <AiOutlineApi />,
  "Resource optimization": <AiOutlineMonitor />,

};



function features() {
  return (
    <section id='features' className=' w-full flex items-center flex-col overflow-hidden '>  

    <div> 
        <h1 className='text-[#015109] text-3xl font-bold pt-10'> Features </h1>
        
    </div>
    <p className='pb-6 font-poppins pt-5 text-[#E8B537] font-bold'> Explore BIONIX's exceptional capabilities !</p>
             
        <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 md:gap-10 sm:gap-20  px-20 ">     
                    {feature.map((feat) => (
                        <div className='  border-green-800 border-4 rounded-lg hover:bg-[#1F571E] hover:text-white p-10'>
                          <div className=' flex '> 
                          <span className='text-yellow-500'>
                          {iconMap[feat.title] /* Utilisez l'icône en fonction du titre de la fonction */}
                        </span>
                         <h1 className='ml-2 text-1xl font-bold text-[#1F571E] hover:text-white '> { feat.title}</h1>   </div>
                     <p className=' pt-10 flex items-center'> {feat.description} </p>
                 </div>
                       
                    
                ))}

                         
               
 
        </div>

</section>

  )
}

export default features