import React from 'react'

export const Detailer =({Show}) => {

    return (

        <section>

            <div>

                <h3>Item Details</h3>

            </div>

            <div>

                <p>{Show.descrpition}</p>

                <p>{Show.range}</p>

                <p>{Show.price}</p>
                
            </div>

        </section>

    )

} 
