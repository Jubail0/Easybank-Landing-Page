import React from 'react';
import './About.scss';
import Card from './Card';
import Icon_1 from '../../images/icon-online.svg';
import Icon_2 from '../../images/icon-budgeting.svg'
import Icon_3 from '../../images/icon-onboarding.svg'
import Icon_4 from '../../images/icon-api.svg'
const About = () => {
  const cardData =[
    {
      id:1,
      logo:Icon_1,
      title:"Online Banking",
      captions:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."

    },
    {
      id:2,
      logo:Icon_2,
      title:"Simple Budgeting",
      captions:"See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."

    },
    {
      id:3,
      logo:Icon_3,
      title:"Fast Onboarding",
      captions:"We don’t do branches. Open your account in minutes online and start taking control of your finances right away."

    },
    {
      id:4,
      logo:Icon_4,
      title:"Open API",
      captions:"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."

    },
  ]

  return (
    <section id='about'>
        <div className='about__container'>
            <h2>Why choose Easybank?</h2>
            <p className='about__caption'>We leverage Open Banking to turn your bank account into your financiak hub.<br/>
                control your finances like never before.
            </p>
            
            <div className='about__cards'>
              {
                cardData.map(({logo,title,captions,id})=> <Card key={id} logo={logo} title={title} captions={captions}/>)
              }
            
            </div>

            </div>
        
    </section>
  )
}

export default About