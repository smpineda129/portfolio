import StackButton from "./ui/StackButton"

const Banner = ({text}) => {
    return (
      <div className='w-full min-h-[650px] flex justify-center items-center flex-col gap-y-8 px-8'>
        <h1 className="text-8xl font-medium text-center font-sf">{text}</h1>
        <div className="flex gap-x-8">
          <StackButton text={"React"}/>
          <StackButton text={"Wordpress"}/>
          <StackButton text={"JavaScript"}/>
        </div>
        <div className="flex gap-x-8">
          <button className="bg-blue-600 p-4 text-2xl text-white rounded-2xl">Ver Proyectos</button>
          <button className="p-4 text-2xl">Descargar CV</button>
        </div>
      </div>
    )
  }
  
  export default Banner