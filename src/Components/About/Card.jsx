import React from 'react'


const Card = ({logo,title,captions}) => {

  return (
    <div className='about__card'>
        <div className='about__icons_container'>
            <div className='about_image_container'>
            <img src={logo} alt='about_icons'/>
            </div>
        </div>

        <div className='about__card-content'>
            <h5>{title}</h5>
            <p>{captions}</p>
        </div>
    </div>
  )
}

export default Card