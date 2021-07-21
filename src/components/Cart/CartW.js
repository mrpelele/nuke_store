import React, {useContext} from 'react';
import {CartContext} from '../Cart/CartContext'
import {Link} from 'react-router-dom'
import './CartW.css'


const NoDisplay = {
    display:"none"
}

const ButtonStyle = {

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

    return (
    
        <div >

            <Link to='../cart' ><img src={CARTING} alt="cart" id="cartST"></img></Link>
            <p style={CartCount>0?ButtonStyle:NoDisplay}>{CartCount}</p>

        </div>
        
    )
};