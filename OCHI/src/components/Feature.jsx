import {motion, useAnimation} from 'framer-motion';
import React, { useState } from 'react'
function Feature() {
  const card= [useAnimation(),useAnimation()]
  const handleHoverStart=(index)=>{
       card[index].start({y:"0"})
  }
  const handleHoverEnd=(index)=>{
       card[index].start({y:"100%"})
  }
  return (
    <>
    <div className='w-full py-[4.5vw] px-[3vw]  rounded-tr-3xl rounded-tl-3xl'>
        <h1 className='text-6xl leading-none  font-[300] mt-12'>Featured Projects</h1>
        </div>
        <div className=' w-full  h-screen px-10 py-24 border-[#bfbfbf52] border-t-[1px]  flex gap-5'>
               <motion.div 
               onHoverStart={ ()=>handleHoverStart(0)} 
               onHoverEnd={()=>handleHoverEnd(0)}
               className=' cardContainer w-1/2 h-full  rounded-xl relative '>
                <div className=' flex overflow-hidden z-[9] tracking-[-0.5rem] leading-none absolute left-full top-1/2  -translate-x-[50%] -translate-y-[50%] text-[5.5vw]  font-[300] text-[#CDEA68]'> 
                   {"FYDE".split('').map((item,index)=>( 
                    <motion.span initial={{y:"100%"}} animate={card[0]} transition={{ease: "easeInOut", delay:index*.06}} className=' inline-block  '>{item}</motion.span>
                    ))}
                </div>
                     <div className=' rounded-lg  w-full h-full bg-cover bg-center bg-[url("./images/Fyde.png")]'></div>
                </motion.div>     
               <motion.div 
                onHoverStart={()=>handleHoverStart(1)}
                onHoverEnd={()=>handleHoverEnd(1)}
               className=' cardContainer w-1/2 h-full rounded-xl relative'>
               <h1 className=' flex overflow-hidden z-[9] tracking-[-0.5rem] leading-none absolute  right-full top-1/2  translate-x-[50%] -translate-y-[50%] text-[5.5vw] font-[300] text-[#CDEA68]'> 
                   {"VISE".split('').map((item,index)=> (
                    <motion.span
                    initial={{y:"100%"}}
                    animate={card[1]}
                    transition={{ease:"easeInOut",delay:index*.06}}
                    className='inline-block'>{item}</motion.span>))}
                </h1>
                     <div className=' rounded-lg w-full h-full bg-cover bg-center bg-[url("./images/Vise.png")]'></div>
                </motion.div>     
               
        </div>
    </>
  )
}

export default Feature