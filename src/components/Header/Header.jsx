 import React from 'react'
import Container from '../layouts/Container'
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div className=' border-b-5 border-[#FFB800] bg-[#282828] text-white font-poppins py-[15px]'>
        <Container>
            <div className='flex md:flex p-[10px] md:justify-between items-center'>
                <div className='md:flex space-x-[49px]'>
                    <div className=' text-[12px] md:text-[16px] flex items-center gap-[5px]'>
                    <IoMailUnreadOutline  className='hover:text-red-500 duration-600'/>
                    <p className='hover:text-red-500 duration-600'>mail@yourcompany.com</p>
                    </div>
                    <div  className="relative after:content[''] after:absolute after:top-1 after:left-[-27px] after:h-[16px] after:w-[1px] after:bg-white flex items-center space-x-[5px]">
                        <div className='text-[12px] md:text-[16px] flex items-center gap-[5px]'>
                    <MdOutlineWifiCalling3  className='hover:text-red-500 duration-600'/>
                    <p className='hover:text-red-500 duration-600'>+896 120 5889 (Toll free)</p>
                    </div>
                    </div>
                </div>
                <div>
              <div className='flex space-x-[19px]'>
              <FaFacebookF className='w-[16px] hover:text-red-500 duration-600'/>
              <FaTwitter className='w-[16px] hover:text-red-500 duration-600'/>
              <FaLinkedinIn className='w-[16px] hover:text-red-500 duration-600'/>
              <FaInstagram className='w-[16px] hover:text-red-500 duration-600'/>
            </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header