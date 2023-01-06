import React,{useState} from 'react';
import './Navbar.scss';
import logo from '../../images/logo.svg'
import hamburger from '../../images/icon-hamburger.svg'
import Close from'../../images/icon-close.svg'

const Navbar = () => {
  const[toggle,setToggle]=useState(false)
  return (
    <nav>

        <div className='nav__container'>
            <div className='nav__logo'>
            <img src={logo} alt="logo"/>
            </div>
           
          { toggle && <div className='nav__menu-list-1' style={{transform:'translateY(0)'}}>
            
               <a href='/'><li>Home</li></a> 
               <a href='#about'><li>About</li></a>
               <a href='#contact'><li>Contact</li></a>
               <a href='#blog'><li>Blog</li></a>
               <a href='#career'><li>Careers</li></a>
              
            </div> } 

          <div className='nav__menu-list'>
           <a href='/'><li>Home</li></a> 
           <a href='#about'><li>About</li></a>
           <a href='#contact'><li>Contact</li></a>
           <a href='#blog'><li>Blog</li></a>
           <a href='#career'><li>Careers</li></a>
           </div> 

         
            
            <div>
            
             <label onClick={()=>setToggle(prevState => !prevState)} className='hamburger'>
             { toggle ? <img src={Close} alt="close"/>:<img src={hamburger} alt="hamburger"/>}
              
            </label> 
            <button className='btn nav__btn'>Request Invite</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar