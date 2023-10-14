import imagenOrejotasYColitas from '../images/portfolio/orejotasycolitas.avif';
import imagenOrejotasYColitas1 from '../images/portfolio/orejotasycolitas1.avif';
import imagenOrejotasYColitas2 from '../images/portfolio/orejotasycolitas2.avif';
import imagenOrejotasYColitas3 from '../images/portfolio/orejotasycolitas3.avif';
import imagenOrejotasYColitas4 from '../images/portfolio/orejotasycolitas4.avif';
import imagenDevX from '../images/portfolio/devx.avif';
import imagenDevX1 from '../images/portfolio/devx1.avif';
import imagenDevX2 from '../images/portfolio/devx2.avif';
import imagenDevX3 from '../images/portfolio/devx3.avif';
import imagenDevX4 from '../images/portfolio/devx4.avif';
import imagenDevX5 from '../images/portfolio/devx5.avif';
import imagenDevX6 from '../images/portfolio/devx6.avif';
import imagenDevX7 from '../images/portfolio/devx7.avif';
import imagenDevX8 from '../images/portfolio/devx8.avif';
import imagenGuitart from '../images/portfolio/guitart.avif';
import imagenGuitart1 from '../images/portfolio/guitart1.avif';
import imagenGuitart2 from '../images/portfolio/guitart2.avif';
import imagenGuitart3 from '../images/portfolio/guitart3.avif';
import imagenGuitart4 from '../images/portfolio/guitart4.avif';
import imagenGuitart5 from '../images/portfolio/guitart5.avif';
import imagenCompubyte from '../images/portfolio/compubyte.avif';
import imagenCompubyte1 from '../images/portfolio/compubyte1.avif';
import imagenCompubyte2 from '../images/portfolio/compubyte2.avif';
import imagenCompubyte3 from '../images/portfolio/compubyte3.avif';
import imagenCompubyte4 from '../images/portfolio/compubyte4.avif';
import imagenCompubyte5 from '../images/portfolio/compubyte5.avif';
import imagenCompubyte6 from '../images/portfolio/compubyte6.avif';
import imagenGastos from '../images/portfolio/gastos.avif';
import imagenGastos1 from '../images/portfolio/gastos1.avif';
import imagenGastos2 from '../images/portfolio/gastos2.avif';
import imagenGastos3 from '../images/portfolio/gastos3.avif';
import imagenGastos4 from '../images/portfolio/gastos4.avif';
import imagenGastos5 from '../images/portfolio/gastos5.avif';
import imagenGastos6 from '../images/portfolio/gastos6.avif';
import imagenCrm from '../images/portfolio/crm.avif';
import imagenCrm1 from '../images/portfolio/crm1.avif';
import imagenCrm2 from '../images/portfolio/crm2.avif';
import imagenCrm3 from '../images/portfolio/crm3.avif';
import imagenCrm4 from '../images/portfolio/crm4.avif';

const informacionPortafolio = () => {
    return [
        {
          id:crypto.randomUUID(),
          nombre: 'Dev X',
          tecnologia: 'MongoDB, Express, React, Node, Tailwind CSS',
          enlace: 'https://devx-lino.vercel.app',
          estadoEnlace: 1,
          imagenPrincipal: imagenDevX,
          subImagenes: [
            imagenDevX,
            imagenDevX1,
            imagenDevX2,
            imagenDevX3,
            imagenDevX4,
            imagenDevX5,
            imagenDevX6,
            imagenDevX7,
            imagenDevX8
          ]
        },
        {
          id:crypto.randomUUID(),
          nombre: 'Orejotas y Colitas',
          tecnologia: 'PHP, HTML, CSS, JavaScript, MySQL',
          enlace: 'No disponible',
          estadoEnlace: 0,
          imagenPrincipal: imagenOrejotasYColitas,
          subImagenes: [
            imagenOrejotasYColitas,
            imagenOrejotasYColitas1,
            imagenOrejotasYColitas2,
            imagenOrejotasYColitas3,
            imagenOrejotasYColitas4,
          ]
        },
        {
          id:crypto.randomUUID(),
          nombre: 'Compubyte',
          tecnologia: 'PHP, HTML, CSS, JavaScript, Bootstrap, MySQL',
          enlace: 'No disponible',
          estadoEnlace: 0,
          imagenPrincipal: imagenCompubyte,
          subImagenes: [
            imagenCompubyte,
            imagenCompubyte1,
            imagenCompubyte2,
            imagenCompubyte3,
            imagenCompubyte4,
            imagenCompubyte5,
            imagenCompubyte6,
          ]
        },
        {
          id:crypto.randomUUID(),
          nombre: 'GuitArt',
          tecnologia: 'Remix JS, Strapi, PostgreSQL, Tailwind CSS',
          enlace: 'https://guitart-remix.vercel.app/carrito',
          estadoEnlace: 1,
          imagenPrincipal: imagenGuitart,
          subImagenes: [
            imagenGuitart,
            imagenGuitart1,
            imagenGuitart2,
            imagenGuitart3,
            imagenGuitart4,
            imagenGuitart5,
          ]
        },
        {
          id:crypto.randomUUID(),
          nombre: 'Planificador de gastos',
          tecnologia: 'React, Tailwind CSS',
          enlace: 'https://gastos-lino.netlify.app/',
          estadoEnlace: 1,
          imagenPrincipal: imagenGastos,
          subImagenes: [
            imagenGastos,
            imagenGastos1,
            imagenGastos2,
            imagenGastos3,
            imagenGastos4,
            imagenGastos5,
            imagenGastos6,
          ]
        },
        {
          id:crypto.randomUUID(),
          tecnologia: 'React, Tailwind CSS',
          nombre: 'CRM Clientes',
          enlace: 'No disponible',
          estadoEnlace: 0,
          imagenPrincipal: imagenCrm,
          subImagenes: [
            imagenCrm,
            imagenCrm1,
            imagenCrm2,
            imagenCrm3,
            imagenCrm4
          ]
        },
      
      ]
}


export{
    informacionPortafolio,
}