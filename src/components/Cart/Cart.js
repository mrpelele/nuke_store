import React, {useState,useContext,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {CartContext } from '../Cart/CartContext'
import {dataBase} from '../../FireBase/firebase'
import './cart.css'


const NoDisplay = {
    display:"none"
}

const ButtonStyle = {

    display: "flex",
    flexDirection:"column",
    alignContent: "center",
    border: "none",
    backgroundColor: "white",
    color: "black",
    fontSize: "2rem",
    textAlign: "center",
    textDecoration: "none",
    width: "10rem",
    border: "1px solid"

};

const ButtonStyle2 = {

    display: "flex",
    flexDirection:"column",
    alignContent: "center",
    border: "none",
    backgroundColor: "white",
    color: "black",
    fontSize: "2rem",
    textAlign: "center",
    textDecoration: "none",
    width: "11rem",
    border: "1px solid"

};


const nothing = {

    justifyContent:'center'

}

const PlaceOrderColumn = {

    display:"flex",
    flexDirection:"column",
    width:"15rem",
    height:"1.5rem"

}

const cartStyle = {

    display:'flex',
    justifyContent:'center'
}



export const CartDisplay = () =>{

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

    function SendToLanding() {

        history.push('../')

    }

    function setLoadingTrue() {

        setLoading(true)

    }

    async function addOrder(e) {

        e.preventDefault();

        const firebaseOrders  = await dataBase.collection('orders');
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
            DeleteAllItems();
        });
    
    };

    console.log(userData)

    return (
        
        <section style={cartStyle}>
        
            <div style={orderSent?NoDisplay:nothing}>

                <section>

                        <title className={'ItemTitle'}>

                            Items in cart

                        </title>

                        <div>

                            {CartItem.map((data,w)=>


                                <section className={'mapContainerStyler'} >

                                    <div className={'ItemDisplay'}>

                                        <h2 className={'ItemDisplay--content'} key={w}>{data.count} {data.name}</h2>
                                        <button className={'ItemDisplay--content'} style={ButtonStyle} onClick={() => DeleteSpecificItem(data.id,data.price,data.count)}>remove this item</button>

                                    </div>

                                </section>

                            )}


                        </div>

                </section>

               <section>

                    <div style={{fontSize:'2rem',marginLeft:'1rem'}}>

                        <p style={loading?nothing:NoDisplay}>total cost:{Price}</p>

                    </div>

                    <div className={'CartOptionSelect'}>

                        <button style={CartItem.length>0?(loading?NoDisplay:ButtonStyle):NoDisplay} onClick={() => DeleteAllItems()}>Delete cart</button>
                        <button style={CartItem.length>0?(loading?NoDisplay:ButtonStyle):NoDisplay} onClick={() => SendToLanding()}>continue shopping</button>
                        <button style={CartItem.length>0?(loading?NoDisplay:ButtonStyle):NoDisplay} onClick={() => setLoadingTrue()}>confirm cart</button>


                    </div>

                    <div style={loading?nothing:NoDisplay}>

                        <form className={'formDisplay'} onSubmit={addOrder}>

                            <div style={{paddingRight:'1rem'}}>
                                <input style={PlaceOrderColumn} type="text" name="userName" placeholder="name" onChange={(data) => setUserData({...userData,[data.target.name]:data.target.value})}/>
                                <input style={PlaceOrderColumn} type="email" name="email" placeholder="email" onChange={(data) => setUserData({...userData,[data.target.name]:data.target.value})}/>
                            </div>

                            <input type="submit" value="place order" style={ButtonStyle2}/>

                        </form>

                    </div>

               </section>

            </div>

            <section style={orderSent?nothing:NoDisplay}>

                    <h1 className={'postItemSendMessageStyle'}>Thank you for your purchase!</h1>

                    <p className={'postItemSendMessageStyle2'}>your order ID is: {orderID}</p>

            </section>

        </section>
)       
}


