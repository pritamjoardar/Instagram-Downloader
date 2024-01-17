"use client";
import React, { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Faq = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const Data = [
    {
      q: "1. What is the purpose of this website?",
      a: "Our website is designed to help users download Instagram Reels photos easily. It allows you to save your favorite Reels photos directly to your device.",
    },
    {
      q: "2. Is it legal to download Instagram Reels photos using this website?",
      a: "Yes, it is legal to download public content from Instagram. However, it's essential to respect the intellectual property rights of others. Do not download and distribute content without the owner's permission.",
    },
    {
      q: "3. How do I use the Instagram Reels Photos Downloader?",
      a: "Simply copy the URL of the Instagram Reels photo you want to download and paste it into the designated field on our website. Click the download button, and your photo will be ready to save.",
    },
    {
      q: "4. Can I download Reels photos from private accounts?",
      a: "No, our service only supports the download of Reels photos from public Instagram accounts. We prioritize user privacy and adhere to Instagram's policies.",
    },
    {
      q: "5. Do I need to create an account on your website to use the downloader?",
      a: "No, our service is user-friendly and does not require any account creation. You can use the downloader as a guest.",
    },
    {
      q: "6. Are there any limitations on the number of downloads per day?",
      a: "Currently, there are no restrictions on the number of downloads. You can use our service as much as you need.",
    },
    {
      q: "7. What devices and browsers are compatible with the Instagram Reels Photos Downloader?",
      a: "Our website is accessible on various devices, including desktops, laptops, and mobile devices. It is compatible with popular web browsers like Chrome, Firefox, Safari, and Edge.",
    },
    {
      q: "8. Is the downloaded content of high quality?",
      a: "Yes, our downloader preserves the original quality of the Instagram Reels photos, providing you with the best possible resolution.",
    },
    {
      q: "9. Do you store any user data or downloaded content?",
      a: "We do not store any user data or downloaded content on our servers. Your privacy and security are our top priorities.",
    },
  ];

  return (
    <>
      <div className='flex text-start flex-col p-4 mb-3 md:px-[9rem] xl:px-[9rem]'>
        <h1 className='font-bold text-[1.4rem] mb-3 text-gray-800 md:text-2xl'>Frequently Asked Questions (FAQ)</h1>
        {
            Data.map((items,index)=>(
                <Accordion placeholder={""} open={open === index+1} key={index} className="mb-2 text-gray-700 px-4 ">
            <AccordionHeader placeholder={""}
          onClick={() => handleOpen(index+1)}
          className={` transition-colors flex text-start${
            open === index+1 ? "text-blue-500 text-base hover:!text-blue text-start" : ""
          }`}
        >
          <p className='text-base'>
          {items.q}

          </p>
        </AccordionHeader>
        <AccordionBody className="pt-0">
          {items.a}
        </AccordionBody>
      </Accordion>
            ))
        }
      </div>
    </>
  );
};

export default Faq;
