import { useState } from "react"
import { Link } from "react-router-dom";

const Home = () => {

    const [modalAboutMe,setModalAboutMe] = useState(false);

  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="max-md:hidden md:w-1/5 xl:w-2/5 top-0 left-0 h-full bg-gradient-to-r from-primaryColor to-neutral-900 transform origin-bottom-left skew-x-12">

        </div>

        <div className="max-md:w-full md:w-4/5 xl:w-3/5 px-5 md:px-40 space-y-8 max-sm:text-center slide-in-bottom">
            <div>
                <h1 className='text-primaryColor font-black text-5xl md:text-6xl'>
                    <i className="fa-solid fa-horizontal-rule text-base md:text-2xl max-sm:hidden"></i>{' '}
                    Soy Alfonso Contreras.
                </h1>
                <h2 className='text-white font-black text-4xl md:text-6xl'>Ing. de Sistemas</h2>
            </div>
            <p className='text-white text-lg'>Hola, soy un estudiante apasionado por el desarrollo web, me gusta dar soluciones fáciles y adecuadas a los problemas.</p>
            <Link to={'/profile'} className="font-semibold  border border-primaryColor rounded-full relative inline-flex items-center justify-start overflow-hidden transition-all group">
                <span className="w-0 rounded bg-primaryColor absolute ease-out duration-500 transition-all group-hover:w-full group-hover:h-full z-1"></span>
                <span className=" text-white w-full group-hover:text-white z-10 pl-10 pr-3 uppercase">
                Más sobre mí {''}
                </span>
                <span className="fa-solid fa-arrow-right bg-primaryColor rounded-full p-4 relative hover:z-20 text-white"></span>
            </Link>
        </div>
    </div>
  )
}

export default Home