import React from 'react'


const footStyle = {

    position:'relative',
    display: 'flex',
    height: '4rem',
    width: '100%',
    backgroundColor: 'black',
    justifyContent:'center',
    color:'white',
    left:'0',
    bottom:'0',
    right:'0' 
}

export const Footer = () => {

    return (

        <section style={footStyle}>

            <h1>thanks for the visit!</h1>

        </section>

    )

}