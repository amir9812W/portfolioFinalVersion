import { useRef, useState } from 'react'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Portfolio from './Components/Portfolio'
import Services from './Components/ServicesSec/Services'
import Mountain from './Components/Mountain'
import { motion , useScroll,useSpring, useTransform} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Inspire from './Components/inspire/Inspire'

function App() {

  let variants = {
    initial : {
      opacity : 0
    },
    animate : {
      opacity : 1,
      transition : {
        duration : 1
      }
    }
  }

  const myRef = useRef()
  
  let {scrollYProgress} = useScroll({target : myRef, offset : ['end end', 'start start']})
  let scaleX = useSpring(scrollYProgress, {
    stiffness : 100,
    damping : 20
  })
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger when 50% visible
    triggerOnce: false
  });
  const backgroundcolor = useTransform(
    scrollYProgress,
    [0, 1], // Input range (scroll progress)
    ['#F67CD0', '#FAFAB7'] // Output range [startColor, endColor]
  );

  return (
      <motion.div
      variants={variants}
      initial = 'initial'
      animate = "animate"
      className='flex flex-col w-[100%] h-[100%] relative' ref={myRef}>
      <motion.div
        style={{scaleX : scaleX, backgroundColor : backgroundcolor
        }}
        className='sticky z-[10000] w-[100%] top-0 h-[10px] left-0 right-0 '
      ></motion.div>
          <section id='#Home'>
            <Hero/>
          </section>
          <section id='#Services'>
            <Services/>
          </section>
        <section id='#Portfolio'>
          <Mountain />
        </section>
        <section>
          <Portfolio />
        </section>
        <section>
          <Inspire />
        </section>
        <section id='#Contact'>
          <Contact />
        </section>
      </motion.div>
  )
}

export default App
