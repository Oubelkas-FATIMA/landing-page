
import { motion } from "framer-motion";


import { members } from "../constants";



const nous = () => {


    return (
        <section id="about">
        <div className="bg-contain lg:bg-feature-pattern lg:bg-cover lg:bg-no-repeat mb-20 lg:mb-0 bg-[#f1fff2] pb-32">
            <div>
                <h2 className={` text-center text-[#046508] pt-10 text-3xl font-bold  `}>
                About us
                </h2>
            </div>
            <div  className="flex  pt-10 grid lg:grid-cols-5 sm:grid-cols-1 md:grid-cols-2  "> 
         
            {members.map((member, index)=>( 
             
                
                <div className="flex flex-col gap-2">
                <img src={member.img} className="  md:w-48 w-[200px] h-[200px] rounded-full" alt="slide_image " />
                <br/>
                

                <h1> {member.name} </h1>
                <h3> {member.job} </h3>
                <p> {member.content} </p>
                    
              

                </div>
                 
                
            ))}
            

    
        
          </div>              
        </div>
        </section>
    )
}

export default nous;