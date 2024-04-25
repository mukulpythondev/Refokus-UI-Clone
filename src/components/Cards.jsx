import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full mb-10  ' >
      <div className='max-w-screen-lg px-3  mx-auto md:flex-row flex-col  flex gap-2  ' >
      <Card width={'w-full  md:basis-4/12'}  paragraph={true}   />
      <Card width={' w-full md:basis-8/12'}   paragraph={false} hover={"true"} />
      </div>
    </div>
  )
}

export default Cards