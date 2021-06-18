import React from 'react'
import {Counter} from '../../Counter/Counter'
import {NavLink} from 'react-router-dom'


const container = {

    display: "inline-flex",
    position: "relative",
    backgroundColor: "rgb(109, 103, 103)",
    top: "2rem",
    width: "25rem",
    flexDirection: "column",
    borderStyle: "solid",
    borderWidth: "3px",
    alignItems: "center",
    margin: "0.5rem",
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
            
            <h2><NavLink to={"/item/"+[showcase.id]}> {showcase.name} </NavLink></h2> 

            <img style={imgQ} src={showcase.img} alt="tom"></img>


            <div id='GenerBuy'>

                <Counter stock="4" noStock="0" buy={buy}/>

            </div> 
            
</div>

) 
}