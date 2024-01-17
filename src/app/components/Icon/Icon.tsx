import React from 'react'
import Logo from "../../assect/reelsaver.png";
import Link from 'next/link';
const Icon = () => {
  return (
    <>
    <Link href="/" className='fiex flex-row items-center '>
        <img src={Logo.src} alt="Logo" className='h-16' />
    </Link>
    </>
  )
}

export default Icon
