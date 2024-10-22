import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {

  const navigate = useNavigate();

  const handleClick =()=>{
    navigate('/Signup');
  }

  return (
    <div className='relative w-full h-screen flex flex-col items-center justify-center'>
      <video className='w-full h-[80%] object-cover' src="/videos/[4K] The Greatest Sport of All Time「EDIT」(Way Down We Go).mp4" autoPlay loop muted />
      <div className='absolute top-1/4 flex flex-col items-center justify-center text-center w-full'>
        <h1 className='text-gray-200 text-4xl md:text-6xl font-bold mb-4 shadow-text-dark'>
          CUSTOMIZE YOUR FANTASY TEAM
        </h1>
        <button onClick = {handleClick} className='mt-[250px] bg-gradient-to-r from-sky-400 to-slate-900 text-white text-2xl md:text-4xl font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition ease-in-out duration-300'>
          GET STARTED
        </button>
      </div>
    </div>
  );
}

export default Hero;
