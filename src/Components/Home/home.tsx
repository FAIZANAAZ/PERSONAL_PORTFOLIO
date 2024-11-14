'use client'

import React from 'react'
import Image from 'next/image'
import Typist from 'react-typist'
import Link from 'next/link'

export default function Component() {
  return (
    <section className="relative z-10 flex flex-col md:flex-row justify-between in-h-[calc(100vh-50px)] w-[100%] items-center px-4 sm:px-6 md:px-8 lg:px-[8rem]  py-8">
      <div className="flex flex-col gap-y-2 md:gap-y-4 mb-8 md:mb-0 text-center md:text-left">
        <h5 className="text-[1rem] sm:text-[2rem] font-bold text-white">Hey !</h5>
        <h1 className="text-white text-4xl sm:text-4.5xl lg:text-5xl xl:text-6xl font-bold">
          I am <span className="text-[#ff0000] shadow-lg ">Faiza Naaz</span>
        </h1>
        <span className="text-white">
          <Typist className="TypistExample-message text-xl sm:text-2xl lg:text-3xl" cursor={{ show: false }}>
            <span>I&apos;m </span>
            <span className="font-weight-bold">
              <span className="font-bold text-[#ff0000]">Front-end Developer</span>
              <Typist.Backspace count={19} delay={1000} />
              <span className="font-bold text-[#ff0000]">Full Stack Developer</span>
            </span>
          </Typist>
        </span>
        <p className="text-sm sm:text-base lg:text-lg text-white max-w-md mx-auto md:mx-0">
          I&apos;m a full-stack developer in the making, focused on building engaging and user-friendly interfaces.
        </p>
        <Link href="/resume" className="inline-block">
      <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg font-semibold text-white bg-[#ff0000] rounded-full hover:bg-[#ff3333] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
        style={{ boxShadow: '0px 1px 15px #ff0000' }}>
        View Resume
      </button>
    </Link>g
      </div>

      <div className="flex justify-center md:justify-end">
        <Image
          src="/Images/front-girl.png"
          alt="front-girl"
          width={400}
          height={400}
          className="shadow-red-600 rounded-full shadow-2xl h-58 w-58 sm:h-68 sm:w-68 md:h-80 md:w-80 lg:h-[25rem] lg:w-[25rem] object-contain animate-pulse hover:scale-105 transition-transform duration-300" 
        />
      </div>
    </section>
  )
}