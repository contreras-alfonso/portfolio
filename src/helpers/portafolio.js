import imagenOrejotasYColitas from '../images/portfolio/orejotasycolitas.png';
import imagenOrejotasYColitas1 from '../images/portfolio/orejotasycolitas1.png';
import imagenOrejotasYColitas2 from '../images/portfolio/orejotasycolitas2.png';
import imagenOrejotasYColitas3 from '../images/portfolio/orejotasycolitas3.png';
import imagenOrejotasYColitas4 from '../images/portfolio/orejotasycolitas4.png';
import imagenDevX from '../images/portfolio/devx.png';
import imagenDevX1 from '../images/portfolio/devx1.png';
import imagenDevX2 from '../images/portfolio/devx2.png';
import imagenDevX3 from '../images/portfolio/devx3.png';
import imagenDevX4 from '../images/portfolio/devx4.png';
import imagenDevX5 from '../images/portfolio/devx5.png';
import imagenDevX6 from '../images/portfolio/devx6.png';
import imagenDevX7 from '../images/portfolio/devx7.png';
import imagenDevX8 from '../images/portfolio/devx8.png';
import imagenGuitart from '../images/portfolio/guitart.png';
import imagenGuitart1 from '../images/portfolio/guitart1.png';
import imagenGuitart2 from '../images/portfolio/guitart2.png';
import imagenGuitart3 from '../images/portfolio/guitart3.png';
import imagenGuitart4 from '../images/portfolio/guitart4.png';
import imagenGuitart5 from '../images/portfolio/guitart5.png';
import imagenCompubyte from '../images/portfolio/compubyte.png';
import imagenCompubyte1 from '../images/portfolio/compubyte1.png';
import imagenCompubyte2 from '../images/portfolio/compubyte2.png';
import imagenCompubyte3 from '../images/portfolio/compubyte3.png';
import imagenCompubyte4 from '../images/portfolio/compubyte4.png';
import imagenCompubyte5 from '../images/portfolio/compubyte5.png';
import imagenCompubyte6 from '../images/portfolio/compubyte6.png';
import imagenGastos from '../images/portfolio/gastos.png';
import imagenGastos1 from '../images/portfolio/gastos1.png';
import imagenGastos2 from '../images/portfolio/gastos2.png';
import imagenGastos3 from '../images/portfolio/gastos3.png';
import imagenGastos4 from '../images/portfolio/gastos4.png';
import imagenGastos5 from '../images/portfolio/gastos5.png';
import imagenGastos6 from '../images/portfolio/gastos6.png';
import imagenCrm from '../images/portfolio/crm.png';
import imagenCrm1 from '../images/portfolio/crm1.png';
import imagenCrm2 from '../images/portfolio/crm2.png';
import imagenCrm3 from '../images/portfolio/crm3.png';
import imagenCrm4 from '../images/portfolio/crm4.png';

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
          enlace: 'https://orejotasycolitas.online/veterinaria/',
          estadoEnlace: 1,
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