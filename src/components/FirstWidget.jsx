import { useState } from "react"
import Question from "../assets/question.svg"
import Box from "../assets/box.svg"

const FirstWidget = () => {
  
  const [selectedTab,setSelectedTab]=useState("")
  return (
    <div className="h-[49%] w-[102%] bg-[#363c43] rounded-[27px] shadow-lg pr-2 pt-4 shadow-black">
      <div className="pl-2 flex gap-4">
        <div className="pt-4">
          <img src={Question}></img>
        </div>
        <div className="h-[49px] ml-2 mr-4 pr-3 gap-2 mt-2 bg-black rounded-2xl text-[#A3ADB2] flex justify-between px-2 items-center font-semibold text-[12px]">
          <div onClick={()=>setSelectedTab("About Me")} className={`hover:rounded-xl font-poppins hover:bg-[#28292F] px-[25px] hover:scale-105 hover:py-[8px] hover:text-white duration-100 ${selectedTab==="About Me" ? 'rounded-xl bg-[#28292F] shadow-[5px_23px_38px_4px_black] px-[30px] py-[8px]  text-white':
            'text-[#b4aeae]'
          } ${selectedTab!=='About Me' && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-100 hover:ease-in-out'}`}>
            About Me
          </div>
          <div onClick={()=>setSelectedTab("Experiences")} className={`hover:rounded-xl font-poppins hover:bg-[#28292F] px-[40px] hover:scale-105 hover:py-[8px] hover:text-white duration-100 ${selectedTab==="Experiences" ? 'rounded-xl shadow-[5px_23px_38px_4px_black] bg-[#28292F] px-[30px] py-[10px] text-white':
            'text-[#b4aeae]'
          } ${selectedTab!=='Experiences' && 'hover:rounded-xl hover:bg-[#28292F]  hover:duration-100 hover:ease-in-out'}`}>
            Experiences
          </div>
          <div onClick={()=>setSelectedTab("Recommend")} className={`hover:rounded-xl font-poppins hover:bg-[#28292F] px-[40px] hover:scale-105 hover:py-[8px] hover:text-white duration-100 ${selectedTab==="Recommend" ? 'rounded-xl bg-[#28292F] shadow-[5px_23px_38px_4px_black] px-[30px] py-[8px]  text-white':
            'text-[#b4aeae]'
          } ${selectedTab!=='Recommend' && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-100 hover:ease-in-out'}`}>
            Recommended
          </div>
        </div>
      </div>

{/* 
second half */}
      <div className="p-1 flex gap-4 ml-2">
      <div className="mt-9">
        <img src={Box}></img>
      </div>
      <div className="mt-3">
        <p className="font-normal text-lg text-[#969696] font-plus">My name is Rishabh Kumar,Front-end Developer.
        </p>
       <br></br>
        <p className="font-normal text-xl text-[#969696] font-plus">I am currently a 3rd year student purusing CSE degree from Dayananda Sagar College of Engeering located in Bengaluru,Karnataka</p>
      </div>

      

      <div className="w-[15px] h-[44px] rounded-lg bg-gradient-to-b mt-6 from-[#888989] to-[#4A4E54] shadow-[4px_4px_4.9px_0px_#00000040]">

      </div>
      </div>

    </div>
  )
}

export default FirstWidget
