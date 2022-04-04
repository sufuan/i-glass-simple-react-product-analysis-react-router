import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-2 flex justify-center md:justify-between'>
            <div className='hidden md:block' >
                <Link to='/' className='font-bold text-2xl text-gray-600'>i-glass</Link>
            </div>
            <div className='flex gap-4 text-xl '>
                <NavLink to='/' className={({ isActive }) => isActive ? 'text-emerald-400' : 'black'}>Home</NavLink>

                <NavLink to='/review' className={({ isActive }) => isActive ? 'text-emerald-400' : 'black'}>Review</NavLink>

                <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-emerald-400' : 'black'}>Dashboard</NavLink>

                <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-emerald-400' : 'black'}>Blog</NavLink>

                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-emerald-400' : 'black'}>About</NavLink>

            </div>
        </div>
    );
};

export default Header;