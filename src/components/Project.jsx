import React from 'react'
import '../styles/project.css'
import Cards from './Cards'
import data from '../Data/Data.json'
function Project() {
  return (
    <>
    <h1 className='project_heading'><span>#</span>projects</h1>
    <div className='project_container'>
       {
        data.map((x)=>
          {
             return <Cards name={x.name}  tech={x.tech} image={x.image} description={x.description}/>
          })
       }
    </div>
    </>
  )
}

export default Project;