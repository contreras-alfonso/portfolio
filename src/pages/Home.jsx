import { useState } from "react"

const Home = () => {

    const [modalAboutMe,setModalAboutMe] = useState(false);

  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="w-2/5 top-0 left-0 h-full bg-gradient-to-r from-yellow-500 to-neutral-900 transform origin-bottom-left skew-x-12">
            <p className="">hola mundo</p>
        </div>

        <div className="space-y-8 w-3/5 px-40">
            <div>
                <h1 className='text-yellow-500 font-black text-6xl'>
                    <i className="fa-solid fa-horizontal-rule text-2xl"></i>{' '}
                    Soy Alfonso Contreras.
                </h1>
                <h2 className='text-white font-black text-6xl'>Desarrollador Web</h2>
            </div>
            <p className='text-white text-lg'>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
            <button className="font-semibold  border border-yellow-500 rounded-full relative inline-flex items-center justify-start overflow-hidden transition-all group">
                <span className="w-0 rounded bg-yellow-500 absolute ease-out duration-500 transition-all group-hover:w-full group-hover:h-full z-1"></span>
                <span className=" text-white w-full group-hover:text-white z-10 pl-10 pr-3 uppercase">
                Más sobre mí {''}
                </span>
                <span className="fa-solid fa-arrow-right bg-yellow-500 rounded-full p-4 relative hover:z-20 text-white"></span>
            </button>
        </div>
    </div>
  )
}

export default Home