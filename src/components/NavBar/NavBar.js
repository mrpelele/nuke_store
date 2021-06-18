import React from 'react';
import './NavBar.css'
import {CartW} from '../Cart/CartW'
import {NavLink} from 'react-router-dom'

export const NavBar = () => {

    return (<div>

        <header id="nabar">

            <p id="nabarLogo" ><NavLink to={'/'}>nuke logo</NavLink> </p>

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