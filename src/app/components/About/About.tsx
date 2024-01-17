import React from 'react'
import Copy from "../../assect/copy.png";
import Paste from "../../assect/paste.png";
import Download from "../../assect/download.png";
import Logo from "../../assect/reelsaver.png";

const About = () => {
  return (
    <>
    <div  className='flex px-2 md:px-[4rem] md:mt-9 lg:px-[9rem]'>
        <div id='shadow' className='flex flex-col rounded-lg p-4 md:flex-row'>
        <div  className="flex justify-center items-center md:mr-4">
            
            <img src={Logo.src} alt="Logo"/>
            </div>
        <div  className="flex flex-col  md:text-start">
        <h1 className='font-bold text-[1.6rem] mb-2 md:text-3xl'>Welcome to Instagram Video Downloader</h1>
        <p>Welcome to Instagram Video Downloader! Our platform is designed to help you unlock the world of Instagram videos like never before. With our user-friendly interface, you can effortlessly save your favorite Instagram videos and enjoy them offline. We offer high-quality downloads, speed, and reliability at the core of our service, so you can trust us for all your video downloading needs.
Our platform is designed to be user-friendly, so you can explore and start building your own offline collection of Instagram content with ease. Discover the world of Instagram videos with convenience, right here! 🎉</p>
        </div>
        </div>
    </div>
{/* Features of instaDownloader */}
    <div className="  text-gray-700 p-4 md:px-[4rem] md:mt-9 md:mb-9 lg:px-[9rem] ">
        <h1 className='font-bold text-2xl mb-2'>Instagram Video Downloader Features</h1>
        <span className='flex'><li></li><p className='font-bold hidden lg:inline'>Fast and Reliable:</p><p className=''>Our service ensures that you get your videos without any interruptions, so you can enjoy them offline without any buffering or lag.</p></span>
        <span className='flex'><li></li><p className='font-bold hidden lg:inline '>High-Quality Downloads:</p><p className=''>Download Instagram videos in the highest available quality, so you can enjoy them in all their glory.</p></span>
        <span className='flex'><li></li><p className='font-bold hidden lg:inline '>User-Friendly Interface:</p><p className=''>Our platform is designed to be user-friendly, so you don’t need any technical expertise to use it.</p></span>
        <span className='flex'><li></li><p className='font-bold hidden lg:inline '>No Registration Required:</p><p className=''>You don’t need to create an account or log in to use our service. Just visit our website and start downloading videos right away.</p></span>
        <span className='flex'><li></li><p className='font-bold hidden lg:inline  '>Unlimited Downloads:</p><p className=''>Download as many Instagram videos as you want, with no restrictions. Our service is completely free.</p></span>
        <span className='flex'><li></li><p className='font-bold w-max hidden lg:inline ' >Supports Multiple Platforms:</p><p className=''> Our service is compatible with various devices and platforms, including Windows, macOS, Android, and iOS.</p></span>
    </div>

    {/* How to Download */}
        <div className=' flex px-4 flex-col justify-center text-center  md:px-[4rem] md:mt-3 lg:px-[9rem]'>
            <h1 className='font-bold text-2xl text-[#1875FF] mb-4 md:text-4xl'>HOW TO DOWNLOAD REELS VIDEO FROM INSTAGRAM?</h1>
            <div className='w-full h-0.5 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] mb-4'></div>
            <div className=' flex justify-evenly flex-col md:flex-col xl:flex-row'>
                <div id='shadow' className='rounded-lg overflow-hidden mb-2 md:mb-3 xl:w-[25rem]'>
                    <div className='mb-1 px-2 flex justify-center items-center h-48 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]  md:p-8'>
                        <img src={Copy.src} alt="copy" />
                    </div>
                    <p className='text-[#ee2a7b] font-bold text-2xl'>Copy the URL</p>
                    <div  className='flex text-start  mb-2 px-2  '>
                    <p className='text-gray-800'>Open Instagram and copy the link of the video you want to download.</p>
                    </div>  
                </div>
                <div id='shadow' className='rounded-lg overflow-hidden mb-2 md:mb-3 xl:w-[25rem]'>
                    <div className='mb-1 px-2 flex justify-center items-center h-48 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]  md:p-8'>
                    <img src={Paste.src} alt="paste" />
                    </div>
                    <p className='text-[#ee2a7b] font-bold text-2xl mb-2'>Paste the Link</p>
                    <div  className='flex text-start mb-2 px-2 '>
                    <p className='text-gray-800'>Paste the link to the input line on the Video Downloader for Instagram page and click Download.</p>
                    </div>
                </div>
                <div id='shadow' className='rounded-lg overflow-hidden mb-2 md:mb-3 xl:w-[25rem]'>
                    <div className='mb-1 px-2 flex justify-center items-center h-48 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]  md:p-8'>
                    <img src={Download.src} alt="Download" />
                    </div>
                    <p className='text-[#ee2a7b] font-bold text-2xl mb-2'>Download The Reels Video</p>
                    <div  className='flex text-start mb-2 px-2 '>
                    <p className='text-gray-800'>Click Download once again to confirm the action.</p>
                    </div>
                </div>
               
            </div>
        </div>
        <div className='flex flex-wrap p-4  mt-0 md:px-[4rem] md:mt-3 md:mb-5 lg:px-[9rem]'>
            <h1 className='font-bold text-2xl text-gray-800'>What is Instagram Reels ?</h1>
            <p className='text-gray-700'>Instagram Reels is a feature of Instagram that allows users to create short videos between 15 and 30 seconds in length. It is a fun way to connect with your community over entertaining videos that inspire anyone to join in. You can record and edit 15-second multi-clip videos with audio, effects, and new creative tools. Videos are up to 30 seconds long and you can create multiple videos that allow you to express yourself.</p>
        </div>
        <div className='flex flex-wrap p-4 mb-3 md:px-[4rem] lg:px-[9rem]'>
            <h1 className='font-bold text-[1.4rem] text-gray-800 md:text-2xl'>What is Instagram Stories ?</h1>
            <p className='text-gray-700'>Instagram Stories are vertical, full-screen photos and videos that disappear after 24 hours. They appear at the top of the Instagram app interface rather than in the news feed. Stories can include interactive tools like stickers, polls, and AR filters to make your content really pop.</p>
        </div>
    </>
  )
}

export default About
