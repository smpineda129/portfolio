import './App.css'
import AboutSection from './components/AboutSection'
import Banner from './components/Banner'
import ProjectsSection from './components/ProjectsSection'

function App() {

  return (
    <>
    <section name="seccion1" className='max-w-[1440px] mx-auto bg-gray-200'>
      <Banner text={"Construyo experiencias web que funcionan y se ven increibles."} />
    </section>
    <section name="seccion2" className='max-w-[1280px] mx-auto flex gap-x-7 py-11'>
      <AboutSection />
    </section>
    <section name="seccion3" className='max-w-[1280px] mx-auto flex flex-col gap-y-8'>
      <ProjectsSection/>
    </section>
    </>
    
  )
}

export default App