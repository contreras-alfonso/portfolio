import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";

const Navigate = () => {

    const {pathname} = useLocation();

  return (
    <>
        <nav className="flex flex-col items-center justify-center gap-5 absolute h-screen right-6 bottom-0 ">

            <Link to={'/'} className="">
            <span className={`${pathname === '/' ? 'bg-yellow-500' : 'bg-neutral-800'} fa-solid fa-house-chimney  hover:bg-yellow-500 transition-all duration-300 rounded-full p-4 relative hover:z-20 text-white`}></span>
            </Link>

            <Link to={'/profile'} className="">
            <span className={`${pathname === '/profile' ? 'bg-yellow-500' : 'bg-neutral-800'} fa-solid fa-user hover:bg-yellow-500 transition-all duration-300 rounded-full p-4 relative hover:z-20 text-white`}></span>
            </Link>

            <Link to={'/portfolio'} className="">
            <span className={`${pathname === '/portfolio' ? 'bg-yellow-500' : 'bg-neutral-800'} fa fa-briefcase hover:bg-yellow-500 transition-all duration-300 rounded-full p-4 relative hover:z-20 text-white`}></span>
            </Link>

            <Link to={'/contact'} className="">
            <span className={`${pathname === '/contact' ? 'bg-yellow-500' : 'bg-neutral-800'} fa-solid fa-envelope hover:bg-yellow-500 transition-all duration-300 rounded-full p-4 relative hover:z-20 text-white`}></span>
            </Link>

        </nav>
    </>
  )
}

export default Navigate