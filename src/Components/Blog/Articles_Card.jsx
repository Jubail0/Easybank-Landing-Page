import React from 'react'


const ArticlesCard = ({img,author,title,desc}) => {
  return (
    <div className='articles_card'>
        <div className='articles__image-container'>
            <img src={img} alt='articles'/>
        </div>
        <div className="articles__card-content">
            <small>{author}</small>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default ArticlesCard