import './App.css'
import AboutSection from './components/AboutSection'
import Banner from './components/Banner'
import ProjectsSection from './components/ProjectsSection'
import Habilidades from "../src/components/Habilidades"
import MiTrayectoria from "../src/components/MiTrayectoria"

function App() {

  return (
    <>
    <section name="seccion1" className='max-w-[1440px] mx-auto bg-gray-200'>
      <Banner text={"Construyo experiencias web que funcionan y se ven increibles."} />
    </section>
    <section name="seccion2" className='max-w-[1280px] mx-auto flex gap-y-6 py-16 flex-col md:flex-row'>
      <AboutSection />
    </section>
    <section name="seccion3" className="max-w-[1280px] mx-auto min-h-screen bg-gray-200 rounded-2xl py-12 px-4 flex flex-col md:flex-row">
      <MiTrayectoria />
      <Habilidades />
    </section>
    <section name="seccion4" className='max-w-[1280px] mx-auto flex flex-col gap-y-8 p-9'>
      <ProjectsSection/>
    </section>
    </>
    
  )
}

export default App