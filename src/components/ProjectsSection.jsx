import { motion } from "framer-motion";
import ProyectImage from "../media/proyect-image.jpg";

const proyectos = [
  {
    imagen: ProyectImage,
    titulo: "Proyecto Uno",
    descripcion: "Este es el primer proyecto. Hecho con amor, bugs y café.",
    demo: "https://demo-proyecto1.com",
    github: "https://github.com/usuario/proyecto1"
  }
];

const ProjectsSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <>
      <motion.h2 
        className='text-4xl font-medium mb-8'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Proyectos
      </motion.h2>

      <div className='flex gap-x-9 gap-y-10 flex-wrap '>
        {proyectos.map((proyecto, index) => (
          <motion.div
            className='w-full md:w-1/3 flex gap-y-4 flex-col justify-between'
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <motion.img 
              src={proyecto.imagen} 
              alt='' 
              className='rounded-2xl'
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
            <h3 className='text-2xl font-medium'>{proyecto.titulo}</h3>
            <p className='text-lg text-gray-600'>{proyecto.descripcion}</p>
            <div className='flex flex-row gap-x-6'>
              <a
                href={proyecto.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 w-[70px] text-lg text-center py-2 rounded-lg hover:bg-blue-100 transition duration-300"
              >
                Demo
              </a>
              <a
                href={proyecto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
