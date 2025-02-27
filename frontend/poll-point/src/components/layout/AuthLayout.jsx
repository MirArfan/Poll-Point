import React from 'react'

import UI_ELEMENT from '../../assets/images/ui_element-4.png'
import CARD_1 from '../../assets/images/auth-card-1.png'
import CARD_2 from '../../assets/images/auth-card-2.png'
import CARD_3 from '../../assets/images/auth-card-3.png'




const AuthLayout = ({children}) => {
  return (
    <div className='flex'>
       <div className='w-screen h-screen md:w-1/2 px-12 pt-8 pb-12'>
       <h2 className='text-lg font-medium text-black'>Poll Point</h2>
           {children}
       </div>
       <div className='hidden md:block w-1/2 h-screen bg-sky-50 bg-auth-bg-img bg-no-repeat bg-center overflow-hidden relative'>
           <img src={UI_ELEMENT} alt="" className='w-[50%] rotate-90 absolute right-0 top-14' />
           <img src={UI_ELEMENT} alt="" className='w-[52%] rotate-180 absolute left-[20%] -bottom-[5%]' />


           <img src={CARD_1} alt="" className='w-64 lg:w-72 absolute top-[8%] left-[10%] shadow-lg shadow-blue-400/15 rounded-xl' />
           <img src={CARD_2} alt="" className='w-64 lg:w-72 absolute top-[34%] left-[54%] shadow-lg shadow-blue-400/15 rounded-xl' />
           <img src={CARD_3} alt="" className='w-64 lg:w-72 absolute top-[62%] left-[10%] shadow-lg shadow-blue-400/15 rounded-xl' />
       </div>
    </div>
  )
}

export default AuthLayout