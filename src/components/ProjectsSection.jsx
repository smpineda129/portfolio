import React from 'react'
import ProyectImage from "../media/proyect-image.jpg"

const proyectos = [
    {
      imagen: ProyectImage,
      titulo: "Proyecto Uno",
      descripcion: "Este es el primer proyecto. Hecho con amor, bugs y café.",
      demo: "https://demo-proyecto1.com",
      github: "https://github.com/usuario/proyecto1"
    },
    {
      imagen: ProyectImage,
      titulo: "Proyecto Dos",
      descripcion: "Segundo intento, menos bugs, más estilo.",
      demo: "https://demo-proyecto2.com",
      github: "https://github.com/usuario/proyecto2"
    },
    {
      imagen: ProyectImage,
      titulo: "Proyecto Tres",
      descripcion: "Aquí ya parece que sé lo que estoy haciendo.",
      demo: "https://demo-proyecto3.com",
      github: "https://github.com/usuario/proyecto3"
    }
  ];

const ProjectsSection = () => {
  return (
    <>
    <h2 className='text-4xl font-medium'>Proyectos</h2>
    <div className='flex gap-x-9'>
        {proyectos.map((proyecto, index) => (
            <div className='w-1/3 flex gap-y-4 flex-col justify-between' key={index}>
                <img src={proyecto.imagen} className='rounded-2xl' alt=''/>
                <h3 className='text-2xl font-medium'>{proyecto.titulo}</h3>
                <p className='text-lg text-gray-600'>{proyecto.descripcion}</p>
                <div className='flex flex-row gap-x-6'>
                    <a
                        href={proyecto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 w-[70px] text-lg text-center"
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
            </div>
        ))}
    </div>
    </>
  )
}

export default ProjectsSection
