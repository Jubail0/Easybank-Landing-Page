import React from 'react';
import ArticlesCard from './Articles_Card';
import './Blog.scss';

import Img1 from '../../images/image-currency.jpg';
import Img2 from '../../images/image-restaurant.jpg';
import Img3 from '../../images/image-plane.jpg';
import Img4 from '../../images/image-confetti.jpg';

const Blog = () => {
    const articles =[
        {
            id:1,
            img:Img1,
            author:'By Claire Robinson',
            title:'Receive money in any currency with no fees',
            desc:'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … '

        },
        {
            id:2,
            img:Img2,
            author:'By Wilson Hutton',
            title:'Treat yourself without worrying about money',
            desc:'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'

        },
        {
            id:3,
            img:Img3,
            author:'By Wilson Hutton',
            title:'Take your Easybank card wherever you go',
            desc:'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … '

        },
        {
            id:4,
            img:Img4,
            author:'By Claire Robinson',
            title:'Our invite-only Beta accounts are now live!',
            desc:'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... '

        }
    ]

  return (
    <section id='blog'>
        <div className='blog__container'>
            <h2>Latest Articles</h2>
          <article className="articles__grid">
            {
                articles.map(({id,img,author,title,desc})=>
                <ArticlesCard
                key={id}
                img={img}
                author={author}
                title={title}
                desc={desc}/>
                )
            }
          </article>
        </div>
    </section>
  )
}

export default Blog