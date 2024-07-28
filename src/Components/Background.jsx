import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed w-full h-screen z-[2]'>
       <div div className='w-full absolute top-[5%] py-10 flex justify-center text-zinc-600 font-semibold text-xl'>Documents</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 text-[13vw] leading-none tracking-tight font-semibold '>Docs.</h1>
    </div>
   </>
  )
}

export default Background