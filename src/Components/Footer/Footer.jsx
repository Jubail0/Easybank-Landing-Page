import React from 'react';
import './Footer.scss';
import {AiFillFacebook} from 'react-icons/ai'
import {GrPinterest} from'react-icons/gr';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';




const Footer = () => {
  return (
    <footer>
        <div className="footer__container">
            <div className="first__container">
              
              <div className="social__links__container">
                <a href='/facebook'><AiFillFacebook className='icons'/> </a>
                <a href='/pinterest'><GrPinterest className='icons'/> </a>
                <a href='/twitter'> <BsInstagram className='icons'/> </a>
                <a href='/Instagram'><BsTwitter className='icons'/></a>
              </div>
            </div>
            <div className="second__container">
              <div className="footer__content-1">
                <a href='#about'>About us</a>
                <a href='#contact'>Conntact </a>
                <a href='#blog'>Blog</a>
              </div>
              <div className="footer__content-2">
              <a href='#career'>Careers</a>
                <a href='#support'>Support </a>
                <a href='#privacy'>Privacy Poilcy</a>
              </div>

            </div>
            <div className="third__container">
              <div className="footer__btn-container">
              <button className="btn">Request Invite</button>
              </div>
              
              <small>&copy; Easybank. All Rights Reserved</small>
            </div>
        </div>
    </footer>
  )
}

export default Footer