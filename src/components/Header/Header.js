import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-2 flex justify-center md:justify-between'>
                <div className='hidden md:block' >
                   <Link to='/' className='font-bold text-2xl text-gray-600'>i-glass</Link>
                </div>
                <div className='flex gap-4 text-xl '>
                    <Link to='/'>Home</Link>
                    <Link to='/review'>Review</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/about'>About</Link>

                </div>
        </div>
    );
};

export default Header;