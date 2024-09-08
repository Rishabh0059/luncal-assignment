import Question from '../assets/question.svg'
import Box from '../assets/box.svg'
import { FaPlus, FaArrowLeft ,FaArrowRight} from "react-icons/fa6";
import { useState,useRef } from 'react';

const SecondWidget = () => {

  

  const inputRef=useRef(null);
  const [currentIndex,setCurrentIndex]=useState(0);
  const [images,setImages]=useState([
    "https://fsk-lunacal-task.netlify.app/assets/Rectangle-B5rZyAio.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbdMMDF1lSj4pxrNeB3xFPfewV5Ki5_8R47A&s",
    "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1495001258031-d1b407bc1776?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://s.itl.cat/pngfile/s/298-2982121_wallpaper-melbourne-australia-skyscrapers-night-ipad-pro-wallpaper.jpg",
    "https://picsum.photos/id/1084/536/354?grayscale",
   
  ]);

  const handleNext = () => {
    if (currentIndex <= images.length - 3) {
        setCurrentIndex(currentIndex + 1);
    }
};

const handlePrev = () => {
  if (currentIndex >= 0) {
      setCurrentIndex(currentIndex - 1);
  }
};

  const handleImageUpload=(event)=>{
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImages([reader.result,...images]);
        };
        reader.readAsDataURL(file);
    }
  }
  return (
    <div className="h-[48.5%] w-[102%] bg-[#363c43] rounded-[27px] shadow-lg pr-2 shadow-black">
      <div className="pl-2 pt-5 pb-3 flex gap-4">
      <div className="pt-2">
          <img src={Question}></img>
        </div>
        <div className='w-full flex justify-between items-center'>
        <div className='w-[149px] shadow-custom-inset  leading-[30px] text-[20px] font-poppins text-center justify-between h-[52px] bg-[#171717] px-8 py-2 rounded-2xl text-white text-lg shadow-inner font-medium'>
          Gallery
        </div>

        <div>
          <div className='flex gap-4 px-4'>
            <div className="shadow-[6px_7px_5px_1px_#1f1f1fab] rounded-full">
              <button className="px-4 py-3 rounded-full bg-[#FFFFFF08] text-white font-semibold text-xs
                                flex justify-center items-center gap-1 shadow-inner shadow-[#a7a4a4b5] shadow-top-blur-white"
                                onClick={() => inputRef.current.click()}>
                       <FaPlus className="w-[10px] mb-[1.4px] font-poppins"></FaPlus>ADD IMAGE           
              </button>
              <input type='file' ref={inputRef}
              style={{display:'none'}} accept='image/*'
              onChange={handleImageUpload}
              ></input>
            </div>

            <div className='flex gap-4'>
                <div className='rounded-full  active:scale-[0.8] z-0'>
                  <button className="rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3 shadow-[2px_8px_22px_5px_black] text-[#6F787C]">
                    <FaArrowLeft width={14.19} height={14} onClick={handlePrev}></FaArrowLeft>
                  </button>
                </div>

                <div className='rounded-full  active:scale-[0.8] z-0'>
                  <button className="rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3 shadow-[2px_8px_22px_5px_black] text-[#6F787C]">
                    <FaArrowRight width={14.19} height={14} onClick={handleNext}></FaArrowRight>
                  </button>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>

    <div className="p-1 flex gap-4 ml-2">
    <div className="mt-9 w-[19px]">
        <img src={Box}></img>
      </div>
     
      <div className='grid grid-cols-3 gap-6 justify-center items-center px-2 overflow-hidden w-full'>
     
        {images.slice(currentIndex,currentIndex+3).map((image,index)=>(
          <div key={index} className='relative'>
            <img src={image}
            className='h-[150px] w-[170px] rounded-2xl hover:scale-110 duration-300 hover:opacity-100 '
            ></img>
          </div>
        ))}
        
      </div>
      
    </div>
    </div>
  )
}

export default SecondWidget
