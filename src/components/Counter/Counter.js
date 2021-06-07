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
    height: "50%"

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

export const Counter = () => {

    const  [count,setCount] = useState (0);

    return (

        <div >

            <p className="XD">{count}</p>

            <button style={carritou}>Agregar al carrito</button>

            <button disabled={false} style={SUPERBOTON} onClick={() => setCount(count+1)}> + </button>
            <button disabled={false} style={SUPERBOTON} onClick={() => setCount(count-1)}> - </button>

            

        </div>

    );

}

/*if (count>'0') {count-1} else {count+0} */