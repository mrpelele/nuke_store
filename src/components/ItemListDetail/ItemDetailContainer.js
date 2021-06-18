import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Detailer} from './ItemDetail'

export const DetailLister = () => { 

    const [Show, setShow] = useState ([])
    const {id} = useParams();

    const fetchItems = () => {

        fetch('https://mocki.io/v1/86dd4d81-585b-430c-b75d-af46b60fb29c')
            .then(dataReceive => dataReceive.json()) 
            .then(data => setShow(data.filter((generic) => generic.id == id)))
            
       
    }
        
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

