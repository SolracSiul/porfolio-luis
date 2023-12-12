"use client"
import Image from 'next/image'
import Navbar from './components/Navbar'
import AsideLeft from './components/AsideLeft'
import AsideRight from './components/AsideRight'
import {motion} from "framer-motion"
import Banner from './components/home/Banner'
import About from './components/about/About'
import Experience from './components/xp/Experience'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'

export default function Home() {
  return (
    <main className="w-full h-screen font-body bg-body text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar/>
      <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.4}} className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
            <AsideLeft/>
          </motion.div>
          <div className='h-[88vh] w-full mx-auto p-4'>
            <Banner/>
            <About/>
            <Experience/>
            <Project/>
            <Contact/>
          </div>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.4}} className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
            <AsideRight/>
          </motion.div>
      </div>
    </main>
  )
}
