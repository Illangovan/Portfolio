import React from 'react'
import '../styles/Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <>
    <div className="footer_container">
        <div className="footer_name">
                <h3>Illangovan M</h3>
                <h4>andrewillango1212@gmail.com</h4>
        </div>
        <div className="footer_socials">
               <h3>socials</h3>
               <div className="footer_icons">
                <a href="https://www.linkedin.com/in/illangovan-m-8292a8203/"><LinkedInIcon /></a>
                <a href="https://github.com/Illangovan"><GitHubIcon /></a>
                <a href="https://github.com/Illangovan"><InstagramIcon /></a>
               </div>
        </div>
    </div>
    <h3 className='h3'>Made by Illangoan </h3>
    </>
  )
}

export default Footer;