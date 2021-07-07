import React, {useState,useEffect,useContext} from 'react'
import {CartContext } from '../Cart/CartContext'


export const CartDisplay = () =>{

    const {CartItem,setCartItem} = useContext(CartContext)

    console.log(CartItem)
    

    return(
        
        <section>

            <h1>

                Items in cart

            </h1>

            <div>

                {CartItem.map((data,w)=>
                
                
                    <section>

                        <div>

                            <h2 key={w}>{data.count} {data.name}</h2>
                
                        </div>

                    </section>
            
                )}
                

            </div>

        </section>
        
)       

}


