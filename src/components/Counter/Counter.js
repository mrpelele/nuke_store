import './Counter.css'
import React, {useState} from 'react'

const SUPERBOTON = {

    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    border: "none",
    backgroundColor: "white",
    color: "black",
    fontSize: "1.5rem",
    textAlign: "center",
    textDecoration: "none",
    width: "3rem",
    height: "50%",
    '& > SUPERBOTON.disabled': {

        backgroundColor: "gray"

    }
};

const carritou = {

    display:"flex",
    position: "absolute",
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white",
    left: "45%",
    top: "0%",
    height: "100%",
    width:"40%",
    borderStyle:"none"

};

export function Counter({prus,minus,count}) {

    function buy() {

        alert("you added "+count+" unit/s to the cart")

    }

    /* return */

    return (

        <div >

            <p className="XD">{count}</p>

            <button style={carritou} onClick={buy}>Agregar al carrito</button>

            <button disabled={count>3?true:false} style={SUPERBOTON} onClick={prus}> + </button>
            <button disabled={count<1?true:false} style={SUPERBOTON} onClick={minus}> - </button>

                

        </div>

    );
}

