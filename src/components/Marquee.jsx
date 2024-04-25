import { motion } from 'framer-motion'
import React from 'react'

function Marquee({imageurls,direction}) {
  return (
    <div  className='flex w-full  overflow-hidden' >
      <motion.div  initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40" >
      {imageurls.map((url,index) => <img key={index} src={url} alt="" /> ) }
      </motion.div>
      <motion.div  initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40" >
      {imageurls.map((url,index) => <img key={index} src={url} alt="" /> ) }
      </motion.div>
    </div>
  )
}

export default Marquee