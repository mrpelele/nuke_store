import React, {useState,useEffect} from 'react'
import './ItemListContainer.css';
import {Showing} from '../ItemList/items/ItemList'

const aj = {

    position:"relative",
    display: "flex",
    flexDirection:"column",
    alignItems:"flex-start",
    position: "relative",
    top: "2rem",
    width: "90%",
    height: "75%",
    left: "1rem",
    overflow: "hidden"
        
};


export const ItemLister = () => {


    const promiseTry = () => {
        return new Promise ((resolve,reject) => {
    
            setTimeout(()=>resolve(
            [
                {id:1, radioactivo:false, name:'misil',img:'https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg'},
                {id:2, radioactivo:true,name:'bomba atómica',img:'https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg'},
                {id:3, radioactivo:false,name:'explosivos',img:'https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg'},
                {id:4, radioactivo:false,name:'cañon',img:'https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg'},
                {id:5, radioactivo:false,name:'satelite',img:'https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg'},
                {id:6, radioactivo:false,name:'napalm',img:'https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg'},
                {id:7, radioactivo:true,name:'uranio empobrecido',img:'https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg'},
            ]
            ),1000)
    
        })
    
    }

    const [show, setShow] = useState ([])
    
       
        const execute = () => {
    
            promiseTry().then(data => {
    
                    setShow(data)
                    
            })
    
        }
    
        useEffect (()=>{
    
            execute();
    
        },[])
        
    



    return (
    
        <section>

            <div>

                <title id='GenerT'>Available Items</title>

            </div>

            <div>

                <Showing show={show}/>
                
            </div>

        </section>

        /* al carrito */

        





    )

} 

