"use client";
import React, {  useState } from 'react';
import Download from '../download/Download';
import axios from 'axios';
import Downloadbtn from '../downloadbtn/Downloadbtn';
import Loader from '../Loader/Loader';
import { FaDownload } from "react-icons/fa6";
import Link from 'next/link';

const Header = ({pt}:{pt:string}):any => {
    const [link,setLink] = useState<string>("");
    const [thumb,setThumb] = useState<string>("");
    const [title,setTitle] = useState<string>("");
    const [type,setType] = useState<string>();  

    const [downlink,setDownlink] = useState<string>("");
    const [click,setClick] = useState<boolean>(false);
    const [wrong,setWrong] = useState<boolean>(false);
    const [allset,setAllset] = useState<boolean>(false);
    const [paste,setPaste] = useState<boolean>(false);
    const [invalid,setInvalid] = useState<boolean>(false);

  //for option1  
    const options1 = {
      method: 'GET',
      url: process.env.NEXT_PUBLIC_URL,
      params: {
        url: `${link}`
      },
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_KEY,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_HOST
      },   
    };
    const Submit1= async(e:any)=>{
      e.preventDefault();
      const reg = "https://www.instagram.com";
      if(link.match(reg)){
      try {
          setInvalid(false);
          setClick(true);
          setWrong(false);
          await axios.request(options1).then((response)=>{
            setThumb(response.data[0].thumb);
            setDownlink(response.data[0].url);
            setTitle(response.data[0].title);
            setType(response.data[0].type);
            setClick(false);
            setAllset(true);
            // console.log(response);
          }).catch((err)=>{
            // console.log("axios error",err);
            // setStatus(err.response.status);
            setWrong(true);
            setClick(false);
  
          });
  } catch (error) {
      // console.error(error);
  }
}else{
  setInvalid(true);
}
  
  
    };
  
    //for paste func
    const Paste=async(e:any)=>{
      const copy = await navigator.clipboard.readText();
      setLink(copy);
      setPaste(true);
      Submit1(e);
    }
   
    return (
      <>
      <form>
        <header className='bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex flex-col justify-center text-center items-center p-4 text-xl md:p-8'>
          <h1 className='text-white  font-bold text-[2rem] md:text-4xl xl:font-salsa'>{pt}</h1>
          <h2 className='text-white mt-4'>Download Instagram Videos Photos Stories Reels IGTV easily!</h2>
          <span className='flex gap-2 mt-[1rem]'> 
            <Link href={"/Reel"}  className="glass text-white p-1 px-2 cursor-pointer rounded-lg">Reels</Link>
            <Link href={"/Photos"}   className="glass text-white p-1 px-2 cursor-pointer rounded-lg">Photos</Link>
            <Link href={"/Videos"}   className="glass text-white p-1 px-2 cursor-pointer rounded-lg">Videos</Link>
            <Link href={"/Igtv"} className="glass text-white p-1 px-2 cursor-pointer rounded-lg">IGTV</Link>
          </span>
          <div className='flex justify-center items-center text-white p-4 bg-white rounded-full mt-[1rem] '>
              <input value={link} className='w-64 h-8 text-gray-500 outline-none ml-2  md:w-[30rem] lg:w-[40rem] xl:w-[50rem]'  type="text" name="" id="" placeholder='link paste here' required onChange={(e)=>setLink(e.target.value)}/>
                <span className='hidden md:inline'>


                {paste?
                <div className='paste_btn ml-1 rounded-lg' onClick={()=>{setPaste(false);setLink("")}}>&#10060;Clear</div>:<div className='paste_btn rounded-lg ml-1' onClick={Paste}>Paste</div>
                }
                </span>
                <span className='cursor-pointer ml-1 hidden md:inline' onClick={Submit1}><Downloadbtn /></span>
                <span className='cursor-pointer ml-2 md:hidden text-[#1875FF]' onClick={Submit1}><FaDownload /></span>

          </div>
        </header>
        </form>
        <div className='flex justify-center px-[4rem] md:px-[9rem] xl:px-[9rem]'>
  {
  click?
    <Loader/>
  :<Download src={thumb} downlink={downlink} allset={allset} title={title} type={type}/>
  }   
        </div>
        <div className='flex justify-center mt-3'>
          <h1 className='text-red-900'>{wrong?"Something went wrong .Try again !":""}</h1>
          <h1 className='text-red-900'>{invalid?"Invalid URL!":""}</h1>

        </div>
        
      </>
    )
  }
  export default Header
  