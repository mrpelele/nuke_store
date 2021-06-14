import React from 'react'
import {Counter} from '../../Counter/Counter'
import {DetailLister} from '../../ItemListDetail/ItemDetailContainer'


const container = {

    display: "inline-flex",
    position: "relative",
    backgroundColor: "rgb(109, 103, 103)",
    top: "2rem",    
    left: "4rem",
    width: "25rem",
    flexDirection: "column",
    borderStyle: "solid",
    borderWidth: "3px",
    alignItems: "center",
    marginRight: "1rem",
    marginBottom: "3rem"
}
const imgQ = {

    height:"40em",
    width:"24em"

}

function buy() {

    alert("you added your unit/s to the cart")

}

export const Item = ({showcase}) => {

return (  

<div style={container}>
            
            <h2> {showcase.name} </h2> 

            <img style={imgQ} src={showcase.img} alt="tom"></img>

            <div>

                <DetailLister/> 

            </div>


            <div id='GenerBuy'>

                <Counter stock="4" noStock="0" buy={buy}/>

            </div> 
            
</div>

) 
}