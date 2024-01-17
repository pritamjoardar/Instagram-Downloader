import React from 'react'
import Icon from '../components/Icon/Icon'
import About from '../components/About/About'
import Faq from '../components/FAQ/Faq'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Free Instagram Igtv Downloader Tool - Download Photos, Videos, Reels, and IGTV Online for Mobile and PC',
  description: 'Explore the ultimate Instagram downloader for free! Download Instagram photos, videos, stories, reels (mp4), and IGTV content effortlessly with our online tool. Fast, easy, and reliable – get your favorite content on both mobile and PC with our Instagram downloader.',
}
 
const Page = () => {
  return (
<>
<Icon/>
  <Header pt={"Instagram Igtv Downloader"}/>
  <About/>
  <Faq/>
  <Footer/>
</>
  )
}

export default Page
