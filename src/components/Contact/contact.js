import React from 'react'
import './Contact.css'

const insta = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png'
const linkedin = 'https://image.flaticon.com/icons/png/512/174/174857.png'
const github = 'https://image.flaticon.com/icons/png/512/25/25231.png'

export const ContactPage = () => {

    return (

        <section>
            
            <h1 className={'ContactTitle'}>Follow me!</h1>
            
            <ul className={'ContactList'}>

                <li className={'ContactIMG'}><a href="https://www.linkedin.com/in/julián-marega-348759209/"><img className={'ContactIMG--Properties'} src={linkedin} alt="linkedin"></img></a></li>
                <li className={'ContactIMG'}><a href="https://www.instagram.com/mrpelelel/"><img className={'ContactIMG--Properties'} src={insta} alt="Instagram"></img></a></li>
                <li className={'ContactIMG'}><a href="https://github.com/mrpelele"><img className={'ContactIMG--Properties'} src={github} alt="GitHub"></img></a></li>

            </ul>



            
        </section>

    )
}