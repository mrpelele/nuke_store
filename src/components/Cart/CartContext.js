import React, {useState} from 'react'


export const CartContext = React.createContext([]) 

export const CartProvider = ({children}) => {
    /*con es de context*/
    const [CartItem,setCartItem] = useState([])
    const [Price,setPrice] = useState(0)
    const [CartCount,setCartCount] = useState(0)
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
            setPrice(Price+(Product.price * data))
            setCartCount(Product.count)

            console.log("if",CartItem)
           
        } else {

            const NewItem = {

                'id':Product.id,
                'name':Product.name,
                'count':data,
                'price':Product.price

            }
            

            console.log(Product)
            setCartItem([...CartItem,NewItem])
            setPrice(Price+(Product.price * data))
            setCartCount(CartCount+data)
            console.log("else",CartItem)

        }
     
        console.log("ACA ESTA EL COUNT MIRA",CartItem.count)

    }
    
    function DeleteAllItems() {
        setCartItem([])
        setPrice(0)
        setCartCount(0)
    }

    function DeleteSpecificItem(id,price,count) {

        const NewItemsRemovedItem = CartItem.filter(element => element.id !== id)

        setCartItem([...NewItemsRemovedItem])
        setPrice(Price-(price * count))
        setCartCount(CartItem.count)
        setCartCount(CartCount-count)

    }

    return <CartContext.Provider value={{CartItem,CartCount,Price,setCartItem,UpdateObject,DeleteAllItems,DeleteSpecificItem}}>
        {children}
    </CartContext.Provider>
}