import React from 'react';
import Icon from '../components/Icon/Icon';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'By using ReelSaver.online, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please refrain from using our website.',
  }
   
const Page = () => {
  return (
    <>
   
    <div className='p-4 xl:px-[9rem] lg:px-[9rem] md:px-[4rem]' >
        <section className='flex justify-center '>
            <Icon/>
        </section>
        <p>
        Welcome to <Link href={"/"} className='text-blue'>ReelSaver.online</Link>. This Privacy Policy is designed to help you understand how we collect, use, and safeguard your personal information while using our website. By accessing or using ReelSaver.online, you agree to the terms outlined in this Privacy Policy.
        </p>
        <h1 className='font-bold'>1. Information We Collect:</h1>
        <p>
        ReelSaver.online does not collect any personal information from its users. We do not require users to sign in or provide any identifiable information.
        </p>
        <h1 className='font-bold'>2. Usage of Information:</h1>
        <p>
        As we do not collect any personal information, we do not use, share, or sell any data related to our users.
        </p>
        <h1 className='font-bold'>3. Cookies:</h1>
        <p>
        ReelSaver.online does not use cookies to track user activities or preferences.
        </p>
        <h1 className='font-bold'>4. Third-Party Links:</h1>
        <p>
        Our website may contain links to third-party websites. Please note that we do not have control over the content or privacy practices of these websites. We encourage you to review the privacy policies of these third-party sites before providing any personal information.
        </p>
        <h1 className='font-bold'>5. Security:</h1>
        <p>
        We prioritize the security of your data. Despite not collecting any personal information, we have implemented reasonable security measures to protect against unauthorized access, alteration, disclosure, or destruction of any information on our website.
        </p>
        <h1 className='font-bold'>6. Children&apos;s Privacy:</h1>
        <p>
        ReelSaver.online is not intended for children under the age of 13. We do not knowingly collect or store any information from individuals under 13 years of age. If you believe that we may have collected information from a minor, please contact us immediately
        </p>
        <h1 className='font-bold'>7. Changes to this Privacy Policy:</h1>
        <p>
        We reserve the right to update or modify this Privacy Policy at any time without prior notice. Any changes made will be reflected with a revised &quot;last updated&quot; date. It is advisable to review this Privacy Policy periodically for any updates.
        </p>
        <h1 className='font-bold'>8. Contact Information:</h1>
        <p>
        If you have any questions or concerns regarding this Privacy Policy, please contact us at reelsaveronline@gmail.com.
        </p><h1 className='font-bold'>
        By using ReelSaver.online, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please refrain from using our website.
        </h1>
       
    </div>
    <Footer/>
    </>
  )
}

export default Page
