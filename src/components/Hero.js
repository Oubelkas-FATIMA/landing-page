

import { useState } from "react";

import styles from "../style";
import close from "../assets/close.svg"
import menu from "../assets/menu.svg"
import LogoWhite from "../assets/LogoWhite.png"
import { navLinks } from "../constants";

import { motion } from "framer-motion";
import { home } from "../constants";


import heroBackground from '../assets/backHero.jpg'



// import Robot from '../assets/vidBackground.mp4'
<img className = '' src={heroBackground} alt="/" />

const Hero = () => {

    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);


    return (
        <section id="home" className=" w-full h-auto mx-auto bg-[#1F571E]">
          
          {/* <img className = 'w-full h-screen object-cover opacity-20' src={heroBackground} alt="/" /> */}
          <video autoPlay muted loop className="w-full h-screen object-cover">
            <source src= 'https://landingvideo.s3.amazonaws.com/backVid1.mp4' type="video/mp4"/>
          </video>


          <nav className="w-full flex py-6 justify-between items-center navbar absolute top-0 xl:max-w-[1280px] sm:px-16 px-6">
       <img src={LogoWhite} alt="hoobank" className="w-[81px] h-[81px] " />

       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` text-white font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`} >
            <a href={`#${nav.id}`}>{nav.title} </a>
          </li>
        ))}
      </ul>


      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-[#E8B537] " : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
          </nav>

            <div className={`absolute inset-0 top-[300px]  max-w-7xl mx-auto flex flex-col justify-normal `}>
                <div className="grid lg:grid-cols-2 lg:overflow-visible">
                    <div className="lg:w-[130%]  lg:text-left">
                    <h3 className="mt-4 text-[3rem] font-poppins  text-white font-bold">{home.second_text}</h3>
                        <h1 className=" text-[2.5rem]  leading-tight font-poppins text-[#E8B537]">{home.first_text}</h1>
                        
                    </div>
                </div>
            </div>
            {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-start'></div> */}
    </section>
    )
}

export default  Hero