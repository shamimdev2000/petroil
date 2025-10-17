import React from 'react'
import Container from '../layouts/Container'
import learn from "../../assets/learn.png"

const LearnMore = () => {
  return (
    <div className='pont-poppins bg-[#F0F0F0] py-[36px] md:py-[136px]'>
        <Container>
           <div className='md:flex'>
             <div className='md:w-[413px] bg-[#F40404]'>
                <h3 className=' md:w-[262px]  text-white pont-bold ml-[45px] md:ml-[74px] text-[25px] md:text-[36px] py-[50px] md:py-[100px]'>
                    Learn more about our company
                </h3>
            </div>
            <div>
                <div className='relative'> 
                    <img src={learn} alt="" />
                    <button className='absolute bg-[#FFFFFF] text-[#F40404] font-semibold text-[16px] py-[14px] px-[30px]  cursor-pointer top-[80px] md:top-[168px] left-[115px] md:left-[282px] hover:bg-black duration-600'> Learn More</button>
                </div>
            </div>
           </div>
        </Container>
    </div>
  )
}

export default LearnMore