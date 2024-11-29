import React from 'react'
import '../styles/Cards.css'
function Cards(props) {
  return (
    <>
    <div className='card'>
      <img src={props.image}></img>
      <h3>{props.tech}</h3>
      <hr></hr>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <div className='button_container'>
    <a href="#" ><button id='code'>Code </button></a>
    <a href="#"><button id='view'>View</button></a>
    </div>
    </div>
    
    </>
  )
}

export default Cards