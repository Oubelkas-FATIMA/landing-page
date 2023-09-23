import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/Logo.jpg'

function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 bg-black bg-opacity-80 text-black py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
        <div className='w-[50%] h-full flex-col pl-5  items-center '>
            {/* title */}
            <div className='flex items-center justify-stretch p-4'>
            <img className='w-20 rounded-full ' src={logo} alt="/" />
            <h1 className='pl-4 text-2xl text-white font-bold'>Bionix</h1>
            </div>
            {/* paragraph */}
            <p className='text-md  text-white '> Cultivating efficiently, with less effort and greater productivity.</p>
        </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-2xl font-semibold text-yellow-600">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-yellow-600" />
              Contactez-nous
            </h3>
            <address className="mt-4">
              <p className='text-white'>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Adresse : 
              </p>
              <p className='text-white'>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Téléphone : (+212) 7 04 92 38 97 
              </p>
              <p className='text-white'>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Email : bionix123@gmail.com
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;





