import React from 'react'
import logo from '../assets/logo.svg'
import Button from './Button'
function Navbar() {
  return (
    <div className='md:max-w-screen-xl    md:mx-auto justify-between flex px-1 py-4 md:py-4 md:px-3 border-b-[1px] border-zinc-700  ' >
          <div className='flex gap-4 md:gap-20  items-center' >
          <img src={logo} alt="" />
            <div className="links flex gap-2 md:gap-14 ">
                {["Home", "Work" ,"", "News"].map((elem,index) => elem.length===0? <span key={index}  className='text-lg font-light text-zinc-400' > |</span> : (<a key={index} className='text-sm items-center flex gap-1' href=""> {index===0 &&  <span style={{boxShadow:"0 0 0.45em  #00F19"}}  className='bg-green-500 inline-block h-1.5 w-1.5 rounded-full' ></span>} {elem} </a> ) )}
            </div>
          </div>
          <Button/>
    </div>
  )
}

export default Navbar