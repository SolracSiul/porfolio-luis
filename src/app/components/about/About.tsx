"use client"
import React from 'react'
import SectionTitle from '../SectionTitle'
import { AiFillThunderbolt, AiFillCode } from 'react-icons/ai';
import { IoLogoJavascript, IoLogoNodejs, IoLogoDocker, } from 'react-icons/io5';
import { FaDatabase } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';
import { FaGithub } from "react-icons/fa";


function About() {
  return (
    <section
    id='about'
    className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
        <SectionTitle titlename="About me" titlen="01"/>
        <div className="flex flex-col lgl:flex-row gap-16">
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 text-justify'>
                <p>
                Atualmente, sou estudante do 4º período do curso de Sistemas de Informação na Unifacisa, já tendo concluido disciplinas de gerenciamento de projeto, desenvolvimento web, mobile e banco de dados. Tenho experiência profissional em desenvolvimento web, criando SPAs, Landing Pages e E-commerce com React, Typescript, Next.js e Tailwind CSS. Além disso, desenvolvi projetos utilizando Java 8+, Spring Boot, React Native e Node js. Possuo domínio em bancos de dados relacionais e não-relacionais, bem como em versionamento com Git. Também possuo a certificação SCRUM Fundamentals                </p>
                <p>Principais linguens e ferramentas: </p>
                <ul className='max-w-[450px] font-title grid grid-cols-2 gap-2 mt-6'>
                        <li className='flex items-center gap-2 text-[#8eb985]'> <SiSpring className='text-textGreen' /> Java</li>
                        <li className='flex items-center gap-2 text-[#8eb985]'> <IoLogoJavascript className='text-textGreen' /> JavaScript</li>
                        <li className='flex items-center gap-2 text-[#8eb985]'> <SiSpring className='text-textGreen' /> Spring Boot</li>
                        <li className='flex items-center gap-2 text-[#8eb985]'> <IoLogoJavascript className='text-textGreen' /> TypeScript</li>
                        <li className='flex items-center gap-2 text-[#8eb985]'> <FaDatabase className='text-textGreen' /> MongoDB</li>
                        <li className='flex items-center gap-2 text-[#8eb985]'> <IoLogoNodejs className='text-textGreen' /> Node.js</li>
                        <li className='flex items-center gap-2 text-[#8eb985]'> <IoLogoDocker className='text-textGreen' /> Docker</li>
                        <li className='flex items-center gap-2 text-[#8eb985]'> <FaDatabase className='text-textGreen' /> MySQL</li>
                        <li className='flex items-center gap-2 text-[#8eb985]'> <FaGithub className='text-textGreen' /> Git</li>
                        </ul>
            </div>
            <div>

            </div>
        </div>
    </section>
  )
}

export default About