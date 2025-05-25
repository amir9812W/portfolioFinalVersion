import React,{Suspense, useEffect, useRef, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Stage , OrbitControls, PerspectiveCamera} from '@react-three/drei'
import { Me } from './Dunno'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap/gsap-core'
import { SplitText } from 'gsap/all'

const Contact = () => {

  let ref = useRef()
  let isInView = useInView(ref, {
    margin : '-100px'
  })

    gsap.registerPlugin(SplitText);

    const segmenter = new Intl.Segmenter("zh", { granularity: "word" });

    useEffect(() => {
      if(isInView){
        document.fonts.ready.then(() => {
          gsap.set(".split", { opacity: 1 });
          
          const split = SplitText.create(".split", {
            type: "words",
            wordsClass: "word",
            prepareText: (text, el) => {
              return [...segmenter.segment(text)].map(s => s.segment).join(String.fromCharCode(8204))
            },
            wordDelimiter: { delimiter: /\u200c/, replaceWith: "" },
            autoSplit: true,
            onSplit: (self) => {
              return gsap.from(self.words, {
                y: 50,
                opacity: 0,
                stagger: 0.01,
                duration : 1,
                delay : 1
              });
            }
          });
        });
      }else {
        return 
      }
    }, [isInView])
      
      
      
  return (
    <div ref={ref} className='relative contactContainer h-[100vh] w-[100%]  flex' style={{backgroundColor : '#0c0c1d'}}>
      <div className='rContainer flex flex-col w-[40%] items-start ml-[150px] justify-center'>
        <p className='work split text-[80px]/[90px] pb-[50px] font-[700] font-[roboto]  tracking-[4px]'>Let's work <br />together</p>
        <div className='mb-[100px] flex flex-col gap-y-[10px]'>
          <div>
            <p className='split text-[24px] font-[700]'>Email</p>
            <p className='split text-[14px] font-[600]'>hezarehamir8@gmail.com</p>
          </div>
          <div>
            <p className='split text-[24px] font-[700]'>Adress</p>
            <p className='split text-[14px] font-[600]'>i live in iran dude help me!</p>
          </div>
          <div>
            <p className='split text-[24px] font-[700]'>Phone number</p>
            <p className='split text-[14px] font-[600]'>+98 903 307 8480</p>
          </div>
        </div>
        <div className='flex items-center gap-x-[10px] pb-[30px]'>
          <p className='split'>This website is powered by </p>
          <motion.div initial = {{opacity : 0}} animate = {isInView ? {opacity : 1, transition : {duration : 1 , delay : 2}} : {opacity : 0}} className='flex items-center gap-x-[15px] '>
            <img src="react.png" alt="react" className='w-[80px] h-[50px] m-0'/>
            <img src="tail.png" alt="tail" className='w-[60px] h-[30px] m-0' />
            <img src="three.png" alt="tail" className='w-[40px] h-[40px] m-0' />
          </motion.div>
        </div>
        <motion.div initial = {{opacity : 0}} animate = {isInView ? {opacity : 1, transition : {duration : 1 , delay : 2}} : {opacity : 0}} className='flex items-center gap-x-[20px]'>
            <a href='https://drive.google.com/file/d/1oOIULxLCYT3Rbpynj0wYIoQuMM0TK6_l/view?usp=sharing' target='blank' className=' flex items-center justify-center bg-blue-400 p-[10px] w-[140px] rounded-full split'>My Resume</a>
            <a href='https://drive.google.com/file/d/1s2gkvlgVcc_c7aCVVXncvS3WqL-_VeeP/view?usp=sharing' target='blank' className='flex items-center justify-center bg-blue-400 p-[10px] w-[140px] rounded-full split'>My Cover Letter</a>
        </motion.div>
        <p className='font-[300] pt-[40px] split'>© Copy Right all rights reserved 2025</p>
      </div>
      <div className='w-[60%] h-[100%] contactRsection'>
        <Canvas>
          <Suspense fallback = 'loading...'>
            <Stage environment={'city'} intensity={1}>
              <Me /> 
            </Stage>
            <OrbitControls autoRotate = {true} enableZoom = {false} reverseHorizontalOrbit = {true}/>
            <PerspectiveCamera makeDefault position={[100,140,200]} zoom={0.8}/>
          </Suspense>
        </Canvas>  
      </div>
    </div>
  )
}

export default Contact