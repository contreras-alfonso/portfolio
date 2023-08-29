import ContenedorImgPortfolio from "../components/ContenedorImgPortfolio"
import { informacionPortafolio } from "../helpers/portafolio"
import { useState } from "react";
import ModalPortfolio from "../components/ModalPortfolio";

const Portfolio = () => {

  const informacionPort = informacionPortafolio();
  const [modalPortfolio,setModalPortfolio] = useState(false);
  const [dataModalPortfolio,setDataModalPortfolio] = useState({});

  const handleModalPortfolio = (data) => {
    setModalPortfolio(true);
    setDataModalPortfolio(data)
}

  return (
    <>
     <section className="p-5 pt-10 md:p-20 slide-in-right">
        <p className="font-black text-4xl md:text-6xl text-neutral-800 uppercase max-sm:hidden">Trabajos</p>
        <h1 className='font-black text-3xl md:text-5xl text-white uppercase text-center'>Mi <span className='text-yellow-500'>Portafolio</span></h1>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-10 pt-10 pb-20 md:py-20 md:px-10'>

          {informacionPort.map(e=>
            <ContenedorImgPortfolio key={e.id} informacion={e} handleModalPortfolio={handleModalPortfolio}/>
          )}

        </div>
      
      </section>

      <ModalPortfolio dataModalPortfolio={dataModalPortfolio} modalPortfolio={modalPortfolio} setModalPortfolio={setModalPortfolio}/>
    
    </>
  )
}

export default Portfolio