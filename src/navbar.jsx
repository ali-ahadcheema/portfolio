import { useState } from "react";

export default function Navbar(){
    const [button,setbton]=useState(false);
    return(
        <>
        <div className="bg-[#0d1117] fixed top-0 z-50  flex justify-evenly items-center h-13 lg:h-15 w-full border-b-[1px] gap-52 border-b-white">
            <h1 className="text-[#38bdf8] text-xl italic">ALI</h1>

               <div className="hidden lg:block md:block">
                 <ul className="flex items-center gap-10 list-none text-gray-300 ">
                <li className=" transition duration-150 w-18 hover:duration-150 text-center hover:text-[#38bdf8] hover:bg-[#1a2535]  hover:border-sky-400 hover:rounded-full"><a href="/">Home</a></li>
                <li className=" transition duration-150 w-18 hover:duration-150 text-center hover:text-[#38bdf8] hover:bg-[#1a2535]  hover:border-sky-400 hover:rounded-full"><a href="#about">About</a></li>
                <li className=" transition duration-150 w-18 hover:duration-150 text-center hover:text-[#38bdf8] hover:bg-[#1a2535]  hover:border-sky-400 hover:rounded-full"><a href="https://github.com/ali-ahadcheema">Projects</a></li>
                <li className=" transition duration-150 w-18 hover:duration-150 text-center hover:text-[#38bdf8] hover:bg-[#1a2535]  hover:border-sky-400 hover:rounded-full"><a href="#email">Contact</a></li>
            </ul>
               </div>
            <div className="block lg:hidden md:hidden">
                <button onClick={()=>setbton(!button)}><img className="h-7 w-8" src="https://img.icons8.com/?size=100&id=YOrgWKvUdGE3&format=png&color=FFFFFF"></img></button>
                
               <div className={`${button ?"opacity-100 translate-y-0" : "opacity-0 translate-y-full"} mt-14 bg-[#0d1117] transition duration-700 fixed top-0 right-0 w-full h-56 z-50 `} >
                 <ul className="flex flex-col  gap-7 list-none ml-6 mt-2.5 text-gray-300 ">
                <li className=" transition duration-150 w-18 hover:duration-150 text-center hover:text-[#38bdf8] hover:bg-[#1a2535]  hover:border-sky-400 hover:rounded-full"><a className="flex gap-2 items-center " href="/"><img className="h-5 w-8" src="https://img.icons8.com/?size=100&id=1iF9PyJ2Thzo&format=png&color=38bdf8"></img> Home</a></li>
                <li className=" transition duration-150 w-18 hover:duration-150 text-center hover:text-[#38bdf8] hover:bg-[#1a2535]  hover:border-sky-400 hover:rounded-full"><a className="flex gap-2 items-center " href="/about"><img className="h-5 w-8" src="https://img.icons8.com/?size=100&id=98957&format=png&color=38bdf8"></img> About</a></li>
                <li className=" transition duration-150 w-18 hover:duration-150 text-center hover:text-[#38bdf8] hover:bg-[#1a2535]  hover:border-sky-400 hover:rounded-full"><a className="flex gap-2 items-center " href="/projects"><img className="h-5 w-8" src="https://img.icons8.com/?size=100&id=112370&format=png&color=38bdf8"></img> Projects</a></li>
                <li className=" transition duration-150 w-18 hover:duration-150 text-center hover:text-[#38bdf8] hover:bg-[#1a2535]  hover:border-sky-400 hover:rounded-full"><a className="flex gap-2 items-center " href="/contact"><img className="h-5 w-8" src="https://img.icons8.com/?size=100&id=86875&format=png&color=38bdf8"></img> Contact</a></li>
            </ul>
               </div>
            </div>
            
        </div>
        </>
    )
}