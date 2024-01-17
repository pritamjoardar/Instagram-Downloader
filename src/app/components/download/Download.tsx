import React,{ useEffect, useState} from "react";
import { FaDownload } from "react-icons/fa6";
import { FaVideo  } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import Imagepop from "../imagepopup/Imagepop";
//download secction

const Download = ({src,downlink,allset,title,type}:any)=>{
    const [imageload,setImageload] = useState<boolean>();
    
    useEffect(()=>{
      const img = new Image();
      img.onload = ()=>{
        setImageload(true);
      };
      img.src = src;
    },[src]);
      if(allset){
    return(
    <>
      <div className='flex flex-col justify-center text-center items-center mt-2'>
        <h1 className='text-4xl '>Search Result</h1>
        <div className='flex justify-center text-center mt-2 mb-2 xl:w-[50rem]'>
        {/* <p className='flex flex-wrap text-center text-gray-800 px-4'>{title}</p> */}
        {/* <p className='flex justify-center text-gray-800 px-4'>Mythical eye ...Follow @pjartsai for more ...#midjourney #midjourneygallery #midjourneyart #midjourneyartwork #midjourneyaiart #midjourneyartist #midjourneycommunity #midjourneyai #ai #aiartwork #aicommunity #aifantasyart #aifantasy #ai_art_gallery #aia</p> */}
        </div>     
        {/* <img className='h-[30rem] w-96 rounded-lg bg-cover' loading='lazy' src={thumb}  alt="thumpnail" /> */}
        <div className={`flex justify-end h-[30rem] w-80 rounded-lg bg-cover md:w-96 ${!imageload?'hidden':'inline'}`} style={{backgroundImage:`url(${src})`}}><span className='opacity-40 text-white text-5xl'>{type=="video"?<FaVideo/>:type=="photo"?<IoMdPhotos />:""}</span></div>
        
    <div id="shadow" className={`flex justify-center h-[30rem]  rounded-lg items-center w-80 md:w-96 ${imageload?'hidden':'inline'}`}>
      <Imagepop/></div>
        <a id='download_btn' href={downlink} download="ReelSaver.mp4" className= 'mb-2 flex justify-center text-center item-center mt-2 rounded-lg'><p className='mr-2'>Download</p><FaDownload/></a>
      </div>
    </>
    )
      }else{
        return(
          <>
          </>
        )
      }
  };
  export default Download;