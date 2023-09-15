import React from "react";


import Jobs from "./components/jobs1";
import Values from "./components/values";
import Contact from "./components/contact";
import Footer from "./components/footer2";
import Problems from "./components/problems";
import Hero from "./components/Hero";

import Features from "./components/features"; 
import Navbar from "./components/Navbar";

import  Nous from "./components/nous";

import styles from "./style";

import Robot from './assets/vidBackground.mp4'



function App() {
  return (
    
    <div className="bg-primary w-full overflow-hidden">
    
      
          {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
      
            </div>
          </div> */}
      
          <Hero className='absolute top-0' />
   
    

    <div className={`${styles.paddingX} ${styles.flexCenter}  bg-[#f1fff2]`}>
      <div className={`${styles.boxWidth}`}>
      <Problems/>
      <Nous/>
  
      </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Features/>
      <Jobs/>
      </div>
      </div>



      <div className={`${styles.paddingX} ${styles.flexCenter} bg-[#f1fff2]` }>
      <div className={`${styles.boxWidth}`}>
      <Values/>
      <Contact/>
  
      </div>
     
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
      <div className={`${styles.boxWidth}`}>
      <Footer/>
      </div>
      </div>
    
   


  </div>
  );
}

export default App;
