import React from 'react'
import { motion } from 'framer-motion'
import Me from "../media/me.jpg"

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <motion.div
        className='w-full md:w-2/6 flex items-center justify-center md:justify-start'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <img
          src={Me}
          alt="me"
          className='w-[200px] max-h-[200px] md:w-[350px] md:max-h-[350px] object-cover rounded-full object-center'
        />
      </motion.div>

      <motion.div
        className='w-full md:w-4/6 flex justify-center items-center md:items-start flex-col gap-y-6'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className='text-4xl font-medium text-center md:text-left'>Sobre mi</h2>
        <p className='text-lg text-gray-600 w-4/5 text-center md:text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem commodi animi fuga architecto, possimus nam molestias maiores ipsa excepturi nobis dignissimos dolorum voluptates obcaecati quam! Adipisci ex magni exercitationem rerum.
        </p>
      </motion.div>
    </div>
  )
}

export default AboutSection

