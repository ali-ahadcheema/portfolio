import { useState } from "react";

export default function About(){
    return(
        <>
        <div id="about" className=" flex flex-wrap gap-5 justify-evenly items-center" >
            <div>
        <div className="flex items-center gap-3 ">
             <div className="h-[2px] w-10 bg-[#60a5fa] shadow-[0_0_8px_#60a5fa]"></div>
  <p className="text-[#60a5fa]">Who I am</p>
 
</div>
<h1 className="text-5xl text-white font-bold mt-3 ">About Me</h1>
<p className="text-gray-300 mt-4 sm:text-sm">I'm <span className="text-white font-bold">ALI AHAD</span>, doing bachelor in IT and React Native<br/>
specialist who crafts production-ready web applications.<br/>
 I've built real-world web apps  streaming, e-<br/>
 commerce, pet communities, and veterinary AI detection.<br/>
 <br/>
 I work across the full stack from pixel-perfect mobile UIs to<br/>
 REST APIs, databases. I love solving complex problems end-to-<br/>
   end and shipping experiences that users actually enjoy.<br/>
   <br/>
    <span className="flex gap-1 "><img className="h-5 w-6 mt-0.5" src="https://img.icons8.com/?size=100&id=86830&format=png&color=FA5252"></img>Based anywhere · Open to freelance &<br/>
    collaboration worldwide</span> 
     </p>
            </div>
            <div className="bg-[#131d2e] h-72 w-lg border items-center rounded-2xl ">
                <h1 className="text-gray-300 mt-5 font-medium italic ml-6 ">Technologies I use</h1>
<div className="mt-8 flex flex-wrap gap-4 items-center ml-6">
    <div className="bg-[#0d1117] h-6 pb-1 w-20 text-center text-gray-300 border-0 rounded-full transition duration-150  hover:border-[1px] hover:border-[#60a5fa] hover:text-[#60a5fa]"><span >React</span> </div>
        <div className="bg-[#0d1117] h-6 pb-1 w-20 text-center text-gray-300 border-0 rounded-full transition duration-150  hover:border-[1px] hover:border-[#60a5fa] hover:text-[#60a5fa]"><span >Expo</span> </div>
            <div className="bg-[#0d1117] h-6 pb-1 w-32 text-center text-gray-300 border-0 rounded-full transition duration-150  hover:border-[1px] hover:border-[#60a5fa] hover:text-[#60a5fa]"><span >Redux toolkit</span> </div>
                <div className="bg-[#0d1117] h-6 pb-1 w-20 text-center text-gray-300 border-0 rounded-full transition duration-150  hover:border-[1px] hover:border-[#60a5fa] hover:text-[#60a5fa]"><span >Next js</span> </div>
                       <div className="bg-[#0d1117] h-6 pb-1 w-20 text-center text-gray-300 border-0 rounded-full transition duration-150  hover:border-[1px] hover:border-[#60a5fa] hover:text-[#60a5fa]"><span >MongoDB</span> </div>
                              <div className="bg-[#0d1117] h-6 pb-1 w-20 text-center text-gray-300 border-0 rounded-full transition duration-150  hover:border-[1px] hover:border-[#60a5fa] hover:text-[#60a5fa]"><span >Node js</span> </div>
                                     <div className="bg-[#0d1117] h-6 pb-1 w-20 text-center text-gray-300 border-0 rounded-full transition duration-150  hover:border-[1px] hover:border-[#60a5fa] hover:text-[#60a5fa]"><span >Github</span> </div>
                                              <div className="bg-[#0d1117] h-6 pb-1 w-20 text-center text-gray-300 border-0 rounded-full transition duration-150  hover:border-[1px] hover:border-[#60a5fa] hover:text-[#60a5fa]"><span >Vercel</span> </div>
                                                       <div className="bg-[#0d1117] h-6 pb-1 w-20 text-center text-gray-300 border-0 rounded-full transition duration-150  hover:border-[1px] hover:border-[#60a5fa] hover:text-[#60a5fa]"><span >Postman</span> </div>
                                                        <div className="bg-[#0d1117] h-6 pb-1 w-20 text-center text-gray-300 border-0 rounded-full transition duration-150  hover:border-[1px] hover:border-[#60a5fa] hover:text-[#60a5fa]"><span >Mern</span> </div>
                                                         <div className="bg-[#0d1117] h-6 pb-1 w-20 text-center text-gray-300 border-0 rounded-full transition duration-150  hover:border-[1px] hover:border-[#60a5fa] hover:text-[#60a5fa]"><span >Figma</span> </div>
</div>
            </div>
        </div>
        </>
    )
}