import React, { useState } from 'react'
import Container from '../layouts/Container'
import logo from "../../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [show,setShow] = useState(false)
    const handleClick = () =>{
          setShow(!show)
          
    }
  return (
    <div className='bg-[#F40404] py-[30px] font-poppins'>
    <Container>
        <div className='flex justify-between items-center '>
            <div className='w-[150px] md:w-[192px] pl-[10px] md:pl-[0px]'>
                <img src={logo} alt="" />

            </div>
            <div>
                <ul className='hidden md:flex items-center space-x-[47px] font-poppins font-semibold text-white'>
                    <li className='hover:text-black duration-600'><a href="">Home</a></li>
                    <li className='hover:text-black duration-600'><a href="">About</a></li>
                    <li className='hover:text-black duration-600'><a href="">Services</a></li>
                    <li className='hover:text-black duration-600'><a href="">Gallery</a></li>
                    <li className='hover:text-black duration-600'><a href="">Blog</a></li>
                    <li className='border-2 py-[13px] px-[32px] w-[180px] md:w-[142px] hover:text-black duration-600'>
                        <a href="">CONTACT</a>
                    </li>
                </ul>
            </div>
            <div className=' pr-[20px] md:hidden '>
                {
                    show ?
                    <div className='absolute top-[180px] right-0 w-full bg-[#F40404] z-[99999]'>
                         <div>
                        <ul className='pl-[20px] space-x-[47px] font-poppins font-semibold text-white'>
                    <li className='hover:text-black duration-600'><a href="">Home</a></li>
                    <li className='hover:text-black duration-600'><a href="">About</a></li>
                    <li className='hover:text-black duration-600'><a href="">Services</a></li>
                    <li className='hover:text-black duration-600'><a href="">Gallery</a></li>
                    <li className='hover:text-black duration-600'><a href="">Blog</a></li>
                    <li className='mt-[20px] mb-[30px] border-2 py-[13px] px-[32px] w-[180px] md:w-[142px] hover:text-black duration-600'>
                        <a href="">CONTACT</a>
                    </li>
                </ul>
                     </div>
                    </div>
                    : ""

                }
                {
                    show ? 
                    <ImCross className='text-2xl text-white' onClick = {()=> setShow (!show) }/> :
                     <FaBars className='text-2xl text-white'  onClick = {()=> setShow (!show) }/>
                }
               
            </div>
        </div>
    </Container>
    </div>
  )
}

export default Navbar