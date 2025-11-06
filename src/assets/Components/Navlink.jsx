import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react";
import ElectricBorder from './ElectricBorder'


const Navlink = (props) => {
  const [Hovered, setHovered] = useState(false)
  const hover = () =>{
    setHovered(true)
  }
  const leave = () =>{
    setHovered(false)
  }
  return (
    <div className='relative' onMouseEnter={hover} onMouseLeave={leave}>
      <motion.h1 whileHover={{scale:1.05}} className='cursor-pointer relative z-10 px-3 py-1'>{props.name}</motion.h1>
      <AnimatePresence>
        {Hovered && (
          <motion.div
          className="absolute inset-0 rounded-md "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",}}
          >
            <ElectricBorder/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navlink
