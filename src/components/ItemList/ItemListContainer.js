import React from 'react';
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

    return (
    
        <section id='Gener'>

            <div>

                <title id='GenerT'>this is a generic container</title>

            </div>

            <div>

                <img src={xd} style={aj} alt="imagen de posible compra"></img>
                
            </div>

            <div id='GenerBuy'>

                <Counter/>

            </div>

        </section>



    )

} 