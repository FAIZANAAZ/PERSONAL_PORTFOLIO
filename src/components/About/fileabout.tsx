"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";
import Image from "next/image";
import { timelineData, TimelineItem } from "../../constant/about";

export default function TimelineAbout() {
  const renderTimelineElement = (item: TimelineItem) => (
    <VerticalTimelineElement
      key={item.id}
      className={`vertical-timeline-element--${item.icon}`}
      contentStyle={{ background: "#ff0000", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #ff0000" }}
      date={item.date}
      dateClassName="text-white m-3"
      // ye date ka variable by defult  VerticalTimelineElement ke ander hota he ismy hm kisi bhi chiz ki date set kr skty hen wo wo opsite side diply hogi line ke or  dateClassName ye date ki css ke liye he yebhi by default hota he
      iconStyle={{
        background: "#ff0000",
        color: "#fff",
        boxShadow: "0px 1px 0.9375rem #ff0000",
      }}
      icon={
        item.icon === "work" ? (
          <MdWork className="w-full h-full" />
        ) : (
          <MdSchool className="w-full h-full" />
        )
      }
    >
      <h3 className="text-lg font-semibold text-black ">{item.title}</h3>
      {item.subtitle && (
        <h4 className="text-sm mt-1 font-normal">{item.subtitle}</h4>
      )}
      {item.description && (
        <p className="text-sm font-normal">{item.description}</p>
      )}
    </VerticalTimelineElement>

    //  actual me ye ak line bnay ga or osky bich me hm icons lga skty hen or ak div bnayga or date os div ke opsite side pr hogi or os div me hm jo likhengy wo isky bich me html sy likhengy *
  );

  //   yha hmny ye kiya ke use kr liya yha pr sb or nichy function me call krwa diya

  return (
    <>
      <section className="min-h-screen relative z-10 flex flex-col w-full py-5 overflow-x-hidden lg:pl-10 ">
        <div className=" w-full text-center">
          <span className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl">
            Professional Journey
          </span>
          <h1 className="text-[#ff0000] font-bold text-2xl mt-3 sm:text-3xl md:text-4xl lg:text-5xl text-center">
            <span className="text-white">M</span>y{" "}
            <span className="text-white">J</span>ourney
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row w-full mt-8">
          <div className="p-4 md:p-7 w-full lg:w-[45%] order-2 lg:order-1">
            {/* order 1 2 krsy sy ye hoga ke hm ak jo div right pr rakhrty hen wo jb flex col me jati he to nichy a jati he ag r hm chahty hen ke ke right wali oper ay or left wali nichy to hm choti screen me order 2 krdengy or hm bari scren me sara kam kr liya phir hm chahty hen ke left wali ko right side hona chiye tha or left ko right to hm order-3 kr skty hen */}
            <VerticalTimeline>
              {timelineData.map(renderTimelineElement)}
            </VerticalTimeline>
          </div>
          {/* right  */}
          <div className=" w-full lg:w-[45%] flex items-center justify-center mt-8 lg:mt-0 order-1 lg:order-2">
            <div
              className="bg-[#110f0f]  shadow-lg rounded-lg p-6 w-full"
              style={{ boxShadow: "0px 1px 0.9375rem #ff0000" }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#ff0000]">
                About Me
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="font-normal">
             Hi, I m Faiza Naaz 👋, a passionate and dedicated Front-End Developer with 1 year of experience in building visually stunning, responsive, and functional user interfaces. My journey in the tech world began with completing my I.Com, and in early 2023, I started my exciting path in web development, specializing in front-end technologies and delivering clean, optimized code.

Currently, I’m expanding my skill set to become a Full-Stack Developer and diving into the realm of Artificial Intelligence. As a part of this journey, I’ve recently joined PIAIC to enhance my knowledge in Python, preparing myself to work with AI in the upcoming quarter. This step shows my commitment to staying ahead of the curve and continually evolving with the latest technologies.

🔧 My core skills include:

Front-End Development: JavaScript, TypeScript, React, Next.js, HTML, CSS, and animations.

UI Conversion: Transforming Figma or any design into clean, responsive Next.js code.

State Management: Learning Redux Toolkit for efficient state handling.

API Integration: Integrating APIs to connect front-end applications with back-end systems seamlessly.

With a passion for creating seamless and interactive web experiences, I’ve successfully completed projects that showcase my growing expertise. These projects, available in my portfolio, reflect my ability to combine creativity with technical expertise.

I am excited to bring my skills to full-stack development and AI, continuously learning and building upon my foundation. Let’s build something amazing together
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  src="/Images/front-girl.png"
                  alt="front-girl"
                  width={400}
                  height={400}
                  className="shadow-red-600 rounded-full shadow-2xl h-58 w-58 sm:h-68 sm:w-68 md:h-70 md:w-70 lg:h-[20rem] lg:w-[20rem] object-contain animate-pulse hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
