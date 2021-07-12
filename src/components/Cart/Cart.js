import React, {useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {CartContext } from '../Cart/CartContext'

const NoDisplay = {
    display:"none"
}

const ButtonStyle = {

    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    border: "none",
    backgroundColor: "white",
    color: "black",
    fontSize: "2rem",
    textAlign: "center",
    textDecoration: "none",
    width: "6rem",
    border: "1px solid"

};

const nothing = {

}

const ItemDisplay = {

    display: "flex",
    flexDirection:"row"

}

export const CartDisplay = () =>{

    const {CartItem,setCartItem,DeleteAllItems,DeleteSpecificItem,Price} = useContext(CartContext)

    const history = useHistory();

    console.log(Price)

    function SendToLanding() {

        history.push('../')

    }
  

    return(
        
        <section>

            <h1>

                Items in cart

            </h1>

            <div>

                {CartItem.map((data,w)=>
                 
                
                    <section>

                        <div style={ItemDisplay}>

                            <h2 key={w}>{data.count} {data.name}</h2>
                            <button onClick={() => DeleteSpecificItem(data.id,data.price,data.count)}>remove this item</button>
                
                        </div>

                    </section>
            
                )}
                

            </div>

            <div>

                    <p style={CartItem.length>0?nothing:NoDisplay}>total cost:{Price}</p>

            </div>

            <div >

                    <button style={CartItem.length>0?ButtonStyle:NoDisplay} onClick={() => DeleteAllItems()}>Delete cart</button>
                    <button style={CartItem.length>0?NoDisplay:ButtonStyle} onClick={() => SendToLanding()}>Go back to main</button>
                    

            </div>

        </section>
        
)       

}


