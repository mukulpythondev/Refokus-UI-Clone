import { motion } from 'framer-motion'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function Card({width,paragraph,hover="false"}) {
  return (
    <motion.div whileHover={ {backgroundColor: hover==="true" && "#7443ff", padding:"25px"}} className={`w-1/2 bg-zinc-800 p-5 flex flex-col  justify-between min-h-[27rem]  rounded-xl  ${width}`} >
        <div className='w-full  flex flex-col gap-5 ' >
            <div className='flex items-center justify-between' >
              <h3 className=' font-medium' > Heading </h3>
             <FaArrowRightLong className='font-sm' />
            </div>
            <h1 className='text-3xl font-semibold' >{paragraph? "Let's get it, together.": "Insights and behind the scenes" } </h1>
        </div>
        <div className='down   ' >
             {paragraph? <p className='text-sm text-zinc-500' > Explore what drives our team</p> : <div className='flex-col gap-5 flex' > <h1 className='text-7xl tracking-tight font-semibold ' >Start a Project</h1>
             <button className='rounded-full w-fit py-2 px-4 text-lg border-2 border-zinc-100 '  >Contact Us</button></div> }
        </div>
    </motion.div>
  )
}

export default Card