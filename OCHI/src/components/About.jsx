import React from 'react'
import image from '../images/couple.png'
function  About() {
  return (
    <>
    <div >
  <div   className='w-full p-14 rounded-tr-3xl rounded-tl-3xl bg-[#CDEA68] text-black'>
         <h1 className='text-[3.2vw]  leading-[3.5vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
         </div>
         <div className='flex gap-2 w-full   bg-[#CDEA68] border-t-[1px] border-[#b2cb5d] px-14 py-10 pb-10  text-black'>
               <div className='w-1/2 -mt-8'>
                     <h1 className='text-[3.2vw]   leading-none tracking-tighter'>Our approach:</h1>
                     <button className=' flex  gap-5 mt-4 items-center justify-center text-[0.9vw] bg-black rounded-full uppercase font-semibold text-white px-9 py-4'>Read more
                             <div className='w-3 h-3 bg-white rounded-full '></div>
                     </button>
               </div>
               <div 
               className=' w-1/2 -mt-5 rounded-3xl overflow-hidden '>
                      <img src={image} alt=""  className='w-full h'/>
               </div>
         </div>
                 </div>
    </>
  )
}

export default  About