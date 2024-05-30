import React from 'react'
import { close } from '../assets/icons'
import { navLinks } from '../constants/Index'
import Button from './Button'

const SideNav = ({openSideBar, sideBarState}) => {
  return (
    <section className={`bg-white h-full w-[85%] p-4 pl-7 ${sideBarState ? 'animate-displace':'animate-return'}`}>
      <div className='flex justify-end p-1'>
        <button 
          className='transparent hover:bg-gray-300 p-1.5 rounded-full'
          onClick={()=>openSideBar(false)}
        >
          <img
            src={close}
            height={40}
            width={40}
          />
        </button>
      </div>
      <div className='flex flex-col gap-10'>
        <ul className='mt-7 flex flex-col gap-5 pt-3 pb-3'>
          {navLinks.map((link)=>(
            <li key={link.label} className='flex justify-between items-center'>
              <a href={link.href} className='font-montserrat text-black text-2xl font-semibold'>{link.label}</a>
            </li>
          ))}
        </ul>
        <div>
          <p className='font-montserrat leading-normal text-xl text-slate-gray
          font-semibold'>Become a Nike Member for the best products,
          <br/>
          inspiration and stories in sport. <a href="/" className='font-bold text-black'>Learn more</a></p>
          <div className='mt-7 flex justify-start items-start gap-3'>
            <Button
              label='Join Us'
              backgroundColor='bg-black'
              textColor='text-white'
              
            />
            <Button
              label='Sign In'
              backgroundColor='bg-transparent'
              borderColor='border-black'
              textColor='text-black'
            />
          </div>
        </div>
        
      </div>
      
    </section>
  )
}

export default SideNav