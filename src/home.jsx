import { useState } from "react";

export default function Home(){
    return(
        <>
        <div className="flex flex-wrap sm:gap-5 justify-evenly mt-12 ">
            <div >
                <div className="flex gap-1.5 text-[#60a5fa] border-[1px] border-[#60a5fa] w-72 items-center rounded-xl pl-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-sky-400 animate-pulse"></div>
                <h1 > Availble for frelane & collaboration</h1></div>
                <h1 className="text-7xl font-bold text-white mt-5">Ali <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#2dd4bf]">
    Ahad
  </span></h1>
                <p className="text-gray-300 mt-5">React Native developer turning ideas into polished cross-<br/>
                  platform mobile experiences. Clean UI, robust backend,<br/>
                      smooth performance.</p>

                      {/* link */}
                      <div className="flex gap-3.5 mt-5">
                        <a className="flex w-32 h-12 items-center pl-1 bg-[#60a5fa] rounded-full" href=""><img className="h-6 w-6" src="https://img.icons8.com/?size=100&id=12628&format=png&color=0d1117"></img>Get in touch</a>
                        <a className="flex w-36 pl-1.5 pl-1.5s transition duration-500 h-12 bg-[#0d1117] rounded-full items-center text-white text-center font-bold hover:text-[#60a5fa] hover:border-[1px] hover:border-[#60a5fa]  hover:rounded-full" href=""><img className="h-6 w-6" src="https://img.icons8.com/?size=100&id=ugglMdaco8Cl&format=png&color=FFFFFF"></img>View projects</a>
                      </div>
                      <div className="flex gap-3 mt-8">
                        <a href="https://github.com/ali-ahadcheema"><img className="h-8 w-8 rounded-full transition duration-300 ease-in-out hover:scale-110 bg-[#0d1117] hover:border-[1px] hover:border-[#60a5fa]" src="https://img.icons8.com/?size=100&id=106562&format=png&color=FFFFFF"></img></a>
                                <a href="https://www.instagram.com/ali_ahadcheema/"><img className="h-8 w-8 rounded-full transition duration-300 ease-in-out hover:scale-110 bg-[#0d1117] hover:border-[1px] hover:border-[#60a5fa]" src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF"></img></a>
                                        <a  href="https://linkedin.com/in/ali-ahadcheema"><img className="h-8 w-8   rounded-full transition duration-300 ease-in-out hover:scale-110 bg-[#0d1117] hover:border-[1px] hover:border-[#60a5fa]" src="https://img.icons8.com/?size=100&id=86875&format=png&color=FFFFFF"></img></a>
                      </div>
            </div>
            <div className="bg-[#131d2e] mt-5 border-t-[1px] border-[#60a5fa]  h-96 w-80 rounded-2xl">
                <h1 className="text-gray-300 italic mt-8 ml-5 text-lg">Quic stack</h1>
     
              <div className="h-12 w-72 pl-9 flex items-center gap-2 ml-4 mt-3 text-white hover:bg-[#1a2535] hover:border-[1px] hover:border-[#bfdbfe] hover:rounded-xl font-bold text-sm" > <img className="h-5 w-5" src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"></img>    <span>React/js</span></div>
              <div className="h-12 w-72 pl-9 flex items-center gap-2 ml-4 mt-1 text-white hover:bg-[#1a2535] hover:border-[1px] hover:border-[#bfdbfe] hover:rounded-xl font-bold text-sm" > <img className="h-5 w-5" src="https://img.icons8.com/?size=100&id=69537&format=png&color=228BE6"></img>    <span>Nodejs,Nextjs</span></div>
              <div className="h-12 w-72 pl-9 flex items-center gap-2 ml-4 mt-1 text-white hover:bg-[#1a2535] hover:border-[1px] hover:border-[#bfdbfe] hover:rounded-xl font-bold text-sm" > <img className="h-5 w-5" src="https://img.icons8.com/?size=100&id=8305&format=png&color=C850F2"></img>    <span>MondoDB.MySQL</span></div>
              <div className="h-12 w-72 pl-9 flex items-center gap-2 ml-4 mt-1 text-white hover:bg-[#1a2535] hover:border-[1px] hover:border-[#bfdbfe] hover:rounded-xl font-bold text-sm" > <img className="h-5 w-5" src="https://img.icons8.com/?size=100&id=38389&format=png&color=C850F2"></img>    <span>Git.Postman.Figma</span></div>

            </div>
        </div>
        
        </>
    )
}