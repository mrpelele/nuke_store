import React, {useState,useEffect,useContext} from 'react'
import {dataBase} from '../../FireBase/firebase'

export const CheckOrder = () => {

    const [loading, setLoading] = useState ([])
    const [items, setItems] = useState ([])
    const [prepareID, setPrepareID] = useState ("")
    const [ID, setID] = useState ("")

    function sendID() {

        setID(prepareID)

    }

    function CallItems() {

        setLoading(true);
        const ItemCollection = dataBase.collection("orders")
        ItemCollection.get().then((ItemCall)=> {
            if (ItemCall.size === 0) {
                console.log('the selected database is currently empty')
            }
            if (ID==undefined) {
                console.log('item nof found');
            } else { 
                const SearchByID = ItemCall.docs.map(doc => doc.data())
                setItems(SearchByID.filter((element) => element.id == ID))
            }
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

        <section>

            <form onSubmit={sendID}>

                <div>

                        <input  type="text" name="prepareID" placeholder="ID" onChange={(data) => setPrepareID({[data.target.name]:data.target.value})}/>
                        
                </div>

                        <input type="submit" value="search item"/>
            </form>

            <p>{items}aca tiene que aparecer algo?</p>

            {items.map((data,w)=>

                <section>

                    <p ket={w}>{data}</p>

                </section>

            )}

        </section>

    )
}