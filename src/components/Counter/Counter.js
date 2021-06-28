import './Counter.css'
import React, {useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import {ShowMessage} from './ShowMessage'
import { useHistory } from 'react-router-dom';

const SUPERBOTON = {

    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    border: "none",
    backgroundColor: "white",
    color: "black",
    fontSize: "1.4rem",
    textAlign: "center",
    textDecoration: "none",
    width: "3rem"

};

const carritou2 = {

    display:"flex",
    position: "absolute",
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white",
    left: "15%",
    top: "0%",
    height: "100%",
    width:"20%",
    borderStyle:"none",
    fontSize: "1rem"

};

const carritou3 = {

    display:"flex",
    position: "absolute",
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white",
    left: "35%",
    top: "0%",
    height: "100%",
    width:"20%",
    borderStyle:"none",
    fontSize: "1rem"

};

const carritouD = {

    visibility: "hidden"

};



export function Counter({stock,noStock,Buy,TrueBuy,itemAR}) {

    let TheClass = 'carritou'

    function DoneDidIt(data) { 
        Buy(data)
        setIntern(data)
        setClassChange(false)

    }

    function DoneDidNot(data) {
        setIntern(data)
        setCount(data)
        setClassChange(true)
        
    }  

    /* contador */

    const  [count,setCount] = useState (0);
    const [Intern,setIntern] = useState(0);
    const [ClassChange,setClassChange] = useState(true)

    const prus = () => {
    
        if (count<stock){
            setCount(count+1);
        } else {}   

    }

    const minus = () => {

        if (count>noStock) {
            setCount(count-1);
        } else {}
    }

    /* return */

    return (

        <div >

            <div className="XD">
                <ShowMessage count={count}/>
            </div>

            <button style={carritou3} disabled={Intern>0?false:true} onClick={() => DoneDidNot(0)}>Cancelar</button>
            <button style={carritou2} disabled={Intern>0?false:true} onClick={() => TrueBuy(itemAR)}>Terminar Compra</button>
            
            <div style={ClassChange?null:carritouD}>
            
            <button className={'carritou'} disabled={count<1?true:false} onClick={() => DoneDidIt(count)}>Agregar al carrito</button>
            <button disabled={count>3?true:false} style={SUPERBOTON} onClick={prus}> + </button>
            <button disabled={count<1?true:false} style={SUPERBOTON} onClick={minus}> - </button>
            
            </div>

        </div>

    );
}

