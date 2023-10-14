import logoHTML from '../images/html-logo.avif';
import logoCSS from '../images/css-logo.avif';
import logoJavascript from '../images/javascript-logo.avif';
import logoPHP from '../images/php-logo.avif';
import logoReact from '../images/react-logo.avif';
import logoNode from '../images/node-logo.avif';
import logoExpress from '../images/express-logo.avif';
import logoMysql from '../images/mysql-logo.avif';
import logoMongo from '../images/mongo-logo.avif';
import logoTailwind from '../images/tailwind-logo.avif';
import logoBootstrap from '../images/bootstrap-logo.avif';
import logoGit from '../images/git-logo.avif';
import logoGithub from '../images/github-logo.avif';

const obtenerSkills = () => {
    return [
        // {
        //   id:crypto.randomUUID(),
        //   imagen:logoHTML,
        //   nombre:'HTML'
        // },
        // {
        //   id:crypto.randomUUID(),
        //   imagen:logoCSS,
        //   nombre:'CSS'
        // },

        {
          id:crypto.randomUUID(),
          imagen:logoPHP,
          nombre:'PHP'
        },
        {
          id:crypto.randomUUID(),
          imagen:logoNode,
          nombre:'Node JS'
        },
        {
          id:crypto.randomUUID(),
          imagen:logoJavascript,
          nombre:'JavaScript'
        },
        {
          id:crypto.randomUUID(),
          imagen:logoReact,
          nombre:'React JS'
        },

        // {
        //   id:crypto.randomUUID(),
        //   imagen:logoMysql,
        //   nombre:'MySQL'
        // },
        // {
        //   id:crypto.randomUUID(),
        //   imagen:logoMongo,
        //   nombre:'MongoDB'
        // },
        {
          id:crypto.randomUUID(),
          imagen:logoTailwind,
          nombre:'Tailwind CSS'
        },
        // {
        //   id:crypto.randomUUID(),
        //   imagen:logoBootstrap,
        //   nombre:'Bootstrap'
        // },
        // {
        //   id:crypto.randomUUID(),
        //   imagen:logoGit,
        //   nombre:'Git'
        // },
        // {
        //   id:crypto.randomUUID(),
        //   imagen:logoGithub,
        //   nombre:'GitHub'
        // },
      ]
}


export{
    obtenerSkills,
}