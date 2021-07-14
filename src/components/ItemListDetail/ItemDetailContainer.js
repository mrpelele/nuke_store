import React, {useState,useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import {Detailer} from './ItemDetail'
import {dataBase} from '../../FireBase/firebase.js'

export const DetailLister = () => { 

    const [Show, setShow] = useState ([])
    const [loading, setLoading] = useState ([])
    
    const {id} = useParams();
        
    useEffect (()=>{

        setLoading(true);
        const ItemCollection = dataBase.collection("item")
        ItemCollection.get().then((ItemQuery)=> {
            if (ItemQuery.size === 0) {
                console.log('empty database')
            }

            if (id==undefined) {
                console.log('unable to select the item');
            } else { 
                const idFilter = ItemQuery.docs.map(doc => doc.data())
                setShow(idFilter.filter((element) => element.id == id))
                console.log(idFilter)
            }
            }).catch((error)=>{
                console.log('error, no items found',error);
            }).finally(()=>{
                setLoading(false);
            });
        

    },[])

    return (

        <div>

            {Show.map((Show,w)=>

                <Detailer Show={Show}/>        
            )}

        </div>

    )
}

