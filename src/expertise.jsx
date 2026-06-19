import { useState } from "react";

export default function Expertise(){
return(
    <>
    <div className="flex flex-col gap-3 ml-5 lg:ml-20">
        <div className="flex items-center gap-1">
            <div className="h-[1px] w-8 bg-[#60a5fa] shadow-[0_0_8px_#60a5fa]"></div>
            <p className="text-[#60a5fa] font-medium italic text-2xl">Expertise</p>
        </div>
        <p className="text-white font-medium italic text-4xl">Skills</p>
        <p className="text-gray-300">A broad toolkit built through real shipped products from UI to
            <br/>infrastructure.
        </p>
<div className="flex flex-wrap gap-4">
    <div className="bg-[#1a2535] h-36 w-80 border-0 rounded-xl transition duration-150 group overflow-hidden hover:scale-105 ">
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#60a5fa] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className=" items-center ml-3 ">
    <div className="bg-[#354b64] h-7 w-8 border-0 pb-0.5  rounded-lg"> <img className=" h-6 w-6 ml-1 mt-2  " src="https://img.icons8.com/?size=100&id=35989&format=png&color=228BE6"></img></div>
        <p className="text-white font-medium italic mt-1">React </p>
        <p className="text-gray-300 text-sm mt-1">Build smooth and scalalbe react pages,<br/>
         using similar techanlogies. </p>
      </div>
    </div>
    <div className="bg-[#1a2535] h-36 w-80 border-0 rounded-xl transition duration-150 group overflow-hidden hover:scale-105 ">
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#60a5fa] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className=" items-center ml-3 ">
        <div className="bg-[#354b64] h-7 w-8 border-0 pb-0.5  rounded-lg"><img className=" h-6 w-6 ml-1 mt-2 " src="https://img.icons8.com/?size=100&id=69537&format=png&color=228BE6 "></img></div>
        <p className="text-white font-medium italic mt-1">Node js</p>
        <p className="text-gray-300 text-sm mt-1">using node js and express for backend,<br/>
         using curd opearation in rest api. </p>
      </div>
    </div>
    <div className="bg-[#1a2535] h-36 w-80 border-0 rounded-xl transition duration-150 group overflow-hidden hover:scale-105 ">
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#60a5fa] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className=" items-center ml-3 ">
        <div className="bg-[#354b64] h-7 w-8 border-0 pb-0.5  rounded-lg"><img className=" h-6 w-6 ml-1 mt-2 " src="https://img.icons8.com/?size=100&id=iobx5mGqBK93&format=png&color=228BE6 "></img></div>
        <p className="text-white font-medium italic mt-1">Mongo Db</p>
        <p className="text-gray-300 text-sm mt-1">using mongo db for store real time data ,<br/>
         fro user and thier applications. </p>
      </div>
    </div>
    <div className="bg-[#1a2535] h-36 w-80 border-0 rounded-xl transition duration-150 group overflow-hidden hover:scale-105 ">
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#60a5fa] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className=" items-center ml-3 ">
        <div className="bg-[#354b64] h-7 w-8 border-0 pb-0.5  rounded-lg"><img className=" h-6 w-6 ml-1 mt-2 " src="https://img.icons8.com/?size=100&id=4cYbUEm3rT3q&format=png&color=228BE6  "></img></div>
        <p className="text-white font-medium italic mt-1">Express</p>
        <p className="text-gray-300 text-sm mt-1">Using express with node js to build server ,<br/>
         and create backend for user application. </p>
      </div>
    </div>
     <div className="bg-[#1a2535] h-36 w-80 border-0 rounded-xl transition duration-150 group overflow-hidden hover:scale-105 ">
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#60a5fa] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className=" items-center ml-3 ">
        <div className="bg-[#354b64] h-7 w-8 border-0 pb-0.5  rounded-lg"><img className=" h-6 w-6 ml-1 mt-2 " src="https://img.icons8.com/?size=100&id=9izPPs1xV3ly&format=png&color=228BE6 "></img></div>
        <p className="text-white font-medium italic mt-1">Language </p>
        <p className="text-gray-300 text-sm mt-1">Using java script and jsx to write a syntax,<br/>
         and impliment whole project with languages. </p>
      </div>
    </div>
     <div className="bg-[#1a2535] h-36 w-80 border-0 rounded-xl transition duration-150 group overflow-hidden hover:scale-105 ">
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#60a5fa] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className=" items-center ml-3 ">
        <div className="bg-[#354b64] h-7 w-8 border-0 pb-0.5  rounded-lg"><img className=" h-6 w-6 ml-1 mt-2 " src="https://img.icons8.com/?size=100&id=9152&format=png&color=228BE6 "></img></div>
        <p className="text-white font-medium italic mt-1">Clean ui</p>
        <p className="text-gray-300 text-sm mt-1">Build clean ui and code for easy to understand,<br/>
         and help team meamber to work them. </p>
      </div>
    </div>
<div className="bg-[#1a2535] h-36 w-80 border-0 rounded-xl ">
<span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#60a5fa] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className=" items-center ml-3 ">
        <div className="bg-[#354b64] h-7 w-8 border-0 pb-0.5  rounded-lg"><img className=" h-6 w-6 ml-1 mt-2 " src="https://img.icons8.com/?size=100&id=38389&format=png&color=228BE6 "></img></div>
        <p className="text-white font-medium italic mt-1">Git command</p>
        <p className="text-gray-300 text-sm mt-1">Using git command to push project and wokr ,<br/>
         with team members. </p>
      </div>
    </div>

</div> 

    </div>
    </>
)

}