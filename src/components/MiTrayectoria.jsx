import { motion } from "framer-motion"

const MiTrayectoria = () => {
  const timeline = [
    { year: "2021", desc: "Empresa en el mundo del desarrollo web" },
    { year: "2022", desc: "Primeros proyectos.com\nWordPress y Elementor" },
    { year: "2023", desc: "Resta: Talahide / KeepCoding full-black-vibes" },
    { year: "2024", desc: "Fetealores. automotización.com\nOtivo y administración MS63" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg md:w-1/2">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Mi Trayectoria</h1>
      <p className="text-gray-600 mb-8">
        Desde que descubrí la tecnología con entrega, me propuse dominarla y construir un futuro mejor.
      </p>

      <div className="space-y-8">
        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            className="pl-6 border-l-4 border-blue-500"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold text-gray-700">{item.year}</h2>
            <p className="text-gray-600 mt-1 whitespace-pre-line">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MiTrayectoria
