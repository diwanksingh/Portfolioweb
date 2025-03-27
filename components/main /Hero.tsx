
import React from 'react'
import Herocontent from '../sub/Hero-content'

function Hero() {
  return (
    <div 
    id='about-me'
    className='relative flex justify-center flex-col h-full w-full'>
   <video
   autoPlay
   muted
   loop
   className='  absolute  left-0 z-1 w-full h-full object-cover'>
    <source src='/hero.mp4' type='video/mp4'/>
   </video>
   <Herocontent/>
 </div>
  )
}

export default Hero