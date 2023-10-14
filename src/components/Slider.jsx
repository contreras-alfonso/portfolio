import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

const Slider = ({slides}) => {
    
    const [curr,setCurr] = useState(0);

    const prev = () => {
        curr === 0 ? setCurr(slides.length-1) : setCurr(curr-1)
    }

    const next = () => {
        curr === slides.length-1 ? setCurr(0) : setCurr(curr+1)
    }

  return (
    <div className='overflow-hidden relative rounded-2xl'>
        <div className='flex transition-transform ease-out duration-500' style={{transform: `translateX(-${curr * 100}%)`}}>
          { slides.map(slide=>(
            <img className='rounded-2xl' key={crypto.randomUUID()} src={slide} alt={`imagen - ${slide}`} />
          )) }
         
        </div>
        <div className='absolute inset-0 flex items-center justify-between px-5'>
            <button onClick={prev} className='p-6 bg-neutral-200 flex items-center justify-center rounded-full shadow h-1 w-1  text-gray-800'>
                <i className="fa-solid fa-chevron-left  rounded-full shadow-2xl text-black"></i>
            </button>
            <button onClick={next} className='p-6 bg-neutral-200 flex items-center justify-center rounded-full shadow h-1 w-1  text-gray-800'>
                <i className="fa-solid fa-chevron-right  rounded-full shadow-2xl text-black"></i>
            </button>
        </div>
    </div>
  )
}

export default Slider