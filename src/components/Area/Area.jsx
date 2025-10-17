import React from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'

const Area = () => {
  return (
    <div className='py-[20px] md:py-[45px] bg-[#F40404] border-b-5 border-[#FFB800]'>
        <Container>
            <div className="md:flex justify-between items-center">
                <div>
                    <h4 className='text-bold text-white ml-[10px] md:text-[36px] '>
                        Want to join as member branch in your area?
                    </h4>
                </div>
                <div>
                    <button className='py-[8px] md:py-[14px] px-[15px] md:px-[32px] border-2 text-white ml-[110px] md:ml-[150px] md: font-semibold mt-[19px] cursor-pointer hover:bg-black'>CONTACT</button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Area