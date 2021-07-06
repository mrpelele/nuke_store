import React, {useState,useEffect} from 'react'


export const CartContext = React.createContext([]) 

export const CartProvider = ({children}) => {
    /*con es de context*/
    const [Con,setCon] = useState([])
    const [CartItem,setCartItem] = useState([])

    const UpdateObject = () => {    

        const CheckItemPresence = CartItem.find(data => data.id === CartItem.id)            
    
        if (CheckItemPresence) {
            const NewObject = (UpdateObject.filter(data => data.id !==Con.id))
            const NewObjectUpdated = {
                'name':Con.name,
                'price':Con.price,
                'id':Con.id,
                'count':[...CartItem.Count+Con.Count]
            }

            console.log(NewObject)
            console.log(NewObjectUpdated,"hizo el if con ID")

            setCartItem(...NewObject,NewObjectUpdated)
        } else {

            console.log(Con,"esta haciendo el else Xd")
            setCartItem(Con)

        }
    }

        useEffect (()=>{

        UpdateObject(Con);
    
        },[Con])

        

    return <CartContext.Provider value={[Con, setCon,CartItem,setCartItem]}>
        {children}
    </CartContext.Provider>
}