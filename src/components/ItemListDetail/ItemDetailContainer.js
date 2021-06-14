import React, {useState,useEffect} from 'react'
import {Detailer} from './ItemDetail'

export const DetailLister = () => { 
    
    const fetchItems = () => {
    
         fetch('https://mocki.io/v1/24615444-6dbb-426d-b487-3c341f45e88f')
        .then(dataReceive => dataReceive.json()) 
        .then(data => setShow(data))    
    
    }

    const [Show, setShow] = useState ([])

         useEffect (()=>{

            fetchItems()

        },[])

    return (

            <div>

                {Show.map((Show)=>

                    <Detailer Show={Show}/>        
                )}

            </div>

    )
}

