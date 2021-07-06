import React, {useState,useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import {Detailer} from './ItemDetail'
import {CartContext } from '../Cart/CartContext'

export const DetailLister = () => { 

    const [Show, setShow] = useState ([])
    const {id} = useParams();

    const fetchItems = () => {

        fetch('https://mocki.io/v1/ada50e51-a250-4807-be53-04b35f74ab24')
            .then(dataReceive => dataReceive.json()) 
            .then(data => setShow(data.filter((generic) => generic.id == id)))
            
       
    }
        
    useEffect (()=>{

        fetchItems()
        

    },[])

    return (

        <div>

            {Show.map((Show,w)=>

                <Detailer Show={Show}/>        
            )}

        </div>

    )
}

