import React from 'react'
import logoOne from "../../assets/logoOne.png"
import logoTwo from "../../assets/logoTwo.png"
import logoThree from "../../assets/logoThree.png"
import logoFour from "../../assets/logoFour.png"

import Flex from '../layouts/Flex'
import Container from '../layouts/Container'

const Logo = () => {
  return (
    <div className='p-[88px] py-[30px] md:py-[117px]'>
        <Container>
    <div className="md:flex justify-between space-x-[26px]">
         <img src={logoOne} alt="" />
        <img src={logoTwo} alt="" />
        <img src={logoThree} alt="" />
        <img src={logoFour} alt="" />
      

    </div>
    </Container>
    </div>
  )
}

export default Logo