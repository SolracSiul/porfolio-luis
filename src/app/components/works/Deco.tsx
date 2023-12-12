"use client"
import React from 'react'
import {motion} from "framer-motion"
import {TiArrowForward} from "react-icons/ti"
function Deco() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.1}} className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl font-title'>Freelancer <span className='text-greenText tracking-wide'>Deco.cx</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>Abril 2023 - Setembro 2023</p>
        <ul className='mt-6 flex flex-col gap-3'>
             <li className='text-base flex gap-2 text-textDark'><span className='text-text-Green'><TiArrowForward/></span>Freelancer em desenvolvimento web SPA/E-commerce</li>
             <li className='text-base flex gap-2 text-textDark'><span className='text-text-Green'><TiArrowForward/></span>Foco em alto desempenho SEO</li>
            <li className='text-base flex gap-2 text-textDark'><span className='text-text-Green'><TiArrowForward/></span> Deno, Fresh, Preact, Tailwind CSS </li>
        </ul>
    </motion.div>
  )
}

export default Deco