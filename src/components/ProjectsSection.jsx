import { motion } from "framer-motion";
import LakewoodWeb from "../media/Projects/LakewoodOaksWeb.png";
import MichelangeloWeb from "../media/Projects/MichelangeloWeb.png";
import CenturionsWeb from "../media/Projects/CenturionsWeb.png";
import BurbujasWeb from "../media/Projects/BurbujasWeb.png";
import CooporecalWeb from "../media/Projects/CooporecalWeb.png";
import CotraescalWeb from "../media/Projects/CotraescalWeb.png";

const proyectos = [
  {
    imagen: LakewoodWeb,
    titulo: "Lakewood Oaks",
    descripcion: "Website development to lakewood oaks on lake conroe project",
    demo: "https://lakewoodoaksonlakeconroe.com/"
  },
  {
    imagen: MichelangeloWeb,
    titulo: "Michelangelo del Valle LLC",
    descripcion: "Website development to Michelangelo del Valle LLC",
    demo: "https://michelangelodelvalle.com/"
  },
  {
    imagen: CenturionsWeb,
    titulo: "Centurions Car Wash",
    descripcion: "Development of Centurions Car Wash App",
    demo: "https://www.centurionscarwash.com/"
  },
  {
    imagen: BurbujasWeb,
    titulo: "Burbujas Micheladas",
    descripcion: "Website development to Burbujas Micheladas",
    demo: "https://burbujasmicheladas.com/"
  },
  {
    imagen: CooporecalWeb,
    titulo: "Cooporecal",
    descripcion: "Website development to Cooporecal",
    demo: "https://cooporecal.com/"
  },
  {
    imagen: CotraescalWeb,
    titulo: "Cootraescal",
    descripcion: "Website development to Cootraescal",
    demo: "https://cootraescal.com/"
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
        Projects
      </motion.h2>

      <div className='flex gap-x-9 gap-y-10 flex-wrap justify-between'>
        {proyectos.map((proyecto, index) => (
          <motion.div
            className='w-full md:w-[47%] lg:w-[31%] flex gap-y-4 flex-col justify-between'
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
                className="border-2 w-[70px] text-lg text-center py-2 rounded-lg"
              >
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
