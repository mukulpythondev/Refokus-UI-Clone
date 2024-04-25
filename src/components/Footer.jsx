import React from 'react'

function Footer() {
  return (
    <div className='w-full py-10' >
        <div className='max-w-screen-lg gap-16 mx-auto p-5 flex md:flex-row flex-col ' >
          <div className='left basis-1/2 flex flex-row md:flex-col gap-12 justify-between' >
            <h1 className='text-[10vw] font-semibold tracking-tight leading-none' >refokus.</h1>
            <div className="leftbottom flex w-1/2 justify-evenly ">
                <h3 className='text-zinc-400' >Privacy Policy</h3>
                <h3 className='text-zinc-400' >Cookie Policy</h3>
                <h3></h3>
            </div>
          </div>
          <div className="right flex gap-9 ">
            <div className="social flex flex-col gap-2 ">
                <h3 className='text-zinc-400 mb-6'>Socials</h3>
                {["instagram", "Linkedin","Twitter(x?)"].map((item,index)=>  <h3 key={index} className='text-zinc-400'>{item}</h3>)  }
            </div>
             <div className="sitemap flex flex-col gap-2">
                <h3 className='text-zinc-400 mb-6' >Sitemap</h3>
                {["Home", "Work","Careers", "Contact"].map((item,index)=>  <h3 key={index} >{item}</h3>)  }
             </div>
             <div className='flex flex-col items-end gap-4 w-6/12  ' >
                <h4 className='text-lg  text-right  mt-14' >
                    Refokus is pioneering digital agency driven by design and empowered by technology.
                </h4>
                <img className=' w-full md:w-10/12'
              src="https://assets-global.website-files.com/628ea50806d12b349bebc1ea/6482428d42dc637abdafb81a_Blue%20Label%201.png"
              alt=""
            />
             </div>
          </div>
        </div>

    </div>
  )
}

export default Footer