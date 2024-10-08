import React from 'react'
import Image from 'next/image'
import img2 from '@/img/bg.jpg'; 
import img3 from '@/images/Nexuslogo.png';

const SignUp = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${img2.src})` }}>
  

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white  mx-auto shadow-lg overflow-hidden dark:bg-black bg-opacity-70 backdrop-blur-lg px-8 py-10 rounded-md border ">
        
         


          <div className="w-full lg:w-1/2 py-16 px-12 dark:text-white">
            <h2  className="text-3xl mb-4">SIGNUP</h2>
            <p className="mb-4">
              Create your account. Its free and only take a minute
            </p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Firstname" className="border border-gray-400 py-1 px-2"/>
                <input type="text" placeholder="LastName" className="border border-gray-400 py-1 px-2"/>
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Username" className="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400"/>
                <span>
                  I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a> 
                </span>
              </div>

              <div
            className="mt-5 bg-white hover:bg-gray-400 rounded-md text-black py-2 text-center mb-5 font-semibold cursor-pointer"
          >
            Register Now
          </div>

             

            </form>
          </div>

{/* another div */}

        <div>

        </div>

        
      


        </div>
      </div>
    </div>
    </div>

  )
}

export default SignUp
