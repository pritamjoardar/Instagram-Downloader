import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
   <>
   <hr />
   <div className='mt-10 flex  justify-between flex-wrap text-sm  gap-5 px-4 md:px-[4rem] md:mt-3 lg:px-[9rem] xl:mt-[5rem]  xl:flex-row'>
      <div className="">
        <h1 className='font-bold'>Support</h1>
        <span className=' text-gray-700'>
        <p>Contact us - reelsaveronline@gmail.com</p>
        </span>
      </div>
      <div className="">
        <h1 className='font-bold'>Tools</h1>
        <span className='cursor-pointer text-gray-500 flex flex-col' >
        <Link href={"/Photos"} className='hover:text-[#1875FF]'>Instagram Photos Downloader</Link >
          <Link href={"/Videos"} className='hover:text-[#1875FF]'>Instagram Videos Downloader</Link >
          <Link href={"/Reel"} className='hover:text-[#1875FF]'>Instagram Reels Downloader</Link >
          <Link href={"/Igtv"} className='hover:text-[#1875FF]'>Instagram IGTV Downloader</Link >
        </span>  
      </div>
     
          <div className="flex flex-col">
        <h1 className='font-bold'>Download</h1>
        <span className='cursor-pointer text-gray-500 flex flex-col' >
        <Link href={"/Photos"} className='hover:text-[#1875FF]'>Instagram Photos Downloader</Link >
          <Link href={"/Videos"} className='hover:text-[#1875FF]'>Instagram Videos Downloader</Link >
          <Link href={"/Reel"} className='hover:text-[#1875FF]'>Instagram Reels Downloader</Link >
          <Link href={"/Igtv"} className='hover:text-[#1875FF]'>Instagram IGTV Downloader</Link >
        </span>  
      </div>
      <div className="">
        <h1 className='font-bold'>Legel</h1>
        <span className='cursor-pointer text-gray-500 flex flex-col' >
        <Link href={"/Policy"} className='hover:text-[#1875FF]'>Privacy Policy</Link >
        </span>
      </div>
   </div>

   
   <div className='flex justify-center mt-20'>
    <span className='flex flex-col justify-center text-center'>
        <p>Made with ❤️ from India</p>
        <p className='font-bold'>We are not affiliated with Instagram or Meta</p>
        <p className='mt-8'>ReelSaver.online- &copy;2024</p>
    </span>
   </div>
   </>
  )
}

export default Footer
