import React from 'react';
import './NavBar.css'
import {CartW} from '../Cart/CartW'
import {NavLink} from 'react-router-dom'

export const NavBar = () => {

    return (
    <div>

        <header id="nabar">

            <p id="nabarLogo" ><NavLink to={'/'}>nuke logo</NavLink> </p>

            <div id="nabarLink">

                <div className="IMFALLING">

                    <a href="">filter</a>

                    <ul className="IFELL">
                        <li>RANGE</li>
                        <li><NavLink to={'/range/low'}>low</NavLink></li>
                        <li><NavLink to={'/range/long'}>long</NavLink></li>
                        <li><NavLink to={'/range/irrelevant'}>irrelevant</NavLink></li>
                    </ul>

                </div>
              
                <a href="">popular</a>
                <a href="">contact</a>

            </div>

            <CartW/>

        </header>        


    </div>
    )
}