import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";

const Navigate = () => {

    const {pathname} = useLocation();
    const renderLink = (to, iconClass, title) => (
      <Link to={to} className="relative  overflow-hidden transition-all  group min-lg:w-[180px] w-[185px] mx-auto flex items-center justify-center">
        
        <span className="max-lg:hidden bg-neutral-900 w-0 rounded-full  absolute ease-out duration-500 transition-all group-hover:w-full group-hover:h-full z-10 text-white"></span>
        
        <span className="max-lg:hidden opacity-0 text-white font-medium w-full group-hover:opacity-100 z-20 pl-10 pr-3 uppercase text-center text-sm italic duration-300">
              {title}
        </span>
        
        <span
          className={`${
            pathname === to ? 'bg-primaryColor' : 'bg-neutral-800'
          } ${iconClass}  hover:bg-primaryColor transition-all duration-300 rounded-full p-4 relative z-30 text-white`}
        ></span>
        
      </Link>
    );
  
    return (
      <nav className="flex max-md:justify-between max-md:bg-neutral-950/95 md:flex-col items-center justify-center gap-5 fixed md:h-screen md:right-6 bottom-0 max-md:w-full max-md:p-3 z-40">
        {renderLink('/', 'fa-solid fa-house-chimney', 'Inicio')}
        {renderLink('/profile', 'fa-solid fa-user', 'Sobre mí')}
        {renderLink('/portfolio', 'fa fa-briefcase', 'Portfolio')}
        {renderLink('/contact', 'fa-solid fa-envelope', 'Contacto')}
      </nav>
    );
}

export default Navigate