import React from 'react'
import Flex from '../layouts/Flex'
import Container from '../layouts/Container'

const Banner = () => {
  return (
    <div className='z-1 relative bg-[url(./assets/banner.png)]  bg-cover bg-center bg-no-repeat py-[50px] md:py-[257px] font-poppins'>

            <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60'> </div>

            <Container className=" ">
                <h1 className='w-[350px] md:w-[842px] text-[25px] md:text-[64px] font-bold text-white ml-[20px] md:ml-[0px] '>We exist since 1975 on the oil and gas industry.</h1>

                <button className='py-[10px] ml-[100px] md:ml-[0px] md:py-[13px] px-[20px] md:px-[40px] bg-[#F40404] text-white font-semibold font-primary text-[16px] mt-[31px] cursor-pointer hover:bg-black'>LEARN MORE</button>
            </Container>



        </div>
  )
}

export default Banner