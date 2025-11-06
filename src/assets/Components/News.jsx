import React from 'react'
import Card from './Card'
import { motion } from 'motion/react'

const News = () => {
  return (
    <div className='p-10'>
      <motion.h1
      initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut"
        }}
        viewport={{ once: true, amount: 0.2 }}
       className='text-4xl font-extrabold'>THE LATEST</motion.h1>
      <motion.div
      initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut"
        }}
        viewport={{ once: true, amount: 0.2 }}
      className="card flex overflow-scroll hide-scrollbar">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </motion.div>
    </div>
  )
}

export default News
