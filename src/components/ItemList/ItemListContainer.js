import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './ItemListContainer.css';
import {Showing} from '../ItemList/items/ItemList'

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


    const promiseTry = () => {
        return new Promise ((resolve,reject) => {
    
            setTimeout(()=>resolve(
            [
                {id:1,radioactivo:false,name:"Missile",description:"low cost proyectile",range:"low",price:"$100",img:"https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg"},
                {id:2,radioactivo:true,name:"Nuke",description:"high cost proyectile",range:"long",price:"$2000",img:"https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg"},
                {id:3,radioactivo:false,name:"Explosives",description:"manually detonated explosives",range:"low",price:"$50",img:"https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg"},
                {id:4,radioactivo:false,name:"Cannon",description:"cheap and unreliable weapon",range:"low",price:"$8",img:"https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg"},
                {id:5,radioactivo:false,name:"Satelite",description:"non-combat recon instrument",range:"long",price:"$10000",img:"https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg"},
                {id:6,radioactivo:false,name:"Napalm",description:"this should not be used",range:"non-existent",price:"$160",img:"https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg"},
                {id:7,radioactivo:true,name:"Grenade",description:"low range throwable explosive",range:"non-existent",price:"$2",img:"https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg"},
                {id:8,radioactivo:true,name:"Depleted Uranium",description:"death",range:"non-existent",price:"$8000",img:"https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg"},
                {id:9,radioactivo:true,name:"Radioactive Waste",description:"Industry waste, do not ingest",range:"irrelevant",price:"$25",img:"https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg"},
                {id:10,radioactivo:true,name:"Plasma",description:"I don't know how this works",range:"non-existent",price:"$20000",img:"https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg"}
            ]                    
                    
            ),1000)
    
        })
    
    }

    const [show, setShow] = useState ([])
    const {range} = useParams();
    
       
        const execute = () => {
    
            promiseTry().then(data => {
                const rangeFilter = data.filter((ranger) =>ranger.range == range)
                setShow(rangeFilter)
                console.log(rangeFilter)
            })
    
        }
    
        useEffect (()=>{
    
            execute();
    
        },[])
        
    



    return (
    
        <section className="Gener">

            <div>

                <title id='GenerT'>Available Items</title>

            </div>

            <div style={aj}>

                <Showing show={show}/>
                
            </div>

        </section>

        /* al carrito */

        





    )

} 

