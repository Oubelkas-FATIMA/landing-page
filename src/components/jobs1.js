import React from 'react'

// import robot3d from 'https://landingvideo.s3.amazonaws.com/3drobot.mp4'



import { motion } from "framer-motion";


import { textVariant, fadeIn } from "../utils/motion";

import { job } from "../constants";

function Jobs() {
    return (
        <section id='what we do'>
            <div  >
            {/* <h1 className=' text-black font-bold text-4xl capitalize mt-10 text-center pt-10'>what we do</h1> */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 pl-24 gap-3 items-center justify-between py-16">
                    <div className="">
                        <div>
                            <h2 className='text-[#015109] text-3xl font-bold  '>{job.title}</h2>
                        </div>
                        <div>
                            <h2 className='text-[#E8B537] text-1xl  pt-4 font-bold'>{job.second_text}</h2>
                        </div>

                        <div className='mt-4  font-poppins  text-[14px] md:text-[20px] max-w-1xl text-justify'>
                            
                                {job.description}
                        </div>
                        <div className='pt-4'>
                            
                        <button type="button" className={`px-4 py-2 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-full outline-none border-2 border-[#1F571E] text-[#1F571E]`}>
                            Get yours now
                        </button>
                        </div>
                    </div>
                    <div className="hidden lg:flex">
                        <div className='max-w-[800px] h-full  m-auto py-16  relative group pl-20'>
                            
                        <video autoPlay muted loop>
        <source src= 'https://landingvideo.s3.amazonaws.com/3drobot.mp4' type="video/mp4"/>
      </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jobs