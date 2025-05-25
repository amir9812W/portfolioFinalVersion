import React, { useEffect, useRef, useState } from 'react';
import data1 from './PoData';
import { animate, motion , useInView} from 'framer-motion';
import { transition } from 'three/examples/jsm/tsl/display/TransitionNode.js';

const SinglePortfolio = ({ image, bg, title, desc , link, git, state}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='h-[100vh] flex flex-col justify-center relative items-center p-6'
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className='absolute  opacity-[0.3] left-0 right-0 bottom-0 top-0 bg-center bg-conatin z-[0] blur-xl'
      ></div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='rounded-4xl overflow-hidden z-[1] shadow-[0px_0px_1000px_rgba(255,255,255,1)] mb-4'
      >
        <img
          src={image}
          alt="project"
          className='w-[600px]  object-cover z-[1] transition-transform duration-500 hover:scale-110'
        />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className='mt-[40px] z-[1] font-[700] text-[40px] text-white'
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className='description mt-2 w-[600px] text-balance text-[20px] font-[400] text-center z-[1] text-white text-sm'
      >
        {desc}
      </motion.p>
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: false }}
       transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      className='buttonSec flex w-[550px] items-center justify-center gap-x-[40px] mt-[30px] z-[1000]'>
        <a href={`${link}`} target='_blank' className='w-[200px] flex justify-center items-center text-[18px] font-[600] rounded-2xl h-[50px] bg-cyan-500 hover:bg-cyan-300 transition-colors duration-500'>{state ? 'download the exe file' : 'Website link'}</a>
        <a href={`${git}`} target='_blank' className='w-[200px] flex justify-center items-center text-[18px] font-[600] rounded-2xl hover:bg-cyan-300 h-[50px] bg-cyan-500 transition-colors duration-500'>Github</a>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {

  let ref = useRef()
  let isInview = useInView(ref , {
    margin : '100px',
    once : true
  })

  return (
    <motion.div className='h-[100%] w-[100%] relative overflow-y-auto no-scrollbar'>
    {data1.map((data, index) => (
      <SinglePortfolio 
        key={index} 
        link={data.link} 
        git={data.github} 
        bg={data.background} 
        image={data.image} 
        desc={data.describe} 
        title={data.projectName} 
        state = {data.state}
      />
    ))}
    <div className='containerStats h-[100vh] flex flex-col justify-center items-center gap-y-[40px]' ref={ref}>
      <div className='imgCon flex gap-x-[30px] relative'>
        <motion.a className='absolute top-[-40px]' animate = {isInview ? {opacity : 1, transition : {duration : 2, delay : 2}} : {opacity : 0}} href="https://www.duolingo.com/profile/hezareh" target='_blank'>Link to my duolingo profile</motion.a>
        <motion.a initial = {{x : -700, scale : 0}} animate = {isInview ? {x : 0, scale : 1} : {x : -700 , scale : 0}} transition={{duration : 2, ease : "easeOut"}} href = {'https://www.duolingo.com/profile/hezareh'} target='_blank' className='bg-center bg-contain rounded-2xl w-[300px] h-[300px]
        transition-all duration-100' style={{backgroundImage : 'url(./deutsch.png)'}}>
        </motion.a>
        <motion.a href = {'https://www.duolingo.com/profile/hezareh'} initial = {{x : 700, scale : 0}} animate = {isInview ? {x : 0, scale : 1} : {x : 700 , scale : 0}} 
        transition={{duration : 2, ease : "easeOut"}}  target='_blank' style={{backgroundImage : 'url(./englisch.png)'}} className='bg-center bg-contain rounded-2xl w-[300px] h-[300px]
        transition-all duration-100 '>
        </motion.a>
      </div>
      <motion.div initial = {{y : 700}} animate = {isInview ? {y : 0, transition : {duration : 2}} : {y : 0}} className="monkey w-[800px] relative flex justify-center gap-x-[15%]  rounded-2xl pl-[40px] pr-[40px] pt-[50px] pb-[50px]">
          <p className='absolute top-[14px] left-[40px] font-[500]'>My Monkeytype status</p>
          <a href="https://monkeytype.com/profile/dunno-really112" target='_blank' className='absolute bottom-[20px] left-[40px] hover:opacity-50 transition-opacity duration-100'>link to my profile</a>
          <div className="stats relative">
          <div className="w-[100px] h-[100%] flex flex-col items-center justify-center ">
              <div className="opacity-40 font-[300]">10 words</div>
              <div className="text-[50px] font-[500]">178</div>
              <div className="text-[30px] opacity-75">100%</div>
            </div>
            <div className="opacity-0 absolute left-[0px] right-0 bg-[#191919] flex items-center flex-col top-[0px] transition-opacity duration-75 hover:opacity-100">
              <div>10 words</div>
              <div>177.99 wpm</div>
              <div>177.99 raw</div>
              <div>100.00% acc</div>
              <div>70.88% con</div>
              <div>12 May 2025</div>
            </div>
          </div>
          
          <div className="stats relative">
          <div className="w-[100px] h-[100%] flex flex-col items-center justify-center ">
              <div className="opacity-40 font-[300]">25 words</div>
              <div className="text-[50px] font-[500]">144</div>
              <div className="text-[30px] opacity-75">96%</div>
            </div>
            <div className="opacity-0 absolute left-[0px] right-0 bg-[#191919] flex items-center flex-col top-[0px] transition-opacity duration-75 hover:opacity-100">
              <div>25 words</div>
              <div>144.22 wpm</div>
              <div>152.29 raw</div>
              <div>96.24% acc</div>
              <div>75.88% con</div>
              <div>22 apr 2025</div>
            </div>
          </div>
          
          <div className="stats relative">
          <div className="w-[100px] h-[100%] flex flex-col items-center justify-center ">
              <div className="opacity-40 font-[300]">50 words</div>
              <div className="text-[50px] font-[500]">138</div>
              <div className="text-[30px] opacity-75">98%</div>
            </div>
            <div className="opacity-0 absolute left-[0px] right-0 bg-[#191919] flex items-center flex-col top-[0px] transition-opacity duration-75 hover:opacity-100">
              <div>50 words</div>
              <div>138.63 wpm</div>
              <div>140.12 raw</div>
              <div>98.13% acc</div>
              <div>76.88% con</div>
              <div>24 apr 2025</div>
            </div>
          </div>
          
          <div className="stats relative">
          <div className="w-[100px] h-[100%] flex flex-col items-center justify-center ">
              <div className="opacity-40 font-[300]">100 words</div>
              <div className="text-[50px] font-[500]">127</div>
              <div className="text-[30px] opacity-75">94%</div>
            </div>
            <div className="opacity-0 absolute left-[0px] right-0 bg-[#191919] flex items-center flex-col top-[0px] transition-opacity duration-75 hover:opacity-100">
              <div>100 words</div>
              <div>127.55 wpm</div>
              <div>130.12 raw</div>
              <div>94.95% acc</div>
              <div>89.12% con</div>
              <div>14 apr 2025</div>
            </div>
          </div>
      </motion.div>
    </div>
   </motion.div>
  );
};

export default Portfolio;