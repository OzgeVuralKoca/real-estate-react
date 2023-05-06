import React from 'react';
import { Link } from 'react-router-dom';
import {HiHomeModern} from 'react-icons/hi2'

const Header = () => {
  return (
    <div className='px-40 py-4 flex gap-20 fixed w-full header-bg'>
      <Link to='/' className='text-emerald-300 flex font-semibold text-3xl logo items-center'>
        <HiHomeModern size={25}/> home
      </Link>
      {/* <div className='flex gap-5 font-bold items-center text-gray-50'>
        <Link className='hover:border-b-2 pb-1'>
          Buy
        </Link>
        <Link className='hover:border-b-2 pb-1'>
          Rent
        </Link>
      </div> */}
      <div className='flex ms-auto font-bold items-center text-gray-50 hover:border-b-2 pb-1 cursor-pointer'>
        Sign In
      </div>
    </div>
  );
};

export default Header;
