import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex  justify-center items-center p-14 '>
        <div className='w-1/2 h-[50vh] '>
                  <div className='relative w-full h-full bg-[#004d43] rounded-lg flex justify-center items-center'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-5 bottom-5  border-[#CDEA68] text-[1vw] border-2 rounded-full px-3 py-1 text-[#CDEA68]'>&copy;2019-2018</button>
                  </div>
        </div>
        <div className='w-1/2 h-[50vh]  flex gap-3 px-4'>
              <div className='w-1/2 h-full bg-[#212121] rounded-lg flex justify-center items-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
              </div>
              <div className='w-1/2 h-full bg-[#212121] rounded-lg flex justify-center items-center'>
              <img className='w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              </div>
        </div>
    </div>
  )
}

export default Card