import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    //from-purple-500 to-pink-500

    return (
        <div className='lg:px-24 '>
            <div class="navbar rounded-xl bg-gradient-to-r sticky mt-0  bg-slate-600 uppercase text-white">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-serif ">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/resume'>Resume</Link></li>

                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl font-sans serif ">Dev.Aurnab</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/resume'>Resume</Link></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <div class="indicator">
                        <span class="indicator-item indicator-start badge badge-secondary"></span>
                        <div class="grid   place-items-center"><a href='https://drive.google.com/file/d/1LlmpKmo02MfUOjjoDGSw4h8GLZWBM0nd/view?usp=sharing' class="btn">Download Cv</a></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;