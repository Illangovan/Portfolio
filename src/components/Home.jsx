import React from 'react'
import '../styles/Home.css'
function Home() {
  return (
    <div className='container'>
      <div className='description'>
        <div>
         <h1 style={{marginBottom:"0.5rem"}}>I'm <span>Illangovan </span>an,<span> Software Developer</span></h1>
         <h2>I craft responsive applications where technology meets creativity.</h2>
         </div>
         <div className="button">
         <a href="https://drive.google.com/file/d/1bsb3rfXHKhIvQ-JVCcgyJpx3bqKT_5s2/view?usp=sharing"><button id='download'>Download Resume</button></a>
        <a href="mailto:andrewillango1212@gmail.com" ><button id='contact'>Contact me  !!</button></a>
        </div>
      </div>
      <div>
          <div className="picture">
           <img src="/Images/photo.png" alt="image"  />
            <div className="current">
              <div className="square_bullet"></div>
              <h3>Currently Learning React JS</h3>
            </div>
           </div>
      </div>
    </div>
  )
}

export default Home;