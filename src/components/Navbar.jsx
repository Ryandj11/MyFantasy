import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[20vh] px-4 text-white bg-gradient-to-r from-sky-400 to-slate-900 flex justify-between items-center z-50">
      <h1 className="w-full text-6xl font-bold text-white">MY FANTASY.</h1>
      <ul className="hidden md:flex">
        <li className="font text-xl p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="font text-xl p-4">
          <Link to='/roster'>Roster</Link>
        </li>
        <li className="font text-xl p-4">
          <Link to='playerStats'>Stats</Link>
        </li>
      </ul>

      
      <div onClick={handleNav} className="text-white block md:hidden ">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>


      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-gradient-to-r from-sky-400 to-slate-900 ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-6xl font-bold text-white p-4">MY FANTASY.</h1>
        <ul className="uppercase p-4">
          <li className="font text-xl p-4 border-b border-gray-600">
            <Link to="/">Home</Link>
          </li>
          <li className="font text-xl p-4 border-b border-gray-600">
            <Link to='/roster'>Roster</Link>
          </li>
          <li className="font text-xl p-4">
            <Link to='stats'>Stats</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
