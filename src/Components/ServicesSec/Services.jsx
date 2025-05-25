import React , {useEffect, useRef, useState} from 'react'
import { animate , motion , useInView} from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls , Stage, PerspectiveCamera} from '@react-three/drei'
import { Model } from './Beach'
import { Dunno } from './objects'
import { Suspense } from 'react'
import { LowPol } from './Lowpollap1'

const Services = () => {

  let variants = {
    initial : {
      y : -200
    },
    animate : {
      y : 0,
      transition :{
        duration : 1,

      } 
    }
  }
  let variants2 = {
    initial : {
      x : -100,
      opacity : 0.2
    },
    animate : {
      x : 0,
      opacity : 1,
      transition :{
        duration : .5,
        staggerChildren : .1
      } 
    }
  }

  const [current, setCurrent] = useState(1)

  const ref = useRef()
  let isInView = useInView(ref, {
    margin : '-100px'
  })


  return (
    <div className='sContainer h-[100vh] w-[100%] flex ' ref={ref}>
      <div className='sLeftSec w-[70%] pb-[100px] pl-[150px] h-[100vh] flex items-start  justify-center flex-col gap-y-[60px]'>
        <motion.div variants={variants} animate = {isInView ? 'animate' : "initial"}>
          <p className='Help text-[80px] font-[700] ] text-nowrap transition-colors duration-300 hover:text-yellow-300'>How do i Help?</p>
        </motion.div>
        <motion.div variants={variants2} animate = {isInView ? 'animate' : 'initial'} className='mentionCon flex flex-col gap-y-[20px] w-[60%]'>
          <motion.div onClick={() => {setCurrent(1)}}  variants={variants2}  className='mentions cursor-pointer transition-colors duration-150 flex gap-x-[30px] p-[20px] rounded-2xl' style={{backgroundColor : 'rgba(255,255,255,0.2)'}}>
            <img src="programming.png" alt="git" className='w-[70px] h-[70px] self-center'/>
            <div className='flex flex-col justify-center  gap-y-[4px]'>
              <p className='text-[20px] font-[700]'>Web Development</p>
              <p className='text-[14px] font-[300]'>6 Main projects and inifite amount of side projects</p>
            </div>
          </motion.div>
          <motion.div onClick={() => {setCurrent(2)}}  variants={variants2} className='mentions cursor-pointer transition-colors duration-150 flex gap-x-[30px] p-[20px] rounded-2xl' style={{backgroundColor : 'rgba(255,255,255,0.2)'}}>
            <img src="cube.png" alt="git" className='w-[70px] h-[70px] self-center'/>
            <div className='flex flex-col justify-center gap-y-[4px]'>
              <p className='text-[20px] font-[700]'>3D Design</p>
              <p className='text-[14px] font-[300]'>I do 3D modeling or animation in my free time</p>
            </div>
          </motion.div>
          <motion.div onClick={() => {setCurrent(3)}} variants={variants2}  className='mentions cursor-pointer transition-colors duration-150 flex gap-x-[30px] p-[20px] 
        rounded-2xl' style={{backgroundColor : 'rgba(255,255,255,0.2)'}}>
            <img src="branding.png" alt="git" className='w-[70px] h-[70px] self-center'/>
            <div className='flex flex-col justify-center gap-y-[4px]'>
              <p className='text-[20px] font-[700]'>Branding</p>
              <p className='text-[14px] font-[300]'>I focus on helping your brand grow
              and move forward</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className='sRightSec flex justify-center items-center w-[60%] h-[100vh]'>
        <div className='w-[100%] h-[90%]'>
        <Canvas>
          <Suspense fallback = 'Loading ...'>
          <Stage environment={'city'} intensity={.5}>
            {current === 1 && <LowPol />}
            {current === 2 && <Model />}
            {current === 3 && <Dunno />}
          </Stage>
          <OrbitControls enableZoom = {true}  autoRotate = {true} autoRotateSpeed={1}/>
          <PerspectiveCamera position={[0, 0 , 0]} zoom={.8} makeDefault = {true}/>
          </Suspense>
        </Canvas>
        </div>
      </div>
    </div>
  )
}

export default Services