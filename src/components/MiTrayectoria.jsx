import { motion } from "framer-motion"

const MiTrayectoria = () => {
  const timeline = [
    { year: "2015", desc: "Started in web development by creating landing pages using HTML and CSS." },
    { year: "2019", desc: "Developed personal websites using WordPress, strengthening knowledge in CMS." },
    { year: "2021", desc: "Implemented corporate websites in WordPress for the company CWTI." },
    { year: "2023", desc: "Developed professional websites in WordPress and front-end web applications using React for the company Michelangelo del Valle LLC." },
    { year: "2025", desc: "Advanced Full Stack development training nearing completion (bootcamp)." },
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
    <div className="max-w-2xl mx-auto p-6 rounded-lg md:w-1/2">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">My Career</h1>
      <p className="text-gray-600 mb-8">
      Since I discovered technology with delivery, I set out to master it and build a better future.
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
