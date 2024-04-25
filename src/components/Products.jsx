import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';
import Arqitel from "../assets/videos/Arqitel.webm";
import Cula from "../assets/videos/Cula.mp4";
import TTR from "../assets/videos/TTR.webm";
import yahoo from "../assets/videos/yahoo.webm";
function Products() {
    const productsData = [
        {
          title: "arqitel",
          description:
            "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
          live: true,
          case: false,
        },
        {
          title: "cula",
          description:
            "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
          live: true,
          case: true,
        },
        {
          title: "TTR",
          description:
            "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
          live: true,
          case: true,
        },
        {
          title: "Yahoo!",
          description:
            "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
          live: true,
          case: true,
        },
      ];
      const [position, setposition] = useState(0)
      const mover=(index)=>{
        setposition(23* index)
      }
  return (
    <div className='mt-20 relative ' >
       {productsData.map((product,index)=> ( <Product key={index} mover={mover} count={index} data={product} /> ))}
       <div className='h-full w-full absolute top-0 pointer-events-none ' >
        <motion.div    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }} initial={{y: position, x:"-50%"}} animate={{y: position+"rem"}} className='md:w-[26rem] w-8/12 window absolute left-[45%]  overflow-hidden -translate-x-[50%] h-[23rem]  ' >
          <motion.div    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} animate={{y:-position+"rem"} }  className='w-full h-full  ' > 
          <video autoPlay muted loop src={Arqitel}></video>
          </motion.div>
          <motion.div    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} animate={{y:-position+"rem"} } className='w-full h-full  ' > 
          <video autoPlay muted loop src={Cula}></video>
          </motion.div>
          <motion.div    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} animate={{y:-position+"rem"} } className='w-full h-full  ' >
          <video autoPlay muted loop src={TTR}></video>
             </motion.div>
          <motion.div    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} animate={{y:-position+"rem"} } className='w-full h-full  ' >
          <video autoPlay muted loop src={yahoo}></video> </motion.div>
        </motion.div>
       </div>
    </div>
  )
}

export default Products