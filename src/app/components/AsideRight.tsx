import React from 'react'

function AsideRight() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'>
        <a href='mailto:crluis@gmail.com' target='_blank'>
            <p className='text-md rotate-90 w-72 tracking-widest text-greenText'>send me email</p>
        </a>
        <span className='w-[2px] h-32 bg-textDark  inline-flex'></span>
    </div>
  )
}

export default AsideRight