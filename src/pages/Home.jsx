import { useState } from "react"
import { Link } from "react-router-dom";

const Home = () => {

    const [modalAboutMe,setModalAboutMe] = useState(false);

  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="max-md:hidden md:w-1/5 xl:w-2/5 top-0 left-0 h-full bg-gradient-to-r from-yellow-500 to-neutral-900 transform origin-bottom-left skew-x-12">

        </div>

        <div className="max-md:w-full md:w-4/5 xl:w-3/5 px-5 md:px-40 space-y-8 max-sm:text-center slide-in-bottom">
            <div>
                <h1 className='text-yellow-500 font-black text-5xl md:text-6xl'>
                    <i className="fa-solid fa-horizontal-rule text-base md:text-2xl max-sm:hidden"></i>{' '}
                    Soy Alfonso Contreras.
                </h1>
                <h2 className='text-white font-black text-4xl md:text-6xl'>Desarrollador Web</h2>
            </div>
            <p className='text-white text-lg'>Hola, soy un estudiante de Ing. de Sistemas, en busca de prácticas pre-profesionales, con el fin de poder aplicar y afianzar mis habilidades en el campo del desarrollo web.</p>
            <Link to={'/profile'} className="font-semibold  border border-yellow-500 rounded-full relative inline-flex items-center justify-start overflow-hidden transition-all group">
                <span className="w-0 rounded bg-yellow-500 absolute ease-out duration-500 transition-all group-hover:w-full group-hover:h-full z-1"></span>
                <span className=" text-white w-full group-hover:text-white z-10 pl-10 pr-3 uppercase">
                Más sobre mí {''}
                </span>
                <span className="fa-solid fa-arrow-right bg-yellow-500 rounded-full p-4 relative hover:z-20 text-white"></span>
            </Link>
        </div>
    </div>
  )
}

export default Home