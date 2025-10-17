import React from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'
import logo from "../../assets/logo.png"
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import footerOne from "../../assets/footerOne.png"
import footerTwo from "../../assets/footerTwo.png"



const Footer = () => {
  return (
    <div className='pt-[30px] md:pt-[149px] pb-[30px] md:pb-[170px] bg-[#1F1F1F] pont-poppins '>
        <Container>
            <div className=' md:flex justify-between  text-white '>
                <div className='ml-[30px] md:ml-[0px] '>
                    <div className='gap-[5px]'>
                        <img src={logo} alt="" />
                        <div className='flex items-center gap-x-[5px] pt-[33px]'>
                            <IoMailUnreadOutline  className='hover:text-red-500 duration-600'/>
                        <p className='hover:text-red-500 duration-600'>mail@yourcompany.com</p>
                        </div>
                        <div>
                            <div className=' items-center gap-[5px]'>
                            <div className='flex items-center gap-x-[5px] pt-[15px]'>
                                 <MdOutlineWifiCalling3  className='hover:text-red-500 duration-600'/>
                             <p className='hover:text-red-500 duration-600'>+896 120 5889 (Toll free)</p>
                         </div>
                            </div>
                        </div>
                        <div>
                            <div className=' items-center gap-[5px]'>
                            <div className='flex items-center gap-x-[5px] pt-[15px]'>
                                 <IoLocationOutline className='hover:text-red-500 duration-600'/>
                             <p className='hover:text-red-500 duration-600'>101 Baker Street, New York, USA, 12345</p>
                         </div>
                            </div>
                        </div>
                        <div>
                            <div className='pt-[33px] w-[334px]'>
                                <div className='flex space-x-[19px]'>
                               <FaFacebookF className='w-[50px] h-[50px] bg-[#F40404] p-[8px] items-center rounded-[50%] '/>
                               <FaTwitter className='w-[50px] h-[50px] bg-[#F40404] p-[8px] items-center rounded-[50%] '/>
                               <FaLinkedinIn className='w-[50px] h-[50px] bg-[#F40404] p-[8px] items-center rounded-[50%] '/>
                               <FaInstagram className='w-[50px] h-[50px] bg-[#F40404] p-[8px] items-center rounded-[50%] '/>
                             </div>
                            </div>
                        </div>
                     </div>
                </div>
               <div className='flex'>
                
                 <div className='pl-[30px] mt-[20px] md:pl-[50px] md:mt-[0px] w-[173px]'>
                      <ul className='text-white'>
                        <li className='font-primary font-bold text-[16px] hover:text-red-500'>Company</li>
                        <li className='font-primary font-normal text-[14px] mt-[21px] cursor-pointer hover:text-red-500'>Home</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer hover:text-red-500'>About</li>
                        <li className='font-primary red-normal text-[14px] mt-[15px] cursor-pointer hover:text-red-500'>Services</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer hover:text-red-500'>Gallery</li>
                    </ul>

                </div>
                <div>
                    <div className=''>
                    <ul className='pl-[30px] mt-[20px] md:mt-[0px] md:w-[173px] text-white'>
                        <li className='font-primary font-bold text-[16px] hover:text-red-500'>Others</li>
                        <li className='font-primary font-normal text-[14px] mt-[21px] cursor-pointer hover:text-red-500'>Blog</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer hover:text-red-500'>Contact</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer hover:text-red-500'>Terms</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer hover:text-red-500'>Privacy</li>
                    </ul>

                </div>
                </div>
               </div>
              
                <div className='pl-[30px] md:pl-[0px] mt-[20px] md:mt-[0px] md:w-[225px]'>
                   <p className='hover:text-red-500 duration-600'>Certificate</p>
                    <Flex className="pt-[21px] gap-[5px]">
                        <img src={footerOne} alt="" />
                        <img src={footerTwo} alt="" />
                    </Flex>
                    
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer