import React from 'react'

function contact() {
  return (
    <section className='w-full' id='contact'>
      {/* a div will wontain flex col element */}
``````<div className='flex flex-col items-center '>
        <div className='flex flex-col items-center'>
            <h1 className='text-[#015109] text-3xl font-bold '> Contact us</h1>
            <p className='font-poppins p-3 text-[#E8B537] font-bold'>Any question or remarks? Just write us a message!</p>
        </div>
        
        <div className='w-full flex flex-col items-center bg-white mb-16 pt-16'>
          
              <div>
                <div className=' flex  '>
                  <div className='p-10'>
                    <label for="username">First name:</label><br/>
                    <input type="text" id="username" name="username" className='border-b-2  hover:border-black'/><br />
                  </div>
                  <div className='p-10'>
                    <label for="Lastname">Last name:</label><br />
                    <input type="text" id="Lastname" name="Lastname" className='border-b-2  hover:border-black' />
                  </div>
                </div>
              </div>


              <div>
                <div className='flex  '>
                  <div className='p-10'>
                    <label for="email">Email</label><br/>
                    <input type="email" id="email" name="email" className='border-b-2  hover:border-black' /><br />
                  </div>
                  <div className='p-10'>
                    <label for="Lastname">Telephone</label><br />
                    <input type="text" id="Lastname" name="Lastname"  className='border-b-2  hover:border-black'/>
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify-start' >
              <label for="message">Message</label><br />
              <input
                      
                      type='text'
                      placeholder='write a message'
                      className='border-b-2  hover:border-black  ' 
                      />
              </div>

              <button className='text-white rounded-3xl bg-[#1F571E] w-40 md:w-96 m-4 p-3 '>
  Send Message
</button>
            </div>
      </div>
    



    </section>
  )
}

export default contact