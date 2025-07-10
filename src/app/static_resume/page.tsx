"use client"
import Image from "next/image"
import ParticlesComponent from "../../components/Design_back/filedesing"

const Resume = () => {
  return (
    <>
      <ParticlesComponent />
      <section className="relative z-10 flex justify-center items-center min-h-screen w-full p-4 print:p-0 print:min-h-0">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden w-11/12 max-w-4xl flex border border-gray-300 min-h-screen print:shadow-none print:rounded-none print:border-none print:w-full print:max-w-none print:min-h-0">
          {/* Left Sidebar */}
          <aside className="w-1/2 bg-blue-900 text-white p-6 flex flex-col items-center print:w-1/3 print:text-white print:text-lg print:p-4 print:min-h-screen">
            <Image
              src="/Images/profilep.jpg"
              width={150}
              height={150}
              alt="Profile"
              className="rounded-full border-4 border-white shadow-lg print:w-40 print:h-40 print:border-2"
            />
            <h2 className="text-2xl font-semibold mt-4 print:text-xl">FAIZA NAAZ</h2>
            <p className="text-blue-200 mt-1 print:text-blue-300">Frontend Developer</p>

            {/* Skills */}
            <div className="mt-6 w-full">
              <h3 className="text-lg font-semibold border-b border-white pb-1 print:border-white text-white">Skills</h3>
              <ul className="mt-2 text-sm space-y-1 print:text-base text-white">
                {["JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS" ,"Redux Toolkit","Git & GitHub","Api integration ", "React.js", "Vercel","Next.js","Sanity-CMS"].map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="mt-6 w-full text-white">
              <h3 className="text-lg font-semibold border-b border-white pb-1 print:border-white">Contact</h3>
              <p className="text-sm mt-2 print:text-base">Karachi, Sindh, Pakistan</p>
              <p className="text-sm print:text-base">faixanaaz@gmail.com</p>
            </div>
          </aside>

          {/* Right Content */}
          <main className="w-2/3 p-6 text-gray-800 print:w-2/3 print:text-black print:text-lg">
            {/* Summary */}
            <section>
              <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 print:text-2xl print:border-black">Summary</h2>
              <p className="text-sm mt-2 print:text-md">
                I started my web development journey in 2023. With a strong foundation in frontend technologies , I am
                now expanding my skills by learning Python for backend development. My ultimate goal is to become an AI
                Engineer, combining my web development expertise with AI technologies to build intelligent solutions.
              </p>
            </section>

            {/* Education */}
            <section className="mt-6">
              <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 print:text-2xl print:border-black">Education</h2>
              <p className="text-sm mt-2 print:text-lg">ICOM | Commerce</p>
              <p className="text-sm text-gray-600 print:text-gray-800">Women College, Karachi, Pakistan</p>
            </section>

            {/* Languages */}
            <section className="mt-6">
              <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 print:text-2xl print:border-black">Languages</h2>
              <p className="text-sm mt-2 print:text-lg">English - Upper Intermediate</p>
              <p className="text-sm print:text-lg">Urdu - Proficient</p>
            </section>

            {/* Hobbies */}
            <section className="mt-6">
              <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 print:text-2xl print:border-black">Hobbies</h2>
              <ul className="text-sm mt-2 space-y-1 print:text-lg">
                <li>• Coding</li>
                <li>• Namaz</li>
                <li>• Exploring new technologies of Web  development</li>
                <li>• Watching coding videos</li>
                <li>• Studying</li>
              </ul>
            </section>

            {/* Courses */}
            <section className="mt-6">
              <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 print:text-2xl print:border-black">Courses</h2>
              <ul className="text-sm mt-2 space-y-1 print:text-lg">
                <li>• Web Development - GIAIC (Jan 2023 - Jan 2025)</li>
                <li>• AI - GIAIC (Feb 2025 - Present)</li>
                <li>• Python - PIAIC (Oct 2024 - Present)</li>
              </ul>
            </section>

            {/* Print Button */}
            <div className="mt-6 flex justify-center print:hidden">
              <button
                onClick={() => window.print()}
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
              >
                Print Resume
              </button>
            </div>
          </main>
        </div>
      </section>
    </>
  )
}

export default Resume