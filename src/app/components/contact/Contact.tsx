import React from 'react'

function Contact() {
  return (
    <section id='contact' 
    className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
        <p className='font-title text-lg text-greenText font-semibold flex items-center tracking-wide'> 
        Qual será o próximo?
        </p>
        <h2 className='font-title text-5xl font-semibold'>Fale comigo</h2>
        <a href="mailto:crluis521@gmail.com">
            <button className='w-40 h-14 border border-greenText mt-6 font-title text-sm text-greenText tracking-wider rounded-md hover:bg-hoverColor duration-300'>e-mail</button>
        </a>
    </section>
  )
}

export default Contact