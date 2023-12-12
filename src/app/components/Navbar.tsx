"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import { useRef } from 'react'
function Navbar() {
    
    const ref = useRef<string | any>("")

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
        console.log('handle scroll')
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth"
        })
        const links = document.querySelectorAll(".nav-link")
        links.forEach((link) =>{
            link.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
    }
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:-[12vh] sticky top-0 z-40 bg-body px-4 text-white'>
        <div className='max-w-container h-full mx-auto py-1 font-title flex items-center justify-between'>
            <motion.div initial={{x: -10, opacity: 0}}
                        animate={{x:10, opacity: 1}} className='w-14'  transition={{duration: 1}}>
                            <span className='text-green-400'>lcrs</span>
            </motion.div>
            <div className='hidden mdl:inline-flex items-center gap-6'>
                <ul className='flex text-[14px] gap-4'>
                    <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-greenText cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                        <motion.li
                        initial={{x: -10, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1}}>Home</motion.li>
                    </Link>
                    <Link href="#about" className='flex items-center gap-1 font-medium text-textDark hover:text-greenText cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                        <motion.li
                        initial={{x: -10, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1}}>Sobre</motion.li>
                    </Link>
                    <Link href="#experience" className='scroll-smooth flex items-center gap-1 font-medium text-textDark hover:text-greenText cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                        <motion.li
                        initial={{x: -10, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1}}>Experiência</motion.li>
                    </Link>
                    <Link href="#projects" className='flex items-center gap-1 font-medium text-textDark hover:text-greenText cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                        <motion.li
                        initial={{x: -10, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1}}>Projetos</motion.li>
                    </Link>
                    <Link href="#contact" className='flex items-center gap-1 font-medium text-textDark hover:text-greenText cursor-pointer duration-300 nav-link'onClick={handleScroll}>
                        <motion.li
                        initial={{x: -10, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1}}>Contato</motion.li>
                    </Link>
                </ul>
                <a href="https://drive.google.com/drive/folders/1bHACewH4vL_rzRXD1oY_CllBgBgwb1-g?usp=drive_link" target='_blank'>
                        <motion.button
                        initial={{x: -10, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1}}
                        className='px-4 py-2 rounded-md text-greenText text-[13px] border border-greenText hover:bg-hoverColor duration-300'>
                        CURRICULO
                        </motion.button>
                    </a>
            </div>
            
        </div>    
    </div>
  )
}

export default Navbar