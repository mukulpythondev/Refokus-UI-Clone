import React from 'react'
import Button from './Button'

function Product({data,mover,count}) {
  return (
    <div onMouseEnter={()=>mover(count) } className='w-full py-5 md:py-20  h-[23rem] ' >
        <div className='max-w-screen-xl mx-auto flex  md:flex-row flex-col items-center md:px-40 px-3 gap-14 md:gap-0 justify-between ' > 
             <h1 className='text-6xl capitalize font-medium' > {data.title} </h1>
             <div className='dets w-full md:w-1/3' >
                <p className='mb-5' > {data.description} </p>
                 <div className='flex gap-5' >
                 { data.live && <Button/> }
                  { data.case && <Button title='Case Study' /> }
                 </div>
             </div>
         </div>
    </div>
  )
}

export default Product