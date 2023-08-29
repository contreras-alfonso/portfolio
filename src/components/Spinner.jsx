import React from 'react'

const Spinner = () => {
  return (
    <div className='flex items-center justify-center fixed bottom-0 left-0 right-0 top-0 z-50 bg-black opacity-90 transition-all duration-300'>
        <i className="fa-duotone fa-spinner-third fa-spin text-white text-5xl"></i>
    </div>
  )
}

export default Spinner