"use client"
import { AnimatePresence, motion } from "framer-motion"
import { ImMenu } from "react-icons/im"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  const [menu, setMenu] = useState(false)

  const openmenu = () => {
    setMenu(!menu)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  return (
    <>
      <nav className="z-10 top-0 w-[100%] flex justify-between items-center px-2 text-white opacity-[.05rem]">
        <div className="flex items-center ml-[.3125rem] sm:ml-[1.25rem]">
          <Image
            src={"/Images/logo.png"}
            width={500}
            height={500}
            alt="Gift logo"
            className="sm:w-[8.25rem] sm:h-[8.25rem] h-[3.125rem] w-[4.125rem]"
          />
        </div>

        <div className="sm:flex lg:space-x-[5rem] text-white lg:font-semibold lg:text-[1.5625rem] md:space-x-[1.875rem] md:text-[1.25rem] md:font-[600] sm:space-x-[1.875rem] sm:text-[1.125rem] sm:font-[500] absolute right-[3.125rem] hidden">
          <Link
            href={"/"}
            className="bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent hover:from-red-400 hover:to-white hover:scale-110 hover:drop-shadow-lg transition-all duration-300 transform"
          >
            Home
          </Link>
          <Link
            href={"/Aboutrout"}
            className="bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent hover:from-red-400 hover:to-white hover:scale-110 hover:drop-shadow-lg transition-all duration-300 transform"
          >
            About
          </Link>
          <Link
            href={"/Skilrendering"}
            className="bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent hover:from-red-400 hover:to-white hover:scale-110 hover:drop-shadow-lg transition-all duration-300 transform"
          >
            Skill
          </Link>
          <Link
            href={"/Projects"}
            className="bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent hover:from-red-400 hover:to-white hover:scale-110 hover:drop-shadow-lg transition-all duration-300 transform"
          >
            Projects
          </Link>
          <Link
            href={"/Contact"}
            className="bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent hover:from-red-400 hover:to-white hover:scale-110 hover:drop-shadow-lg transition-all duration-300 transform"
          >
            Contact me
          </Link>
        </div>

        <div className="flex flex-col justify-center items-end">
          <button onClick={openmenu} className="sm:hidden block">
            <ImMenu size={30} color="#ff0000" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menu ? (
          <motion.div
            className="absolute z-20 top-[3.75rem] right-[.125rem] flex flex-col space-y-[1.25rem] text-center font-bold h-[16.25rem] w-full bg-black text-white text-[1.25rem] sm:hidden p-4"
            key="menuu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "16.25rem", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={"/"}
              onClick={closeMenu}
              className="bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent hover:from-red-400 hover:to-white hover:scale-105 transition-all duration-300 transform"
            >
              Home
            </Link>
            <Link
              href={"/Aboutrout"}
              onClick={closeMenu}
              className="bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent hover:from-red-400 hover:to-white hover:scale-105 transition-all duration-300 transform"
            >
              About
            </Link>
            <Link
              href={"/Skilrendering"}
              onClick={closeMenu}
              className="bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent hover:from-red-400 hover:to-white hover:scale-105 transition-all duration-300 transform"
            >
              Skill
            </Link>
            <Link
              href={"/Projects"}
              onClick={closeMenu}
              className="bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent hover:from-red-400 hover:to-white hover:scale-105 transition-all duration-300 transform"
            >
              Projects
            </Link>
            <Link
              href={"/Contact"}
              onClick={closeMenu}
              className="bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent hover:from-red-400 hover:to-white hover:scale-105 transition-all duration-300 transform"
            >
              Contact me
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default Nav
