"use client"
import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
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

function Banner() {
  return (
    <section id="home" className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-14'>
        <h3 className='text-lg font-normal tracking-wide text-greenText'>
          Olá, meu nome é 
        </h3>
        <motion.h3 initial={{y: 10, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.6}}
        className='text-[32px] font-bold tracking-wide '>Luis Carlos. 
        <motion.h1 initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration: 0.5, delay:0}}
        className='text-xl text-justify lgl:text-2xl font-semibold flex flex-col text-textDark'>desenvolvedor</motion.h1> </motion.h3>
        <motion.p className='text-base md:max-w-[650px] text-textDark font-medium' initial={{y:10, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: 0.5, delay: 0.8}}>{" "}Profissional com dois anos de experiência em desenvolvimento web, com foco no desenvolvimento de aplicações fullstack. Em constante busca por novas tecnologias e construção de projetos inovadores.{" "}
        
        </motion.p>
        <Link href="#projects" onClick={handleScroll}>
          <motion.a 
          initial={{y:10, opacity:0}}
          animate={{y:0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.9}}
          className='w-52 h-14 text-sm font-title border p-4 border-greenText rounded-md text-greenText tracking-wide hover:bg-hoverColor duration-300 nav-link'>Veja meus projetos </motion.a>
        </Link>
    </section>
  )
}

export default Banner