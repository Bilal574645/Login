import React from 'react';
import Image from 'next/image';
import img1 from '@/img/google_logo_icon.png'; // Place images in the 'public' folder
import img2 from '@/img/bg.jpg'; 
import Link from 'next/link';

const Login = () => {
  return (
    <div className="text-white">
      <div className="h-screen flex items-center justify-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${img2.src})` }}>
        <div className="bg-black bg-opacity-60 backdrop-blur-lg px-8 py-10 rounded-md border">
          <h2 className="text-3xl text-center mb-5 font-semibold">Login</h2>

          {/* Email Input */}
          <div className="flex items-center border-b mb-3">
            <input
              type="email"
              placeholder="Email"
              className="py-2 outline-none bg-inherit w-64"
            />
            <i className="ri-mail-line text-gray-400"></i>
          </div>

          {/* Password Input */}
          <div className="flex items-center border-b mb-3">
            <input
              type="password"
              placeholder="Password"
              className="py-2 outline-none bg-inherit w-64"
            />
            <i className="ri-lock-line text-gray-400"></i>
          </div>

          {/* Remember Password */}
          <div className="flex items-center justify-between text-xs mb-6">
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <p>Remember password</p>
            </div>
            <a href="#" className="text-blue-500">Forgot password?</a>
          </div>

          {/* Login Button */}
          <div
            className="bg-white hover:bg-gray-400 rounded-md text-black py-2 text-center mb-5 font-semibold cursor-pointer"
          >
            Login
          </div>

          {/* Register Link */}
          <div className="text-sm text-center">
            Don&apos;t have an account?{' '}
            <Link href="/signup">
         <button>SIGNUP</button>
            </Link>
          </div>

          {/* Google Login Button */}
          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center text-sm">
            <Image className="w-6 mr-3" src={img1} alt="Google logo" />
         <h1 className="text-black">   Login with Google</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
