import React from 'react'
import '../styles/Certificate.css'
function Certificate() {
  return (
    <>
    <h1 className='certificate_heading'><span>#</span>certifications</h1>
    <div className="certificate_container">
      <div className="certificate_card">
      <img src="/Images/udemy.png" />
      <div className="certificate_description">
      <h5>The Complete 2024 Web development Bootcamp</h5>
      <h5><span>Udemy</span></h5>
      </div>
      </div>
      <div className="certificate_card">
      <img src="/Images/GreatLearning.png" />
      <div className="certificate_description">
      <h5>Fundamental of React</h5>
      <h5><span>Great Learning</span></h5>
      </div>
      </div>
    </div>
    <hr></hr>
    </>
  )
}

export default Certificate;