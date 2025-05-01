import { motion } from "framer-motion"

const Habilidades = () => {
  const skills = [
    { name: "Elementor", percentage: 100 },
    { name: "HTML/CSS", percentage: 90 },
    { name: "GIT", percentage: 90 },
    { name: "Google Cloud Console", percentage: 90 },
    { name: "Tailwind CSS", percentage: 85 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 80 },
    { name: "WordPress", percentage: 80 },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  return (
    <div className="w-full md:max-w-2xl mx-auto p-6 mt-8 md:w-1/2">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 font-medium">{skill.name}</span>
              <span className="text-gray-500">{skill.percentage}%</span>
            </div>
            <div className="w-full h-2.5 overflow-hidden">
              <motion.div
                className="bg-blue-600 h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
