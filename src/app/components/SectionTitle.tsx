import React from 'react'

interface Props{
    titlename: string;
    titlen: string;
}

function SectionTitle({titlename, titlen}: Props) {
  return (
    <h2 className='text-2xl font-semibold flex-items-center '>
        <span className='text-base md:text-lg text-greenText mr-2'>{titlen}.</span>{" "} {titlename}
        <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[1px] bg-gray-700 ml-6'></span>
    </h2>
  )
}

export default SectionTitle