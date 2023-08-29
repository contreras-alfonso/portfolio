import { useState } from "react";
import ModalPortfolio from "./ModalPortfolio";
import { info } from "autoprefixer";

const ContenedorImgPortfolio = ({informacion,handleModalPortfolio}) => {

    const {imagenPrincipal,nombre} = informacion;

  return (
    <>
        <div className='group'>
            <div className='relative overflow-hidden'>
                <img src={imagenPrincipal} alt="" className='rounded-2xl'/>
                <button onClick={()=>{handleModalPortfolio(informacion)}} className="absolute h-full w-full bg-yellow-500/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 text-white font-black text-xl md:text-3xl uppercase rounded-2xl">{nombre}</button>
            </div>
        </div>
        
    </>
  )
}

export default ContenedorImgPortfolio