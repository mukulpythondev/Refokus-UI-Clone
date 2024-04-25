import React from 'react'

function Stripe({value}) {
  return (
    <div className=' md:w-2/12 gap-2    px-2 md:py-5 py-2 border-t-[1.2px] border-r-[1.2px] flex md:flex-row flex-col justify-between   border-b-[1.2px] border-zinc-600' >
        <img src={value.url} alt="" />
        <h3 className='font-semibold md:text-lg' >{value.number}</h3>
    </div>
  )
}

export default Stripe