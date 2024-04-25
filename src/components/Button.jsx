import React from 'react';
import { MdSubdirectoryArrowRight } from 'react-icons/md';

function Button({ title = 'Get Started' }) {
  return (
    <div className='md:w-40 w-24 md:text-lg text-xs p-1 bg-zinc-100 text-black rounded-full md:py-2 md:px-4 flex items-center justify-between'>
      <span>{title}</span>
      <MdSubdirectoryArrowRight />
    </div>
  );
}

export default Button;
