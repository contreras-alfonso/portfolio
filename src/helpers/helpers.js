import logoHTML from '../images/html-logo.png';
import logoCSS from '../images/css-logo.png';
import logoJavascript from '../images/javascript-logo.png';
import logoPHP from '../images/php-logo.png';
import logoReact from '../images/react-logo.png';
import logoNode from '../images/node-logo.png';
import logoExpress from '../images/express-logo.png';
import logoMysql from '../images/mysql-logo.png';
import logoMongo from '../images/mongo-logo.png';
import logoTailwind from '../images/tailwind-logo.png';
import logoBootstrap from '../images/bootstrap-logo.png';
import logoGit from '../images/git-logo.png';
import logoGithub from '../images/github-logo.png';

const obtenerSkills = () => {
    return [
        {
          id:crypto.randomUUID(),
          imagen:logoHTML,
          nombre:'HTML'
        },
        {
          id:crypto.randomUUID(),
          imagen:logoCSS,
          nombre:'CSS'
        },
        {
          id:crypto.randomUUID(),
          imagen:logoJavascript,
          nombre:'JavaScript'
        },
        {
          id:crypto.randomUUID(),
          imagen:logoPHP,
          nombre:'PHP'
        },
        {
          id:crypto.randomUUID(),
          imagen:logoReact,
          nombre:'React JS'
        },
        {
          id:crypto.randomUUID(),
          imagen:logoNode,
          nombre:'Node JS'
        },
        // {
        //   id:crypto.randomUUID(),
        //   imagen:logoExpress,
        //   nombre:'Express'
        // },
        {
          id:crypto.randomUUID(),
          imagen:logoMysql,
          nombre:'MySQL'
        },
        {
          id:crypto.randomUUID(),
          imagen:logoMongo,
          nombre:'MongoDB'
        },
        {
          id:crypto.randomUUID(),
          imagen:logoTailwind,
          nombre:'Tailwind CSS'
        },
        {
          id:crypto.randomUUID(),
          imagen:logoBootstrap,
          nombre:'Bootstrap'
        },
        {
          id:crypto.randomUUID(),
          imagen:logoGit,
          nombre:'Git'
        },
        {
          id:crypto.randomUUID(),
          imagen:logoGithub,
          nombre:'GitHub'
        },
      ]
}


export{
    obtenerSkills,
}