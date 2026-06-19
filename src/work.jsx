import { useState } from "react";


export default function Work(){
    return(
        <>
        <diV className=" flex flex-col gap-2 ml-5 lg:ml-20">
            <div className="flex items-center gap-1">
            <div className="h-[1px] w-8 bg-[#60a5fa] shadow-[0_0_8px_#60a5fa]"></div>
            <p className="text-[#60a5fa] font-medium text-lg ">WHY WORK WITH ME</p>
            </div>
     <h1 className="text-4xl font-bold text-white">
    What I bring
</h1>
<p className="text-gray-400">More than just code a thoughtful developer invested in your<br/>
 product's success. </p>
 <div className="flex gap-6 flex-wrap mt-4">
    <div className="bg-[#131d2e]  h-52 w-64 pt-4 border-0 rounded-2xl hover:border-[1px] hover:border-[#bfdbfe] shadow-[0_-4px_6px_-2px_rgba(96,165,250,0.5)] transition-transform duration-300 hover:translate-y-[-5px] hover:scale-100 ">     
                <div className="bg-[#354b64] h-7 w-8  border-0  ml-4 mt-3.5  rounded-lg"><img className=" h-6 w-6 ml-1 mt-2 " src="https://img.icons8.com/?size=100&id=86822&format=png&color=228BE6"></img></div> 
               <h1 className="text-white font-medium italic ml-4 mt-2.5">Fast delivery</h1> 
              <p className="text-gray-300 text-sm ml-4 mt-2">From wireframe to app stores<br/>
                in record time, without cutting<br/>
                 corners on quality.</p>
    </div>
    <div className="bg-[#131d2e]  h-52 w-64 pt-4 border-0 rounded-2xl hover:border-[1px] hover:border-[#bfdbfe] shadow-[0_-4px_6px_-2px_rgba(96,165,250,0.5)] transition-transform duration-300 hover:translate-y-[-5px] hover:scale-100 ">     
                <div className="bg-[#354b64] h-7 w-8  border-0  ml-4 mt-3.5  rounded-lg"><img className=" h-6 w-6 ml-1 mt-2 " src="https://img.icons8.com/?size=100&id=tlMoT74J8pp1&format=png&color=228BE6"></img></div> 
               <h1 className="text-white font-medium italic ml-4 mt-2.5">Clean UI/UX</h1> 
              <p className="text-gray-300 text-sm ml-4 mt-2">Pixel-perfect interfaces users<br/>
                  love, designed with care and        <br/>
               attention to detail. </p>
    </div>
    <div className="bg-[#131d2e]  h-52 w-64 pt-4 border-0 rounded-2xl hover:border-[1px] hover:border-[#bfdbfe] shadow-[0_-4px_6px_-2px_rgba(96,165,250,0.5)] transition-transform duration-300 hover:translate-y-[-5px] hover:scale-100 ">     
                <div className="bg-[#354b64] h-7 w-8 pt-0.5  border-0  ml-4 mt-3.5  rounded-lg"><img className="  h-6 w-8 mb-3 " src="https://img.icons8.com/?size=100&id=intmnr9r2kUQ&format=png&color=228BE6"></img></div> 
               <h1 className="text-white font-medium italic ml-4 mt-2.5">Full-stack mind</h1> 
              <p className="text-gray-300 text-sm ml-4 mt-2">Not only mobile I craft APIs,<br/>
               databases and smooth end-<br/>
                to-end integrations. </p>
    </div>
 <div className="bg-[#131d2e]  h-52 w-64 pt-4 border-0 rounded-2xl hover:border-[1px] hover:border-[#bfdbfe] shadow-[0_-4px_6px_-2px_rgba(96,165,250,0.5)] transition-transform duration-300 hover:translate-y-[-5px] hover:scale-100 ">     
                <div className="bg-[#354b64] h-7 w-8  border-0  ml-4 mt-3.5  rounded-lg"><img className=" h-6 w-6 ml-1 mt-2 " src="https://img.icons8.com/?size=100&id=59805&format=png&color=228BE6"></img></div> 
               <h1 className="text-white font-medium italic ml-4 mt-2.5">AI & wellness</h1> 
              <p className="text-gray-300 text-sm ml-4 mt-2">
              Experience with AI chatbots, <br/>
               healthcare apps and mental<br/>wellbeing platforms. </p>
    </div>
 </div>
        </diV>
        </>
    )
}