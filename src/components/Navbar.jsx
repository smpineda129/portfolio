import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className=" text-gray-500 py-4 px-8 bg-gray-200">
        <div className="container max-w-[1280px] mx-auto flex justify-end gap-8">
            <Link
            to="seccion1"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 2}
            className="cursor-pointer hover:text-yellow-400 transition text-xl"
            >
                Sección 1
            </Link>
            <Link
            to="seccion2"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 9}
            className="cursor-pointer hover:text-yellow-400 transition text-xl"
            >
                Sección 2
            </Link>
            <Link
            to="seccion3"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 9}
            className="cursor-pointer hover:text-yellow-400 transition text-xl"
            >
                Sección 3
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
