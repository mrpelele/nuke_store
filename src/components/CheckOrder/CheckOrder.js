import React, {useState,useEffect} from 'react'
import {dataBase} from '../../FireBase/firebase'
import './CheckOrder.css'

export const CheckOrder = () => {

    const [loading, setLoading] = useState (false)
    const [items, setItems] = useState ([])
    const [prepareID, setPrepareID] = useState ('')
    const [check,setCheck] = useState(false)

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
                setCheck(true)
        });
        
    }    

    return (

        <section className={'sectionStyle'}>

            <form className={check?'noDisplay':'formStyle'} onSubmit={sendID}>

                <div>

                        <input className={'inputStyle'} type="text" name="prepareID" placeholder="ID" onChange={(data) => setPrepareID(data.target.value)}/>
                        
                </div>

                        <input className={'inputButtonStyle'} type="submit" value="search item"/>
            </form>

            {items.map((data,w)=>

                <section className={check?'SectionMapStyle':'noDisplay'} key={w}>

                    <h1 className={'SectionMapStyleH1'}>this is your current order</h1>

                    {data.items.map((data,w) =>

                        
                    
                    <p>{data.count} {data.name}</p>    

                    )}

                <h2 className={'SectionMapStyleH2'}>for a total of {data.totalCost}$</h2>

                <button className={'ButtonStyle'} onClick={() =>setCheck(false)}>ups, this is noy my order</button>

                </section>

            )} 

        </section>

    )
}