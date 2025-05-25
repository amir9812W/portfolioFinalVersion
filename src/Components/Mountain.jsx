import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Mountain = () => {

  let ref = useRef()
  let isInView = useInView(ref, {
    margin : '-100px',
    once : false
  })

  console.log(isInView)

  return (
    <div className='w-[100%] h-[100vh] m-0 p-0 relative flex justify-center items-center' ref={ref}>
      <div className='absolute left-0 right-0 top-0 bottom-0 bg-center'
      style={{backgroundImage : 'url("./mountain0.jpg")'}}></div>
      <motion.div  initial = {{opacity : 0}} animate = {isInView ? {opacity : .8, transition : {duration : 4}} : {opacity : 0}} 
      style={{backgroundImage : 'url("./mountain1.jpg")'}}
      className='absolute left-0 right-0 top-0 bottom-0 bg-center '></motion.div>
      <motion.p initial = {{opacity : 0}} animate = {isInView ? {opacity : 1, transition : {duration : 2, delay : .2}} : {opacity : 0}} className='what text-[100px] font-[700] z-10'>What i did</motion.p>
    </div>
  )
}

export default Mountain