"use client"

import React from 'react'
import {motion} from "framer-motion"
import {TiArrowForward} from "react-icons/ti"
function Dbc() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.1}} className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl font-title'>Estagiário <span className='text-greenText  text-small tracking-wide'>DBC Company</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>Maio 2022 - Agosto 2022</p>
        <ul className='mt-6 flex flex-col gap-3'>
             <li className='text-base flex gap-2 text-textDark'><span className='text-text-Green'><TiArrowForward/></span> Estágio em desenvolvimento web</li>
             <li className='text-base flex gap-2 text-textDark'><span className='text-text-Green'><TiArrowForward/></span> React, Typescrip, Styled Componentes, Redux, Context, CSS</li>
        </ul>
    </motion.div>
  )
}

export default Dbc