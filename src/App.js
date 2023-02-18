import React from 'react'
import './App.scss';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const[toggle,setToggle]= React.useState(false)
  return (
    <div className='app'>
      <Navbar toggle={toggle} setToggle ={setToggle} />
      <Header/>
       <div className={toggle ? 'overlay fadeIn' : 'overlay fadeOut'}></div>
      <About/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App