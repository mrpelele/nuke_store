import React, {useState,useEffect} from 'react'
import {dataBase} from '../../FireBase/firebase'
import './CheckOrder.css'

export const CheckOrder = () => {

    const [loading, setLoading] = useState (false)
    const [items, setItems] = useState ([])
    const [prepareID, setPrepareID] = useState ('')
    const [ID, setID] = useState ('')

    function sendID() {

        setID(prepareID)

    }

    function CallItems() {

        setLoading(true);
        const ItemCollection = dataBase.collection("orders")
        ItemCollection.get().then((ItemCall)=> {
            if (ItemCall.size === 0) {
                return(console.log('the selected database is currently empty'))
            }
            if (ID==undefined) {
               return( console.log('item nof found'))
            }
                
            const SearchByID = ItemCall.docs.map(doc => doc.data())
            setItems(SearchByID.filter((element) => element.id == ID))
            console.log('el item holaaa????')
            
            }).catch((error)=>{
                console.log('error, no items found',error);
            }).finally(()=>{
                setLoading(false);
            });

    }



    
    useEffect (()=>{

        CallItems()
        
    },[ID])

    console.log(prepareID)
    console.log(ID)
    console.log(items)

    return (

        <section className={'sectionStyle'}>

            <form className={'formStyle'} onSubmit={sendID}>

                <div>

                        <input className={'inputStyle'} type="text" name="prepareID" placeholder="ID" onChange={(data) => setPrepareID({[data.target.name]:data.target.value})}/>
                        
                </div>

                        <input className={'inputButtonStyle'} type="submit" value="search item"/>
            </form>

            <p>{items}this was supposed to display the item if found ¯\_(ツ)_/¯</p>

            {items.map((data,w)=>

                <section>

                    <p ket={w}>{data}</p>

                </section>

            )}

        </section>

    )
}