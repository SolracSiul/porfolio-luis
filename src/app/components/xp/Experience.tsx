"use client"
import React, { useState } from 'react';
import SectionTitle from '../SectionTitle';
import Dbc from '../works/Dbc';
import Deco from '../works/Deco';

function Experience() {
  const [selectedComponent, setSelectedComponent] = useState('dbc');

  const handleItemClick = (component:any) => {
    setSelectedComponent(component);
  };

  return (
    <section
      id="experience"
      className="max-w-containerSmall mx-auto py-4 lgl:py-12 flex flex-col gap-8 scroll-smooth"
    >
      <SectionTitle titlename="Onde trabalhei" titlen="02"></SectionTitle>
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={() => handleItemClick('dbc')}
            className={`border-1-2 bg-transparent text-textDark border-1-greenText hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium ${
              selectedComponent === 'dbc' ? 'bg-[#112240]' : ''
            }`}
          >
            DBC Company
          </li>
          <li
            onClick={() => handleItemClick('deco')}
            className={`border-1-2 bg-transparent text-textDark border-1-greenText hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium ${
              selectedComponent === 'deco' ? 'bg-[#112240]' : ''
            }`}
          >
            Deco.cx
          </li>
         
        </ul>
        {selectedComponent === 'dbc' && <Dbc />}
        {selectedComponent === 'deco' && <Deco />}
      </div>
    </section>
  );
}

export default Experience;