import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  return (
    <div 
     data-scroll data-scroll-section data-scroll-speed="-.3"
    className='w-full h-screen pt-[1.8vw] '>
         <div className='textStructure  ml-[3.2vw] mt-[10vw]'>
            {["we create","Eye Opening","Presentations"].map( (item, index)=>{
            return  <div className='masker flex'>
                 { (index==1) && (<motion.div initial={{width:0}} animate={{width:"8.8vw"}} transition={{ease:"backInOut",duration:1}} className='w-[8.8vw] h-[5.2vw] relative top-[1.2vw] overflow-hidden rounded-[0.5vw]   '><div  className=' bg-center bg-cover bg-[url("./images/ochimask.png")] w-full h-full'></div></motion.div>)}
                <div className='w-fit flex justify-center items-center'>
            <h1 className='leading-[6.8vw] tracking-tighter text-[7vw] uppercase font-[500]'>{item}</h1>
            </div>
        </div>
            })}
            
         </div>
            <div className='  border-t-[2px] border-zinc-700 px-[2.3vw] py-[1vw] text-[1.2vw] 
            mt-[7vw] flex justify-between items-center'>
                {["For public and private companies","From the first pitch to IPO"].map( (item,index)=>(
                     <p>{item}</p>
                ))}
                <div className='start  flex gap-1 cursor-pointer items-center'>
                     <div className='border-[1px] border-zinc-700 px-[1vw] uppercase  py-[0.4vw] font-light text-[1vw] rounded-[5vw]'>starts the projects</div>
                      <div className=' border-zinc-700 border-[1px] w-[2.5vw] h-[2.5vw] rotate-45 rounded-[5vw]  flex items-center justify-center'>
                      <FaArrowUpLong />
                      </div>

                      </div>
            </div>
          
           
        </div>
  )
}

export default LandingPage