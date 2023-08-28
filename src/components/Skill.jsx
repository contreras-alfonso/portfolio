import React from 'react'

const Skill = ({nombre,imagen}) => {
  return (
    <>
        <div className='w-10/12 border border-dashed rounded-lg transition-all duration-500 border-neutral-900 hover:border-white'>
            <div className='bg-neutral-800 rounded-lg border hover:translate-x-2 hover:-translate-y-2 transition-all duration-300 w-full h-full flex flex-col items-center justify-center gap-3 py-5 cursor-pointer'>
                <img src={imagen} alt="logo javascript" className='w-12'/>
                <p className='text-lg text-white'>{nombre}</p>
            </div>
        </div>
    </>
  )
}

export default Skill