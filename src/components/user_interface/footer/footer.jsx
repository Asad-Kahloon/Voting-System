import React from 'react'
import './footer.css'
import {AiOutlineCopyrightCircle,AiFillLinkedin,AiFillYoutube,AiFillFacebook,AiFillInstagram,AiOutlineLink} from 'react-icons/ai'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container py-2">
            <ul className="footer-ul">
                <li className='footer-item'>
                    <a href="#" className='link'><span className='icons'><AiFillLinkedin/></span> LinkedIn</a>
                </li>
                <li className='footer-item'>
                    <a href="#" className='link'><span className='icons'><AiFillYoutube/></span> Youtube</a>
                </li>
                <li className='footer-item'>
                    <a href="#" className='link'><span className='icons'><AiFillFacebook/></span> Facebook</a>
                </li>
                <li className='footer-item'>
                    <a href="#" className='link'><span className='icons'><AiFillInstagram/></span> Instagram</a>
                </li>
                <li className='footer-item'>
                    <a href="#" className='link'><span className='icons'><AiOutlineLink/></span> Portfolio</a>
                </li>
            </ul>
        </div>
        <div className="copyright">
            <p>Made with <span>♥</span> by Asad Kahloon <AiOutlineCopyrightCircle/> Copyrights reserved 2023 </p>
        </div>
      </div>
   </>
  )
}
