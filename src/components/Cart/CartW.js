import React, {useContext} from 'react';
import {CartContext} from '../Cart/CartContext'
import {Link} from 'react-router-dom'
import './CartW.css'


const NoDisplay = {
    display:"none"
}

const CartQuanitityStyle = {

    display: "flex",
    alignItems: "center",
    border: "none",
    backgroundColor: "white",
    color: "black",
    fontSize: "2rem",
    textAlign: "center",
    textDecoration: "none",
    border: "1px solid"

};

const CARTING = 'https://www.pinclipart.com/picdir/big/83-831322_shopping-cart-logo-png-white-clipart.png';

export const CartW = () => {

    const {CartCount} = useContext(CartContext)

    console.log(CartCount)

    return (
    
        <div >

            <Link to='../cart' ><img src={CARTING} alt="cart" id="cartST"></img></Link>
            <p style={CartCount===0?NoDisplay:CartQuanitityStyle}>{CartCount}</p>

        </div>
        
    )
};