import React, {useState} from 'react'


export const CartContext = React.createContext([]) 

export const CartProvider = ({children}) => {
    const [Con,setCon] = React.useState([])

    return <CartContext.Provider value={[Con, setCon]}>
        {children}
    </CartContext.Provider>
}