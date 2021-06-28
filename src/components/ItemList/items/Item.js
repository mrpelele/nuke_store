import React, {useContext} from 'react'
import {Counter} from '../../Counter/Counter'
import {NavLink} from 'react-router-dom'
import {CartContext } from '../../Cart/CartContext'
import { useHistory } from 'react-router-dom';


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


export const Item = ({showcase,w}) => {

    const [Bought,setBought] = React.useState(0);
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

        moveit.push('../cart')

        console.log(Con)

    }
    

return (  

<div style={container}>
            
            <h2 ><NavLink to={"/item/"+[showcase.id]}> {showcase.name} </NavLink></h2> 

            <img  style={imgQ} src={showcase.img} alt="tom"></img>


            <div id='GenerBuy'>

                <Counter stock="4" noStock="0" Buy={Buy} TrueBuy={TrueBuy} itemAR={showcase}/>

            </div> 
            
</div>

) 
}