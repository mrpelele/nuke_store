import React, {useState} from 'react'
import './ItemListContainer.css';
import {Counter} from '../Counter/Counter';


const xd = 'https://i.imgur.com/zr9W8gY.jpg';

const aj = {

    display: "flex",
    position: "relative",
    top: "8rem",
    width: "90%",
    height: "60%",
    left: "1rem"
        
};

export const ItemLister = () => {

    function buy() {

        alert("you added your unit/s to the cart")

    }

    return (
    
        <section id='Gener'>

            <div>

                <title id='GenerT'>this is a generic container</title>

            </div>

            <div>

                <img src={xd} style={aj} alt="imagen de posible compra"></img>
                
            </div>

            <div id='GenerBuy'>

                <Counter stock="4" noStock="0" buy={buy}/>

            </div>

        </section>

        /* al carrito */

        





    )

} 

/*export function cartSend(stock) {

    const  [cart,setCart] = useState (0);

    const add = (stock) => {

        if (cart<stock){
            setCart(cart+1);
        } else {}   

    }

    return (



    )
};*/