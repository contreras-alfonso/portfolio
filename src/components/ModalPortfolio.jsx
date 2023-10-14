import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Slider from './Slider';

export default function ModalPortfolio({modalPortfolio,setModalPortfolio,dataModalPortfolio}) {

    const {id,enlace,estadoEnlace,imagenPrincipal,nombre,subImagenes,tecnologia} = dataModalPortfolio;
    console.log();

  return (
    <>

      <Transition appear show={modalPortfolio} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={()=>{setModalPortfolio(false)}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-90" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-3 md:p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full md:w-11/12 lg:w-4/5  h-fit transform overflow-hidden rounded-2xl bg-neutral-800 p-5 md:p-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="uppercase text-center leading-6 text-primaryColor font-black text-3xl"
                  >
                    {nombre}
                  </Dialog.Title>
                  <div className="mt-2 py-5 space-y-2">
                    <p className='text-white'><i className="fa-solid fa-code"></i> Tecnologías usadas: <span className='font-bold'>{tecnologia}</span></p>
                    <p className='text-white'><i className="fa-solid fa-eye"></i> Ver proyecto: {estadoEnlace ? <a className='text-primaryColor font-bold' href={`${enlace}`} target='_blank'>{enlace}</a> : <span className='text-red-500 font-bold'>{enlace}</span>}</p>
                  </div>
                  
                  <Slider slides={subImagenes}/>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
