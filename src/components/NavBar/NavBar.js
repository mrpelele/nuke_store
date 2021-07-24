import React from 'react';
import './NavBar.css'
import {CartW} from '../Cart/CartW'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'

export const NavBar = () => {

    const nukeStoreIMG = 'https://png2.cleanpng.com/sh/c22ba1f39d4f32e217847032b4f39a9b/L0KzQYq3VME0N5RujJH0aYP2gLBuTflwdppBgdDwLYLkdLrolPlwdl57fdV9b4Kwd8PokPhqa6QyitNtaXBkc8XwlvUubJZoReRqZHnycbT7igZmNaR7f595bnewebT2jr1nepZqRdZ4d37vf7LrTcU0O2g4TZ8AY3K1R4q9hsA4OGUASJCANEC4QYmBUME2PWY3SKI8NkezQomBTwBvbz==/kisspng-ionizing-radiation-vector-graphics-radioactive-dec-radioactive-svg-png-icon-free-download-533735-5cb2796f070490.5405188015552003670288.png'

    return (
    <div>

        <header id="nabar">

            <Link id="nabarLogo" to='../' ><img src={nukeStoreIMG} alt="cart" id="logo"></img></Link>

            <div id="nabarLink">

                <div className="dropdownMenu">

                    <a href="">filter</a>

                    <ul className="dropdownMenu-Content">
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