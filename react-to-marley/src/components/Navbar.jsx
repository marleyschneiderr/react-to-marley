import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

import Logo from '../assets/MS.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[85px] flex justify-between items-center px-4 bg-[#2D00F7] text-white'>

        <div>
            <img scr={Logo} alt="Logo Image" style={{width: '50px'}} />
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar