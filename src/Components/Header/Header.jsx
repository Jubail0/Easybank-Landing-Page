import React from 'react';
import './Header.scss';
// import background from '../../images/bg-intro-desktop.svg'
import Mockups from '../../images/image-mockups.png';

const Header = () => {
  return (
    <header>
      <div className='header__container'>

        <article className='header__hero'>

        <div className='hero__heading'>
        <h1 className='hero__title'>Next generation digital banking</h1>
        <small >Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</small>
        <div >
        <button className='btn'>Request Invite</button>
        </div>
        </div>
       
        </article>

      <div className='header__img-container'>
  
       <img  src={Mockups} alt='mockups'/>
     
      </div>
      </div>
    </header>
  )
}

export default Header