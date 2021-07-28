import React, {useState,useEffect} from 'react'
import {dataBase} from '../../FireBase/firebase'
import './CheckOrder.css'

export const CheckOrder = () => {

    const [loading, setLoading] = useState (false)
    const [items, setItems] = useState ([])
    const [prepareID, setPrepareID] = useState ('')

    async function sendID(e) {
        
        e.preventDefault();
        console.log(prepareID)
        CallItems()

    }

    async function CallItems() {

        setLoading(true);
        const ItemCollection = await dataBase.collection("orders").doc(prepareID).get().then(orderCall =>{

            if (orderCall.size === 0) {
                return(console.log('the selected database is currently empty'))
            }

            setItems({id: orderCall.id, ...orderCall.data()})
            console.log(items,'buscando item?')

        }).catch((error)=>{
                console.log('error, no items found',error);
        }).finally(()=>{
                setLoading(false);
        });
        
    }

    console.log(prepareID)
    


    return (

        <section className={'sectionStyle'}>

            <form className={'formStyle'} onSubmit={sendID}>

                <div>

                        <input className={'inputStyle'} type="text" name="prepareID" placeholder="ID" onChange={(data) => setPrepareID(data.target.value)}/>
                        
                </div>

                        <input className={'inputButtonStyle'} type="submit" value="search item"/>
            </form>

            <p>{items}this was supposed to display the item if found ¯\_(ツ)_/¯</p>

            {items.map((data,w)=>

                <section>

                    <p key={w}>{data}</p>

                </section>

            )} 

        </section>

    )
}