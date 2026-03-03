import React from 'react';
import navImg from '../../assets/logo.png';

const Navbar = () => {
 return (
  <div className="navbar max-w-[1280px] mx-auto">
   <div className="flex-1">
    <a className="text-xl">
     <img className="w-12 mr-2" src={navImg} alt="logo" />
    </a>
   </div>
   <div className="flex gap-4">
    <span>60000000</span>
    <span>coin</span>
   </div>
  </div>
 );
};

export default Navbar;