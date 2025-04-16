import React from 'react'
import Me from "../media/me.jpg"

const AboutSection = () => {
  return (
    <><div className='w-2/6 flex items-center'>
          <img src={Me} alt="me" className='w-[350px] max-h-[350px] object-cover rounded-full object-center'/>
      </div><div className='w-4/6 flex justify-center flex-col gap-y-6'>
              <h2 className='text-4xl font-medium'>Sobre mi</h2>
              <p className='text-lg text-gray-600'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem commodi animi fuga architecto, possimus nam molestias maiores ipsa excepturi nobis dignissimos dolorum voluptates obcaecati quam! Adipisci ex magni exercitationem rerum.
              </p>
          </div></>
  )
}

export default AboutSection
