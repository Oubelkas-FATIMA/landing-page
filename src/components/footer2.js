import React from 'react'
import logo from '../assets/Logo.jpg'
function footer2() {
  return (
    <section className='w-full h-52 bg-black flex '>
        {/* right part */}
        <div className='w-[50%] h-full flex-col pl-5  items-center '>
            {/* title */}
            <div className='flex items-center justify-stretch p-4'>
            <img className='w-20 rounded-full ' src={logo} alt="/" />
            <h1 className='pl-4 text-2xl text-white font-bold'>Bionix</h1>
            </div>
            {/* paragraph */}
            <p className='text-md p-10 text-white '> Cultivating efficiently, with less effort and greater productivity.</p>
        </div>
        {/* left part  */}
        <div className='w-[50%]'>
         <ul className='w-full h-full flex items-center justify-around'>
          <li className='text-white'>Home</li>
          <li className='text-white'>About us</li>
          <li className='text-white'>What we do</li>
          <li className='text-white'>Features</li>
         </ul>
        </div>
    </section>
  )
}

export default footer2