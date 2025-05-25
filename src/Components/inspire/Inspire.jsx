import React , {useRef} from 'react'
import { vidData } from './data';
import {motion , useInView} from 'framer-motion'



const variants = {
  initial : {
    opacity : 1,
    zIndex : 10
  },
  animate : {
    opacity : 0,
    display : 'none',
    transition : {
      duration : 0.8,
      delay : 4,
    }
  }
}

const SingleVideo = ({image, description, link}) => {

  console.log(image)

  return (
    <div className={`w-[400px] h-[200px] relative bg-cover bg-center rounded-2xl`} style={{backgroundImage: `url(${image})`}}>
      <a href={`${link}`} target='_blank' className='rounded-2xl absolute transition-all duration-100 opacity-0 hover:opacity-100 flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 m-auto' 
      style={{backgroundColor : 'rgba(0, 0, 0, 0.5)'}}>
        <p className='absolute font-[700] top-[20px] text-[14px] text-nowrap'>{description}</p>
        <img src="./youtube.png" alt="you" className='w-[70px]'/>
      </a>
    </div>                                                                  
  )
};



const Inspire = () => {

  let ref = useRef()

  let isInView = useInView(ref, {
    margin : '-100px',
    once : true
  })

  return (
    <div ref = {ref} className='inspireContainer w-[100%] h-[100vh] relative flex justify-center items-center'>
      <motion.div className='absolute flex justify-center items-center left-0 right-0 bottom-0  top-0 m-auto' id = 'modal' variants={variants} initial = {'initial'} 
      animate = {isInView ? 'animate' : 'intitial'} style={{backgroundColor : 'rgba(0, 0, 0, 0.8)'}}>
        <h1 className='modal font-[700]'>Videos that inspired me to be a better developer</h1>
      </motion.div>
      <div  className='inspireItems grid grid-cols-2 gap-[40px]'>
        {vidData.map((item) => {
          return <SingleVideo key={item.id}  image = {item.image} description={item.describtion} link = {item.link}/>        
        })}
      </div>
    </div>
  )
}

export default Inspire