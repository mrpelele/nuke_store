import React from 'react'
import {Counter} from '../../Counter/Counter'

function buy() {

    alert("you added your unit/s to the cart")

}

export const Item = ({showcase}) => {

return (  

<div>
            
            <h2> {showcase.name} </h2> 

            <img src={showcase.img} alt="tom"></img>

            <div id='GenerBuy'>

                <Counter stock="4" noStock="0" buy={buy}/>

            </div> 
            
</div>

) 
}