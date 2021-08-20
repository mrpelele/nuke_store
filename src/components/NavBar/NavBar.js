import React from 'react';
import './NavBar.css'
import {CartW} from '../Cart/CartW'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'

export const NavBar = () => {

    const nukeStoreIMG = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuclear_symbol.svg/1024px-Nuclear_symbol.svg.png'

    return (
    <div>

        <header id="nabar">

            <Link id="nabarLogo" to='../' ><img src={nukeStoreIMG} alt="cart" id="logo"></img></Link>

            <div id="nabarLink">

                <div className="dropdownMenu">

                    <a className={'linkStyle'} href="">filter</a>

                    <ul className="dropdownMenu-Content">
                        <li>RANGE</li>
                        <li><NavLink to={'/range/low'}>low</NavLink></li>
                        <li><NavLink to={'/range/long'}>long</NavLink></li>
                        <li><NavLink to={'/range/irrelevant'}>irrelevant</NavLink></li>
                    </ul>

                </div>
              
                <Link className={'linkStyle'} to='../check' >Check Order</Link>
                
                <Link className={'linkStyle'} to='../contact' >Contact</Link>

            </div>

            <CartW/>

        </header>        


    </div>
    )
}