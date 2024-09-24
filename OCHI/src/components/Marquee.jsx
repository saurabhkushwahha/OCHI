import { motion } from 'framer-motion'
import React from 'react'
function Marquee() {
    
  return (
    <>
      <div 
      data-scroll  data-scroll-section data-scroll-speed=".1"
      className=' flex justify-center items-center w-full  bg-[#004F43] h-[55vh]  rounded-tl-3xl rounded-tr-3xl '>
         <div className=' flex border-b-[1px] border-t-[1px] border-[#427b74]  overflow-hidden '>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration:8} } className='text-[19vw] leading-none tracking-tighter font-[800]  pr-20 uppercase  whitespace-nowrap'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear" ,repeat:Infinity, duration:8}} className='text-[19vw] leading-none tracking-tighter font-[800] pr-20 uppercase  whitespace-nowrap'>we are ochi</motion.h1>
            </div>      
    
      </div>
    </>
  )
}

export default Marquee