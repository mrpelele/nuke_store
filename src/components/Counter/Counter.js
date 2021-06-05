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

export const Counter = () => {

    const  [count,setCount] = useState (0);

    return (

        <div >

            <p className="XD">{count}</p>

            <button style={SUPERBOTON} onClick={() => setCount(count+1)}> + </button>
            <button style={SUPERBOTON} onClick={() => setCount(count-1)}> - </button>

        </div>

    );

}
