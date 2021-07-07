import React, {useState} from 'react'


export const CartContext = React.createContext([]) 

export const CartProvider = ({children}) => {
    /*con es de context*/
    const [CartItem,setCartItem] = useState([])
    console.log("CART ITEM",CartItem)

    function UpdateObject(Product,data) {    

        console.log("PRODUCTO",Product)
        console.log("CANTIDAD",data)

        const CheckItemPresence = CartItem.find(element => element.id === Product.id)            
    
        if (CheckItemPresence) {

            const NewItems = CartItem.filter(element => element.id !== Product.id)

            const ItemUpdate = {
                
                'id':Product.id,
                'name':Product.name,
                'count':CheckItemPresence.count+data,
                'price':Product.price

            }
      
            setCartItem([...NewItems,ItemUpdate])

            console.log("if")
           
        } else {

            const NewItem = {

                'id':Product.id,
                'name':Product.name,
                'count':data,
                'price':Product.price

            }
            console.log("else")

            console.log(Product)
            setCartItem([...CartItem,NewItem])

        }
    }   

    return <CartContext.Provider value={{CartItem,setCartItem,UpdateObject}}>
        {children}
    </CartContext.Provider>
}