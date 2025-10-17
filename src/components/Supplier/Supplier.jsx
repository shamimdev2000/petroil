import React from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'

const Supplier = () => {
  return (
    <div className='py-[30px] md:pt-[78px] pb-[100px] font-primary'>
    <Container>
            <div className='md:flex items-center'>
                   <h2 className=' font-bold text-[30px] md:text-[48px] w-[300px] md:w-[289px] ml-[50px] md:ml-[0px]'>The biggest supplier on the country</h2>

                    <p className='mt-[30px] w-[320px] md:w-[651px] font-primary font-medium text-[16px] text-[#6C6C6C] ml-[30px] md:ml-[178px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>

            </div>
    </Container>
    </div>
  )
}

export default Supplier