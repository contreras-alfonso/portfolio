import { useState } from "react"
import Spinner from "../components/Spinner";

const Contact = () => {

  const [spinner,setSpinner] = useState(false);

  const handleEnviarMensaje = () => {
    setSpinner(true);
  }

  return (
    <>
      <section className="p-5 md:p-20 slide-in-top">
        <p className="font-black text-4xl md:text-6xl text-neutral-800 uppercase max-sm:hidden">Contacto</p>
        <h1 className='font-black text-3xl md:text-5xl text-white uppercase text-center'>Ponte en <span className='text-yellow-500'>Contacto</span></h1>
        <div className='flex gap-10 flex-col lg:flex-row pt-10 pb-20 md:py-20'>
          <div className='lg:w-2/5 space-y-7'>
            <p className="font-bold text-3xl text-white uppercase">Siéntete libre de hablar</p>
            <p className="text-white text-lg">No dudes ponerte en contacto conmigo. Siempre estoy abierto a discutir nuevos proyectos, ideas y oportunidades.</p>

            <div className="space-y-5">
              <div className="flex  items-center gap-3">
                <i className="fa-solid fa-circle-phone text-4xl text-yellow-500"></i>
                <div>
                  <p className="uppercase font-bold text-neutral-300 text-lg">Teléfono</p>
                  <p className=" text-white">+51 902985640</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelopes text-3xl text-yellow-500"></i>
                <div>
                  <p className="uppercase font-bold text-neutral-300 text-lg">Email</p>
                  <a href="mailto:contrerasalfonso.lino@gmail.com" className="text-white hover:text-yellow-500">contrerasalfonso.lino@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-brands fa-github text-4xl text-yellow-500"></i>
                <div>
                  <p className="uppercase font-bold text-neutral-300 text-lg">GitHub</p>
                  <a href="https://github.com/contreras-alfonso" target="_blank" className=" text-white hover:text-yellow-500">https://github.com/contreras-alfonso</a>
                </div>
              </div>
            </div>

          </div>

          <div  className='lg:w-3/5 space-y-7 lg:px-20'>
            <div className='flex flex-col lg:flex-row items-center gap-5'>
              <input type="text" placeholder='Tu nombre' className='w-full border border-neutral-800 focus:outline-none focus:border-yellow-500 bg-neutral-800 text-white rounded-full py-3 px-5'/>
              <input type="email" placeholder='Tu email' className='w-full border border-neutral-800 focus:outline-none focus:border-yellow-500 bg-neutral-800 text-white rounded-full py-3 px-5'/>
            </div>

            <input type="text" placeholder='Asunto' className='w-full border border-neutral-800 focus:outline-none focus:border-yellow-500 bg-neutral-800 text-white rounded-full py-3 px-5'/>
            <textarea className='w-full resize-none border border-neutral-800 focus:outline-none focus:border-yellow-500 bg-neutral-800 text-white rounded-2xl py-3 px-5' id="" cols="30" rows="10" placeholder='Escribe tu mensaje'></textarea>

            <button onClick={handleEnviarMensaje} className="font-semibold  border border-yellow-500 rounded-full relative inline-flex items-center justify-start overflow-hidden transition-all   group">
              <span className="w-0 rounded bg-yellow-500 absolute ease-out duration-500 transition-all group-hover:w-full group-hover:h-full z-1"></span>
              <span className=" text-white w-full group-hover:text-white z-10 pl-10 pr-3 uppercase">
              Enviar Mensaje {''}
              </span>
              <span className="fa-solid fa-paper-plane bg-yellow-500 rounded-full p-4 relative hover:z-20 text-white"></span>
            </button>

          </div>
        </div>
      </section>

      { spinner && <Spinner/> }
    </>
  )
}

export default Contact