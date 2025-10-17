import React from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'
import { FaChevronRight } from "react-icons/fa6";

const LoremDolor = () => {
  return (
       <div className='px-2 md:px-0 pt-2 md:pt-[110px] md:pb-[162px] bg-[#F0F0F0]'>
            <Container>
                <div className=' md:flex justify-between'>
                    <div className='relative bg-[url(./assets/loremOne.png)] mt-[30px] md:bg-center bg-cover bg-no-repeat pt-[55px] pb-[75px] w-[339px]'>
                        <div className='z-1 absolute top-0 left-0 h-full w-full bg-black/60'></div>
                        <p className='relative z-3 font-primary font-bold text-[24px] w-[249px] ml-[46px] text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>

                        <button className='relative z-3 py-[11px] px-[23px] bg-white/60 ml-[46px] mt-[52px] text-white cursor-pointer font-primary font-semibold text-[12px] hover:bg-black border border-white/60 transition duration-500'>Read more</button>
                    </div>

                    <div className='relative mt-[30px] md: bg-[url(./assets/loremTwo.png)] bg-center bg-cover bg-no-repeat pt-[55px] pb-[75px] w-[339px]'>
                        <div className='z-1 absolute top-0 left-0 h-full w-full bg-black/60'></div>
                        <p className='relative z-3 font-primary font-bold text-[24px] w-[249px] ml-[46px] text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>

                        <button className='relative z-3 py-[11px] px-[23px] bg-white/60 ml-[46px] mt-[52px] text-white cursor-pointer font-primary font-semibold text-[12px] hover:bg-black border border-white/60 transition duration-500'>Read more</button>
                    </div>

                    <div className='relative mt-[30px] md: bg-[url(./assets/loremThree.png)] bg-center bg-cover bg-no-repeat pt-[55px] pb-[75px] w-[339px]'>
                        <div className='z-1 absolute top-0 left-0 h-full w-full bg-black/60'></div>
                        <p className='relative z-3 font-primary font-bold text-[24px] w-[249px] ml-[46px] text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>

                        <button className='relative z-3 py-[11px] px-[23px] bg-white/60 ml-[46px] mt-[52px] text-white cursor-pointer font-primary font-semibold text-[12px] hover:bg-black border border-white/60 transition duration-500'>Read more</button>
                    </div>

                </div>

                <Flex className="items-center md:justify-end mt-[28px]">
                    <p className='font-primary font-bold text-[16px]'>MORE FROM THE BLLOG</p>
                    <FaChevronRight className='ml-[5px]' />

                </Flex>

                

            </Container>
        </div>
    )
}

export default LoremDolor