import React from 'react'
import '../styles/project.css'
import Cards from './Cards'
function Project() {
  return (
    <>
    <h1 className='project_heading'><span>#</span>projects</h1>
    <div className='project_container'>
       <Cards tech="NodeJs | ExpressJs | EJS | Bootstrap | API | Javascript | HTML | CSS" name="NEWSREADER" image='/Images/newsreader.png'
       description="Designed and implemented a full-stack web application to display real-time news by integrating with the News API."/>
       <Cards tech="NodeJs | ExpressJs | EJS | Bootstrap | API | Javascript | HTML | CSS" name="WEATHER APP" image='/Images/weather.png'
       description="Developed a user-friendly web application that enables users to check real-time weather conditions in multiple cities."/>
       <Cards tech="NodeJs | ExpressJs | EJS | Bootstrap | API | Javascript | HTML | CSS" name="PORTFOLIO"  image='/Images/portfolio.png'
       description="The website you are currently on."/>
    </div>
    </>
  )
}

export default Project;