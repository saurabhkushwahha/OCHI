import React, { useState,useEffect } from 'react'

function Eyes() {
    const [rotate, setRotate]=useState(0)
     useEffect( ()=>{
         window.addEventListener( "mousemove",(e)=>{
            let mouseX= e.clientX
            let mouseY=e.clientY

            let  deltaX= mouseX- window.innerWidth/2
            let deltaY=mouseY-window.innerHeight/2

            var angle= Math.atan2(deltaY,deltaX) * (180/Math.PI)
             setRotate(angle-180)
         })
     })
  return (
    <>
    <div className='w-full h-screen overflow-hidden'>
             <div data-scroll data-scroll-section data-scroll-speed="-.7"  className=' relative w-full h-full bg-cover bg-center bg-[url("./images/Eyes.png")]'>
                      <div   className=' flex gap-10 absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]'>
                                <div className='  w-[15vw] bg-white h-[15vw] rounded-full flex justify-center items-center'>
                                     <div className=' relative w-2/3 h-2/3  bg-black rounded-full  '>
                                               <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line  w-full h-10 absolute top-1/2  left-1/2 -translate-x-2/4 -translate-y-1/2 '>
                                                 <div className='w-6 h-6 bg-white rounded-full'></div>
                                               </div>
                                     </div>
                                </div>
                                <div className='w-[15vw] bg-white h-[15vw] rounded-full flex justify-center items-center'>
                                     <div className=' relative w-2/3 h-2/3  bg-black rounded-full '>
                                       <div  style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='w-full h-10  absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] '>
                                         <div className='w-6 h-6 bg-white rounded-full'></div>
                                       </div>
                                     </div>
                                </div>
                      </div>
             </div>
    </div>
    </>
  )
}

export default Eyes