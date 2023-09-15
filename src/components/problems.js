import React from 'react'

import prob from '../assets/Problem.jpg'

import solution from '../assets/solution.jpg'

import { problem, solutions } from "../constants";


function problems() {
  return (
    <section className=' w-full  flex items-center bg-[#f1fff2] py-10'>
      <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 '>
            <div >
                
                  
                  <div className='flex justify-center'>
                      <img className = 'w-96 h-80 py-10 rounded-r-3xl shadow-2xl' src={prob} alt="/" />

                  </div>
                  <h1 className='text-[#046508] font-bold   text-3xl text-center p-6'>Our Solution</h1>
                  <p className='font-poppins pb-6 px-20 text-justify'> {solutions.sol} </p>
                      
            </div>


            <div>

            <h1 className='text-[#046508] font-bold   text-3xl text-center p-6'> The problem</h1>
                 
                <p className=' font-poppins pb-6 px-20 text-justify'> {problem.problems} </p>
                <div className='flex justify-center'>
                
                      <img className = 'w-96 h-80 py-10 shadow-2xl' src={solution} alt="/" />
           
                </div>
                

            </div>

      </div>

    </section>
  )
}

export default problems