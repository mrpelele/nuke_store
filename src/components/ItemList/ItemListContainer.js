import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './ItemListContainer.css';
import {Showing} from '../ItemList/items/ItemList'
import {dataBase} from '../../FireBase/firebase.js'


const aj = {

    position:"relative",
    display: "flex",
    flexDirection:"column",
    position: "relative",
    justifyContent:"flex-end",
    alignItems:"center",
    width: "100%",
    height: "100%"
        
};



export const ItemLister = () => {

    

    const [show, setShow] = useState ([])
    const [loading, setLoading] =useState (true)
    const {ranges} = useParams();

    function callItems() {

        setLoading(true);
        const ItemCollection = dataBase.collection("item")
        ItemCollection.get().then((ItemQuery)=> {
            if (ItemQuery.size === 0) {
                console.log('empty database')
            }

            if (ranges==undefined) {
                setShow(ItemQuery.docs.map(doc => doc.data()));
            } else { 
                const rangeFilter = ItemQuery.docs.map(doc => doc.data())
                setShow(rangeFilter.filter((element) => element.range == ranges))
                console.log(rangeFilter)
            }
            }).catch((error)=>{
                console.log('error, no items found',error);
            }).finally(()=>{
                setLoading(false);
            });
        
    }
       
    useEffect (()=>{

        callItems()
            
        },[ranges])

    return (
    
        <section className="Gener">

            <div>

                <title id='GenerT'>Available Items</title>

            </div>

            <div style={aj}>

                <Showing show={show}/>
                
            </div>

        </section>

    )
} 

