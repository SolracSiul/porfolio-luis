import React from 'react'
import { FaRegFolder} from "react-icons/fa"
import { RxOpenInNewWindow} from "react-icons/rx"

export interface CardProps{
    link: string;
    title: string;
    description: string;
    listItem: string [];
}
function ProjectCard({link, title, description, listItem}: CardProps) {
  return (
    <a href={link} target='_blank'>
        <div className='w-full h-80 rounded-lg bg-[#112240] p-6 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
            <div className='flex justify-between items-center'>
                <FaRegFolder className="text-4xl text-textGreen"/>
                <RxOpenInNewWindow className="text-4xl hover:text-textGreen"/>
            </div>
            <div>
                <h2 className='text-xl font-title font-semibold tracking-wide group-hover:text-greenText'>{title}</h2>
                <p className='text-sm mt-3'>
                    {description}
                </p>
            </div>
            <ul className='text-xs mdl:text-sm text-textDark flex items-center gap-2 flex-wrap'>
                {listItem && listItem.map((item, i) =>(
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    </a>
  )
}

export default ProjectCard