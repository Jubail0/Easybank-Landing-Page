import React from 'react';
import './Navbar.scss';
import logo from '../../images/logo.svg'
import hamburger from '../../images/icon-hamburger.svg'
import Close from'../../images/icon-close.svg'

const Navbar = ({toggle,setToggle}) => {
  

  const open = ()=>{
    setToggle(prevState => !prevState);

   
    
  }

  React.useEffect(()=>{
    if(toggle){
      document.body.style.overflowY ='hidden'
    }else {
      document.body.style.overflowY ='visible'
    }
   
  })
  return (
    <nav>

        <div className='nav__container'>
            <div className='nav__logo'>
            <img src={logo} alt="logo"/>
            </div>
           
           <div className={ toggle? 'nav__menu-list-1  fadeIn-nav' : 'nav__menu-list-1  fadeOut-nav'}>
            
               <a onClick={()=>setToggle(false)} href='/'><li>Home</li></a> 
               <a onClick={()=>setToggle(false)} href='#about'><li>About</li></a>
               <a onClick={()=>setToggle(false)} href='#contact'><li>Contact</li></a>
               <a onClick={()=>setToggle(false)} href='#blog'><li>Blog</li></a>
               <a onClick={()=>setToggle(false)} href='#career'><li>Careers</li></a>
              
            </div> 

          <div className='nav__menu-list'>
           <a href='/'><li>Home</li></a> 
           <a href='#about'><li>About</li></a>
           <a href='#contact'><li>Contact</li></a>
           <a href='#blog'><li>Blog</li></a>
           <a href='#career'><li>Careers</li></a>
           </div> 

         
            
            <div>
            
             <label onClick={open} className='hamburger'>
             { toggle ? <img src={Close} alt="close"/>:<img src={hamburger} alt="hamburger"/>}
              
            </label> 
            <button className='btn nav__btn'>Request Invite</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar