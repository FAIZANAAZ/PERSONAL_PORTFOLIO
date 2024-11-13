'use client'

import React from 'react'
import Image from 'next/image'
import Typist from 'react-typist'

export default function Component() {
  return (
    <section className="relative z-10 flex flex-col md:flex-row justify-between min-h-screen w-full items-center px-4 sm:px-6 md:px-8 lg:px-[8rem]  py-8">
      <div className="flex flex-col gap-y-2 md:gap-y-4 mb-8 md:mb-0 text-center md:text-left">
        <h5 className="text-[1rem] sm:text-[2rem] font-bold text-white">Hey !</h5>
        <h1 className="text-white text-4xl sm:text-4.5xl lg:text-5xl xl:text-6xl font-bold">
          I am <span className="text-[#ff0000] shadow-lg ">Faiza Naaz</span>
        </h1>
        <span className="text-white">
          <Typist className="TypistExample-message text-xl sm:text-2xl lg:text-3xl" cursor={{ show: false }}>
            <span>I&apos;m a </span>
            <span className="font-weight-bold">
              <span className="font-bold text-[#ff0000]">Front-end Developer</span>
              <Typist.Backspace count={21} delay={2000} />
              <span className="font-bold text-[#ff0000]">Full Stack Developer</span>
            </span>
          </Typist>
        </span>
        <p className="text-sm sm:text-base lg:text-lg text-white max-w-md mx-auto md:mx-0">
          I&apos;m a full-stack developer in the making, focused on building engaging and user-friendly interfaces.
        </p>
      </div>

      <div className="flex justify-center md:justify-end">
        <Image
          src="/Images/front-girl.png"
          alt="front-girl"
          width={400}
          height={400}
          className="h-58 w-58 sm:h-68 sm:w-68 md:h-80 md:w-80 lg:h-[25rem] lg:w-[25rem] object-contain"
        />
      </div>
    </section>
  )
}