import React from 'react'

import {FcHeadset} from "react-icons/fc" 

import {feature} from '../constants/';

function features() {
  return (
    <section id='features' className=' w-full flex items-center flex-col overflow-hidden '>  

    <div> 
        <h1 className='text-[#015109] text-3xl font-bold pt-10'> Features </h1>
        
    </div>
    <p className='pb-6 font-poppins pt-5 text-[#E8B537] font-bold'> Explore BIONIX's exceptional capabilities !</p>
             
        <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 md:gap-10 sm:gap-10  px-20 ">     
                    {feature.map((feat) => (
                        <div className='  border-green-800 border-4 rounded-lg hover:bg-[#1F571E] hover:text-white p-10'>
                      <div className=' flex '> <FcHeadset /> <h1 className='ml-2 text-1xl font-bold text-[#1F571E] hover:text-white '> { feat.title}</h1>   </div>
                     <p className=' pt-10 flex items-center'> {feat.description} </p>
                 </div>
                       
                    
                ))}

                         
               
 
        </div>

</section>

  )
}

export default features