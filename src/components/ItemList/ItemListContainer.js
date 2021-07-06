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
                {id:2,radioactivo:true,name:"Nuke",description:"high cost proyectile",range:"long",price:"$2000",img:"https://i1.sndcdn.com/avatars-000194321332-sqp4l6-t500x500.jpg"},
                {id:3,radioactivo:false,name:"Explosives",description:"manually detonated explosives",range:"low",price:"$50",img:"https://i.pinimg.com/originals/de/98/11/de9811741500f9c7bff0b5ed0852ae70.png"},
                {id:4,radioactivo:false,name:"Cannon",description:"cheap and unreliable weapon",range:"low",price:"$8",img:"https://static.fandomspot.com/images/08/8574/00-featured-tom-reading-newspaper-meme-template-preview.jpg"},
                {id:5,radioactivo:false,name:"Satelite",description:"non-combat recon instrument",range:"long",price:"$10000",img:"https://i.pinimg.com/236x/b7/2f/bb/b72fbb727aab44381ae0a23f05bc3781.jpg"},
                {id:6,radioactivo:false,name:"Napalm",description:"this should not be used",range:"irrelevant",price:"$160",img:"https://i.redd.it/iehc9cj86uw21.png"},
                {id:7,radioactivo:true,name:"Grenade",description:"low range throwable explosive",range:"irrelevant",price:"$2",img:"https://64.media.tumblr.com/500217277257bbba542f034c8a57f71a/tumblr_os6e7zPr4r1w1orjwo1_250.jpg"},
                {id:8,radioactivo:true,name:"Depleted Uranium",description:"death",range:"irrelevant",price:"$8000",img:"https://i.ytimg.com/vi/-CF-3zhpTsU/hqdefault.jpg"},
                {id:9,radioactivo:true,name:"Radioactive Waste",description:"Industry waste, do not ingest",range:"irrelevant",price:"$25",img:"https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg"},
                {id:10,radioactivo:true,name:"Plasma",description:"I don't know how this works",range:"irrelevant",price:"$20000",img:"https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg"}
            ]                    
                    
            ),1000)
    
        })
    
    }

    const [show, setShow] = useState ([])
    const {ranges} = useParams();
    
       
        const execute = () => {
            promiseTry().then((data) => {
                if (ranges==undefined) {
                    setShow(data)
                } else { const rangeFilter = data.filter((element) => element.range == ranges)
                    setShow(rangeFilter)
                    console.log(rangeFilter)
                }
            })
        }
    
        useEffect (()=>{

            execute();
 
        },[show])
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

