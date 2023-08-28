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
     <section className="p-20 h-screen">
        <p className="font-black text-6xl text-neutral-800 uppercase">Trabajos</p>
        <h1 className='font-black text-5xl text-white uppercase text-center'>Mi <span className='text-yellow-500'>Portafolio</span></h1>

        <div className=' grid grid-cols-3 gap-10 py-20 px-20'>

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