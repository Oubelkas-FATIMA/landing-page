import React from 'react';

import image1 from '../assets/image1.jpg'



const values = () => {
  return (

    <div className='py-10 w-full  p-20 '>
        <h1 className='text-center text-black font-bold text-4xl'>Our values</h1>




      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8 pt-10'>
          <div className='w-full h-full shadow-xl flex flex-col p-4 my-4 rounded-3xl hover:scale-105 duration-300 bg-image1 '>
            <div className='flex items-center justify-center '>
                <h1 className=' p-5 px-8  rounded-full border border-[#ffffff] text-3xl text-white'> 1 </h1>
            </div>
              <h2 className='text-2xl font-bold text-center py-8 text-white'>Innovation</h2>
              
              <p className='text-center text-2xl font-poppins text-white'> Pushing the boundaries of traditional agriculture with cutting-edge
                  solutions.</p>
              
          </div>
          <div className='w-full h-full  shadow-xl flex flex-col p-4 my-4  hover:scale-105 duration-300 bg-image2 rounded-3xl'>
          <div className='flex items-center justify-center '>
                <h1 className=' p-5 px-8  rounded-full border border-[#ffffff] text-3xl text-white'> 2 </h1>
            </div>
              <h2 className='text-2xl font-bold text-center py-8 text-white'>Sustainability</h2>

              <p className='text-center text-2xl font-poppins text-white'> Promoting environmentally and resource-friendly agriculture.</p>
              
              
          </div>
          <div className='w-full h-full  shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-300  rounded-3xl bg-image3 '>
            
          <div className='flex items-center justify-center '>
                <h1 className=' p-5 px-8  rounded-full border border-[#ffffff] text-3xl text-white '> 3   </h1>
            </div>
              <h2 className='text-2xl font-bold text-center py-8 text-white'>Commitment</h2>
              <p className='text-center text-2xl font-poppins text-white bg-opacity-30'> Supporting farmers in their success and contributing to global food
                    security.</p>
             
              
          </div>
          <br></br>
      </div>
    </div>
  );
};

export default values;