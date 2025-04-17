import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className=" text-gray-500 py-4 px-8 bg-gray-200 absolute right-0">
        <div className="container max-w-[1280px] mx-auto flex justify-end gap-8">
            <Link
            to="seccion1"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 2}
            className="cursor-pointer hover:text-blue-600 transition text-xl"
            >
                Home
            </Link>
            <Link
            to="seccion2"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 9}
            className="cursor-pointer hover:text-blue-600 transition text-xl"
            >
                About
            </Link>
            <Link
            to="seccion3"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 15}
            className="cursor-pointer hover:text-blue-600 transition text-xl"
            >
                Experience
            </Link>
            <Link
            to="seccion4"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 9}
            className="cursor-pointer hover:text-blue-600 transition text-xl"
            >
                Proyects
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
