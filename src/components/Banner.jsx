import { motion } from "framer-motion"
import StackButton from "./ui/StackButton"
import { Link } from 'react-scroll';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const Banner = ({ text }) => {
  return (
    <motion.div
      className='w-full min-h-[650px] flex justify-center items-center flex-col gap-y-8 px-8'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl md:text-6xl lg:text-8xl font-medium text-center font-sf"
        variants={itemVariants}
      >
        {text}
      </motion.h1>

      <motion.div
        className="flex gap-x-3 md:gap-x-8 flex-wrap justify-center"
        variants={containerVariants}
      >
        {["React", "Wordpress", "JavaScript", "Git", "Tilwind"].map((tech, index) => (
          <motion.div key={index} variants={itemVariants}>
            <StackButton text={tech} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex gap-x-8 flex-wrap md:flex-nowrap md:flex-row w-full md:w-8/12 lg:w-6/12"
        variants={containerVariants}
      >
        <Link
          to="seccion4"
          smooth={true}
          duration={500}
          offset={-window.innerHeight / 15}
          className="bg-blue-600 p-4 text-center text-lg w-full md:w-1/2 md:text-2xl text-white rounded-2xl"
          >
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.button>
        </Link>
        <a href="/cv/cv2025.pdf" className="p-4 text-lg w-full md:w-1/2 md:text-2xl" download>
          <motion.button
            className="text-lg w-full md:text-2xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Banner
