import React, {useContext, useState} from 'react'
import './ItemDetail.css'
import {Counter} from '../Counter/Counter'
import {CartContext } from '../Cart/CartContext'
import { useHistory } from 'react-router-dom';


const imgSTYLE = {

    height: "50rem",
    width: "30rem"

}

const GenerBuy = {

    display: "flex",
    position: "relative",
    width: "100%",
    height: "3.5rem",
    backgroundColor: "rgba(240, 238, 238, 0.836)",
    borderStyle: "solid",
    borderWidth: "1px",
    alignSelf: "center",
    justifyContent: "flex-end",
    fontSize: "1rem"
  
}

const nams = {

    position: "relative",
    alignSelf: "center",
    fontSize: "10rem"

}

export const Detailer =({Show,w}) => {

    const [Bought,setBought] = useState(0);
    const [Con,setCon] = useContext(CartContext)

    const moveit = useHistory();

    function Buy(data) {

        setBought(data)

            if (data>0) {
                alert("you added "+data+" unit/s to your cart")
            }

        console.log(data)
              
    }

    function TrueBuy(data) {

        setCon([...Con,data])

        console.log(Con)

        moveit.push('../cart')     

    }

    

    return (

        <section>

           <div className="main">

                <h2  style={nams}>{Show.name}</h2>

                <img  style={imgSTYLE} src={Show.img} alt=""></img>           

           </div>

           <div style={GenerBuy}>
                    <Counter stock="4" noStock="0" Buy={Buy} TrueBuy={TrueBuy} itemAR={Show}/>

                    
            </div> 

            <div className="details">

                <h3>Item Details</h3>

                <p >{Show.description}</p>

                <p >Range: {Show.range}</p>

                <p >Price: {Show.price}</p>
                
            </div>

        </section>


    )

} 
