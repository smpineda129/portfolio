import React from 'react'
import { motion } from 'framer-motion'
import Me from "../media/me.PNG"

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
        <h2 className='text-3xl font-semibold text-center md:text-left text-gray-800'>About</h2>
        <p className=" text-gray-600 w-4/5 text-center md:text-left">
  I'm a web developer specialized in front-end development with React and WordPress, passionate about building clean, functional, and user-focused digital experiences. Since 2015, I’ve found in code not just a tool, but a calling. With over 3 years of professional experience, I’ve worked on projects ranging from corporate websites to dynamic web applications, using modern tools like Tailwind CSS, JavaScript, Google Cloud, and Elementor.
  <br /><br />
  I’m currently completing an intensive Full Stack Development Bootcamp at KeepCoding, aiming to expand my technical skill set and deliver more robust, end-to-end solutions. My approach is simple: write code that works today and lasts tomorrow. I take ownership of what I build, learn from every challenge, and code with intention.
  <br /><br />
  Beyond the keyboard, my biggest motivation is to build a future where I can dedicate myself fully to my family—creating today the life I want to live tomorrow.
</p>
      </motion.div>
    </div>
  )
}

export default AboutSection

