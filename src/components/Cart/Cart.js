import React, {useState,useContext,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {CartContext } from '../Cart/CartContext'
import {dataBase} from '../../FireBase/firebase'

const NoDisplay = {
    display:"none"
}

const ButtonStyle = {

    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    border: "none",
    backgroundColor: "white",
    color: "black",
    fontSize: "2rem",
    textAlign: "center",
    textDecoration: "none",
    width: "10rem",
    border: "1px solid"

};

const nothing = {

    

}

const ItemDisplay = {

    display: "flex",
    flexDirection:"row"

}

const PlaceOrderColumn = {

    display:"flex",
    flexDirection:"column",
    width:"10rem"

}



export const CartDisplay = () =>{

debugger

    const {CartItem,setCartItem,DeleteAllItems,DeleteSpecificItem,Price} = useContext(CartContext)

    const history = useHistory();

    const [orderID,setOrderID] = useState("")
    const [loading, setLoading] = useState(false)
    const [orderSent,setOrderSent] = useState(false)
    const [userData,setUserData] = useState(
        {            
        userName:"",
        email:""
        }
    )

    console.log(Price)

    function SendToLanding() {

        history.push('../')

    }

    function setLoadingTrue() {

        setLoading(true)

    }

    function addOrder() {

        const firebaseOrders  = dataBase.collection('orders');
        const newOrder = {
        userData:userData,
        items: CartItem,
        totalCost:Price
        };

        firebaseOrders.add(newOrder).then(({id}) => {
            setOrderID(id); 
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setOrderSent(true)
            setLoading(false);
        });
    
    };

    console.log(userData)

    return(
        
        <section style={orderSent?NoDisplay:nothing}>

            <h1>

                Items in cart

            </h1>

            <div>

                {CartItem.map((data,w)=>
                 
                
                    <section>

                        <div style={ItemDisplay}>

                            <h2 key={w}>{data.count} {data.name}</h2>
                            <button onClick={() => DeleteSpecificItem(data.id,data.price,data.count)}>remove this item</button>
                
                        </div>

                    </section>
            
                )}
                

            </div>

            <div>

                    <p style={loading?nothing:NoDisplay}>total cost:{Price}</p>

            </div>

            <div >

                    <button style={CartItem.length>0?(loading?NoDisplay:ButtonStyle):NoDisplay} onClick={() => DeleteAllItems()}>Delete cart</button>
                    <button style={CartItem.length>0?(loading?NoDisplay:ButtonStyle):NoDisplay} onClick={() => SendToLanding()}>continue shopping</button>
                    <button style={CartItem.length>0?(loading?NoDisplay:ButtonStyle):NoDisplay} onClick={() => setLoadingTrue()}>confirm cart</button>
                    
                    
            </div>

            <div style={loading?nothing:NoDisplay}>

                <form >

                    <div style={PlaceOrderColumn}>
                        <input type="text" name="userName" placeholder="name" onChange={(data) => setUserData({...userData,[data.target.name]:data.target.value})}/>
                        <input type="email" name="email" placeholder="email" onChange={(data) => setUserData({...userData,[data.target.name]:data.target.value})}/>
                    </div>

                    <input type="submit" value="place order" style={ButtonStyle}  onClick={() => addOrder()}/>

                </form>

            </div>

        </section>
        
)       

}


