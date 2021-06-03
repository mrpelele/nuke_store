import React from 'react';
import '../../App.css'

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
    
        <div id='Gener'>

            <div>

                <title id='GenerT'>this is a generic container</title>

            </div>

            <div>

                <p id='GenerP'>this is the content of a generic container</p>
                <img src={xd} style={aj} alt=""></img>
                
            </div>


        </div>



    )

} 