import React from 'react'
import '../Styles/footer.css'
import '../Styles/footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer id='Footer'> 
    
    <a href=".." className="footer__logo">  <img src={require("../logo.png")} alt="logo" /> </a>

    <ul className="permalinks">
    
    </ul>
    
    <div className="footer__socials">
     <a href='https://facebook.com'> <FaFacebookF/> </a>
     <a href='https://facebook.com'> <FiInstagram/> </a>
     <a href='https://facebook.com'> <IoLogoTwitter/></a>
    </div>
     
     <div className="footer__socials">

      <small> &copy; MOOTOHOLDINGS TECHNOLOGIES. ALL RIGHTS RESERVED 2022 </small>
     
     </div>

    </footer>
  )
}

export default footer