import React, {useState,useEffect} from 'react'
import {Item} from './Item'

export const Showing = ({show}) =>{

    return (

        /*esto lo paso al list para mostrar los items*/
        <div>
            
            {show.map((showcase)=>
            
                <Item showcase={showcase}/>

            )}

        </div>

    )

}

