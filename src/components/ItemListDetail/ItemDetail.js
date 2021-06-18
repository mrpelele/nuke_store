import React from 'react'
import './ItemDetail.css'

const imgSTYLE = {

    height: "50rem",
    width: "30rem"

}

const nams = {

    position: "relative",
    right: "4.9rem"

}

export const Detailer =({Show}) => {

    return (

        <section>

           <div className="main">

                <h2 style={nams}>{Show.name}</h2>

                <img style={imgSTYLE} src={Show.img} alt=""></img>

           </div>

           <div className="carrousel">

                <p>aca va a ir un carrousel e</p>

           </div>

            <div className="details">

                <h3>Item Details</h3>

                <p>{Show.description}</p>

                <p>Range: {Show.range}</p>

                <p>Price: {Show.price}</p>
                
            </div>

        </section>

    )

} 
