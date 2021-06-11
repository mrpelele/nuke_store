import React, {useState} from 'react'
import './ItemListContainer.css';
import {Counter} from '../Counter/Counter';
import {Lister} from '../ItemList/items/ItemList'


const xd = 'https://i.imgur.com/zr9W8gY.jpg';

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

    function buy() {

        alert("you added your unit/s to the cart")

    }

    return (
    
        <section id='Gener'>

            <div>

                <title id='GenerT'>this is a generic container</title>

            </div>

            <div style={aj}>

                <Lister promiseTry={promiseTry}/>
                
            </div>

            <div id='GenerBuy'>

                <Counter stock="4" noStock="0" buy={buy}/>

            </div>

        </section>

        /* al carrito */

        





    )

} 

export const promiseTry = () => {
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
            {id:8, radioactivo:true,name:'plasma',img:'https://www.meme-arsenal.com/memes/ba4a6ca48fb800a51fd51540752607aa.jpg'}
        ]
        ),2000)

    })

}