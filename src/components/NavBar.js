import React from 'react';
import '../App.css'
import {CartW} from './CartW'

export const NavBar = () => {

    return (<div>

        <header id="nabar">

            <p id="nabarLogo"> nuke logo</p>

            <div id="nabarLink">

                <a href="">contacto</a>
                <a href="">popular</a>
                <a href="">pruebas</a>

            </div>

            <CartW/>

        </header>        


    </div>
    )
}