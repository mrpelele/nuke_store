import React, {useState,useEffect,useContext} from 'react'
import {CartContext } from '../Cart/CartContext'
import {Carting} from './Carting'


export const CartDisplay = () =>{

    const [Con,setCon] = useContext(CartContext)

    console.log(Con)

    return(
        
        <section>

            <h1>

                Items in cart

            </h1>

            <div>

                {Con.map((Con,w) => {
                    <div>
                        <Carting Con={Con} w={w}/>
                        <button></button>
                    </div>
                }
                )}

            </div>

        </section>
)       
}


