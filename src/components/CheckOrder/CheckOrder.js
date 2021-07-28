import React, {useState,useEffect} from 'react'
import {dataBase} from '../../FireBase/firebase'
import './CheckOrder.css'

export const CheckOrder = () => {

    const [loading, setLoading] = useState (false)
    const [items, setItems] = useState ([])
    const [prepareID, setPrepareID] = useState ('')

    function sendID(e) {
        
        e.preventDefault();
        CallItems()

    }

    async function CallItems() {

        setLoading(true);
        const ItemCollection = await dataBase.collection("orders").doc(prepareID).get().then(orderCall =>{

            if (orderCall.size === 0) {
                return(console.log('the selected database is currently empty'))
            }

            setItems([{id: orderCall.id, ...orderCall.data()}])

        }).catch((error)=>{
                console.log('error, no items found',error);
        }).finally(()=>{
                setLoading(false);
        });
        
    }    

    return (

        <section className={'sectionStyle'}>

            <form className={'formStyle'} onSubmit={sendID}>

                <div>

                        <input className={'inputStyle'} type="text" name="prepareID" placeholder="ID" onChange={(data) => setPrepareID(data.target.value)}/>
                        
                </div>

                        <input className={'inputButtonStyle'} type="submit" value="search item"/>
            </form>

            {items.map((data,w)=>

                <section key={w}>                   

                    {data.items.map((data,w) =>
                    
                    <p>{data.name} {data.count}</p>    

                    )}

                <p >total cost:{data.totalCost}</p>

                </section>

            )} 

        </section>

    )
}