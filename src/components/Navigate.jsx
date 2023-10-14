import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";

const Navigate = () => {

    const {pathname} = useLocation();

  return (
    <>
        <nav className="flex max-md:justify-between max-md:bg-neutral-950/95 md:flex-col items-center justify-center gap-5 fixed md:h-screen md:right-6 bottom-0 max-md:w-full max-md:p-3 z-40">

            <Link to={'/'} className="">
            <span className={`${pathname === '/' ? 'bg-primaryColor' : 'bg-neutral-800'} fa-solid fa-house-chimney  hover:bg-primaryColor transition-all duration-300 rounded-full p-4 relative hover:z-20 text-white`}></span>
            </Link>

            <Link to={'/profile'} className="">
            <span className={`${pathname === '/profile' ? 'bg-primaryColor' : 'bg-neutral-800'} fa-solid fa-user hover:bg-primaryColor transition-all duration-300 rounded-full p-4 relative hover:z-20 text-white`}></span>
            </Link>

            <Link to={'/portfolio'} className="">
            <span className={`${pathname === '/portfolio' ? 'bg-primaryColor' : 'bg-neutral-800'} fa fa-briefcase hover:bg-primaryColor transition-all duration-300 rounded-full p-4 relative hover:z-20 text-white`}></span>
            </Link>

            <Link to={'/contact'} className="">
            <span className={`${pathname === '/contact' ? 'bg-primaryColor' : 'bg-neutral-800'} fa-solid fa-envelope hover:bg-primaryColor transition-all duration-300 rounded-full p-4 relative hover:z-20 text-white`}></span>
            </Link>

        </nav>
    </>
  )
}

export default Navigate