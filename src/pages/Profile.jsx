import { obtenerSkills } from "../helpers/helpers"
import Skill from "../components/Skill";

const Profile = () => {

  const skills = obtenerSkills();

  return (
    <>
    <section className="p-5 md:p-20">
      <div className="slide-in-top">
        <p className="font-black text-4xl md:text-6xl text-neutral-800 uppercase max-sm:hidden">Resumen</p>
        <h1 className='font-black text-3xl md:text-5xl text-white uppercase text-center'>Sobre <span className='text-yellow-500'>Mí</span></h1>
        <div className="flex flex-col gap-10 xl:flex-row py-20">
          <div className="xl:w-1/2">
            <h2 className='font-bold text-2xl md:text-3xl text-white uppercase'>Información Personal</h2>
            <div className="flex max-sm:flex-col py-10">
              <div className="w-1/2 space-y-3">
                <p className='text-gray-300'>Nombres: <span className='text-white font-semibold'>Paulino Alfonso</span></p>
                <p className='text-gray-300'>Apellidos: <span className='text-white font-semibold'>Contreras Gómez</span></p>
                <p className='text-gray-300'>Edad: <span className='text-white font-semibold'>23 Años</span></p>
                <p className='text-gray-300'>Telefono: <span className='text-white font-semibold'>+51 902985640</span></p>
                <p className='text-gray-300'>País: <span className='text-white font-semibold'>Perú</span></p>
              </div>

              <div className="w-1/2 space-y-3">
                <p className='text-gray-300'>Dirección: <span className='text-white font-semibold'>Lima</span></p>
                <p className='text-gray-300'>Email: <a href="mailto:contrerasalfonso.lino@gmail.com" className='text-white font-semibold hover:text-yellow-500'>contrerasalfonso.lino@gmail.com</a></p>
                <p className='text-gray-300'>Repositorio: <a href="https://github.com/contreras-alfonso" target="_blank" className='text-white font-semibold hover:text-yellow-500'>https://github.com/contreras-alfonso</a></p>
                <p className='text-gray-300'>Lenguajes: <span className='text-white font-semibold'>Ingles Básico, Español</span></p>
              </div>
            </div>


            <a href="/src/docs/CV Paulino Alfonso Contreras Gómez.pdf" download className="font-semibold cursor-pointer border border-yellow-500 rounded-full relative inline-flex items-center justify-start overflow-hidden transition-all   group">
              <span className="w-0 rounded bg-yellow-500 absolute ease-out duration-500 transition-all group-hover:w-full group-hover:h-full z-1"></span>
              <span className=" text-white w-full group-hover:text-white z-10 pl-10 pr-3 uppercase">
              Descargar CV {''}
              </span>
              <span className="fa-sharp fa-solid fa-cloud-arrow-down bg-yellow-500 rounded-full p-4 relative hover:z-20 text-white"></span>
            </a>
          </div>

          <div className="xl:w-1/2 ">
            <h2 className='font-bold text-2xl md:text-3xl text-white uppercase mb-5'>Educación</h2>
            <div className="border-l border-neutral-500 p-4 space-y-3 py-5">
              <span className="bg-neutral-800 text-white px-4 py-1 rounded-full">2019 - Actualidad</span>
              <p className="uppercase text-white font-bold text-lg"><i className="fa-solid fa-badge-check text-yellow-500"></i> Ingeniería de sistemas - <span className="text-neutral-300">Untels</span></p>
              <p className="text-white">Estudiante de la carrera de Ing. de Sistemas (8vo ciclo).</p>
            </div>

          </div>
        </div>
        </div>

        <hr className="w-60 md:w-96 h-0   border-1 border-neutral-950 rounded mx-auto"/>


        <div className="max-md:pb-20 slide-in-bottom">
          <h2 className='font-bold text-2xl md:text-3xl text-white uppercase text-center my-12'>Mis Skills</h2>
          <div className="grid max-sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-6">
            { skills.map(e=>(
              <Skill key={e.id} nombre={e.nombre} imagen={e.imagen}/>
            )) }
          </div>

        </div>

      </section>
    </>
  )
}

export default Profile