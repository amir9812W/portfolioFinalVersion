import React, { useState , useEffect} from 'react'
import { TypeAnimation } from 'react-type-animation';
import {  motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Suspense } from 'react';
import { Resize } from '@react-three/drei';



const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Set initial width on mount
    handleResize();

    // Add event listeners
    window.addEventListener('resize', handleResize);

    // Cleanup: Remove event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return width;
};




const Hero = () => {

  let width = useWindowWidth();

  let variants1 = {
    initial : {
      y : -100
    },
    animate : {
      y : 0,
      transition : {
        duration : .8,
        staggerChildren : .3
      }
    }
  }

  let variants2 = {
    initial : {
      x : -10,
      opacity : 0
    },
    animate : {
      x : 0,
      opacity : 1,
      transition : {
        duration : .8,
        staggerChildren : .3
      }
    }
  }

  return (
    <motion.div
    className='nigga h-[100vh] w-[100%] flex relative'>
      {/* left section */}
      <div className='HeroLeftSec w-[50%] flex flex-col justify-between  ml-[100px]'>
        <motion.div
        variants={variants1}
        initial = 'initial'
        animate = 'animate'
        className='HeySec mt-[40px] text-nowrap z-[8]'>
          <motion.p variants={variants1} className='text-pink-300 text-[90px] font-[700]'>Hey There,</motion.p>
          <motion.p variants={variants1} className='text-white text-[80px] font-[700]'>I'm Amir!</motion.p>
        </motion.div>
        <motion.div
        variants={variants2}
        initial='initial'
        animate = 'animate'
        className='textCenter flex flex-col gap-y-[10px]'>
          <motion.p variants={variants2} className='p1 text-[40px] font-[500] text-nowrap'>Software Engineer</motion.p>
          <motion.p variants={variants2} className='p2 max-w-[250px] text-[14px]'>My Goal is to Master both FrontEnd and BackEnd and Gain experie.</motion.p>
        </motion.div>
        <motion.div
        animate = {{
          y : [0,20,0],
          opacity : [0, 1, 0]
        }}
        transition={{
          duration : 2,
          repeat : Infinity,
          ease : 'easeInOut'
        }}
        className='mb-[100px]'>
          <img src="mouse.png" alt="mouse" />
        </motion.div>
      </div>
      {/* right section */}
      <motion.div 
      className='HeroRightSec flex flex-col justify-between mr-[100px]  items-end w-[50%] z-[21]'>
        <motion.div
        initial = {{y : -100}}
        animate = {{y : 0, transition : {duration : 1}}}
        style={{backgroundColor : 'rgba(255,255,255,0.4)'}} className='rounded-br-[10px] w-[60px] relative flex justify-center h-[150px] bg-white'>
          <a href="https://github.com/amir9812W" target='_blank'>
            <img src="github.png" alt="git" className='w-[50px] h-[50px] mt-[40px]'/>
          </a>
          <motion.a
          href='https://github.com/amir9812W'
          target='_blank'
          initial = {{x : -100}}
          animate = {{x : 0, transition : {duration : 1, delay : .2}}}
          className='bg-red-400 w-[100px] h-[30px] flex justify-center items-center absolute text-[14px] rounded-br-[10px]
          bottom-[-30px] right-0  left-[-20px] m-auto rotate-90 font-[600]'>
            Follow me!
          </motion.a>
        </motion.div>
        <div className='comment mt-[-100px] flex items-end gap-x-[12px] '>
          <p className='bg-white rounded-tl-[40px] rounded-bl-[40px]  flex items-center justify-center rounded-tr-[40px] w-[400px] h-[100px] p-[10px]  text-black '>
          <TypeAnimation className='digger'
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'My name is Amir',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Im actually 21 years old',
              1000,
              'and Im trying to apply for an ausblidung',
              1000,
              'in Fachrichtung "Anwedungsentwickler"',
              1000
            ]}
            wrapper="span"
            speed={70}      
            repeat={Infinity}
          / >
          </p>
          <div className='md:w-[50px] md:h-[50px] bg-white w-[60px] flex justify-center items-center h-[60px] rounded-full'>
            <img src="me.png" alt="mewe" className='w-[50px] h-[50px]'/>
          </div>
        </div>
        <motion.div
         animate = {{
          rotateZ : 360,
          transition : {
            duration : 10,
            repeat : Infinity,
            ease : 'easeInOut'
          }
         }}
         className='svgNigga mb-[100px]'>
        <svg 
          className="bg-[#FF89B4] rounded-full"
          width="160" 
          height="160" 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            id="circlePath"
            d="M50,10 a40,40 0 1,0 0,80 a40,40 0 1,0 0,-80" 
            fill="#FF89B4" 
          />
          <text>
            <textPath  href="#circlePath" startOffset="20%"  style={{marginBottom : '40px'}}>
              hello world
            </textPath>
          </text>
          <text>
            <textPath  href="#circlePath" startOffset="70%" >
              hello world
            </textPath>
          </text>
        </svg>
        </motion.div>
      </motion.div>
      
      {/* middle section */}
      <div className='absolute left-0 right-0 bottom-0 m-auto flex justify-center'>
          <img src="me.png" alt="whom" className='meBitch z-[12] '/>
          <motion.div
          animate = {{opacity : [0 , 1], transition : {delay : .5 , duration : 1}}}
          style={{ width: "100vw", height: "100vh" }}
          className='canva absolute w-[100%] h-[100vh] top-[-400px]  right-0 bottom-0 z-[7]' >
            <Suspense fallback = 'isloading ...'>
              <Canvas>
              <Resize />
                <mesh>
                  <Sphere scale={width / 1000 + 0.8}>
                    <MeshDistortMaterial color='pink' attach='material' speed={2}/>
                  </Sphere>
                  <directionalLight position={[1,0,1]} intensity={1} color='pink'/>
                  <ambientLight intensity={1.2} color="pink"/>
                </mesh>
              </Canvas>
            </Suspense>
          </motion.div>
      </div>
      {/* background text*/}
      <div className='absolute left-[-200px]  overflow-x-hidden right-[-200px] bottom-[-100px] flex items-end m-auto h-[50vh] z-[6]'>
         <motion.p 
         initial = {{x : '-10%'}}
         animate = {{x : '10%', transition : {duration : 100, repeat : Infinity, repeatType : "reverse"}}}
         className='textme text-[400px] text-nowrap opacity-40 font-[700] tracking-[-1px]'>FRONT END BACK END</motion.p>
      </div>
    </motion.div>
  )
}

export default Hero