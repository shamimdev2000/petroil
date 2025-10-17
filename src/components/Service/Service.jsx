import React from 'react'
import Flex from '../layouts/Flex'



const Service = () => {
  return (
    <div   className="pt-[28px] font-poppins">
        <div className='md:flex'>
            <div className='w-[50%]'>
                <div className='md:flex justify-end mr-[61px]'>
                    <div className='w-[509px] ml-[30px] md:w-[509px] pt-[10px]  md:pt-[134px]'>
                        <h3 className='font-bold md:font-bold text-[30px] md:text-[64px]'>Our Services</h3>
                        <p className='md:font-medium w-[320px] md:w-[400px] mb-[20px] text-[#6C6C6C]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>
            <div className=' md:w-[50%]'>
                 <div className='z-1 relative bg-[url(./assets/serviceOne.png)] bg-cover bg-center bg-no-repeat  pt-[147px] pb-[139px]'>

                <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60'> </div>
                <div className='ml-4 md:ml-[116px]'>
                    <h1 className='text-[20px] md:text-[36px] font-bold text-white'>Modern natural oil and gas refineries.</h1>

                    <button className='py-[13px] px-[30px] bg-[#F40404] text-white font-semibold mt-[19px] cursor-pointer hover:bg-black'>LEARN MORE</button>
                </div>
               </div>
            </div>
        </div>
            <div className='md:flex'>     
              <div className='mt-[20px] md:mt-[0px] md:w-[50%]'>
                 <div className='z-1 relative bg-[url(./assets/serviceTwo.png)] bg-cover bg-center bg-no-repeat  pt-[147px] pb-[139px]'>

                <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60'> </div>
                <div className='ml-4 md:ml-[116px]'>
                     <h1 className='text-[20px] md:text-[36px] font-bold text-white'>National fuel distribution and supply.</h1>

                    <button className='py-[13px] px-[30px] bg-[#F40404] text-white font-semibold mt-[19px] cursor-pointer hover:bg-black'>LEARN MORE</button>
                </div>
               </div>
            </div>
          
                <div className='mt-[20px] md:mt-[0px] md:w-[50%]'>
                 <div className='z-1 relative bg-[url(./assets/serviceThree.png)] bg-cover bg-center bg-no-repeat  pt-[147px] pb-[139px]'>

                <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60'> 
                </div>
                <div className='ml-4 md:ml-[116px]'>
                    <h1 className='text-[20px] md:text-[36px] font-bold text-white'>National fuel distribution and supply.</h1>

                    <button className='py-[13px] px-[30px] bg-[#F40404] text-white font-semibold mt-[19px] cursor-pointer hover:bg-black'>LEARN MORE</button>
                </div>
               </div>
            </div>
            </div>
            </div>
       
   
  )
}

export default Service