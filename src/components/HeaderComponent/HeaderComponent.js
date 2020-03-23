/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import './HeaderSection.scss'
import assetsMobileMenu from '../../assets/decorations/mobile/menu.svg'
import assetsLogo from '../../assets/images/svg/InterCode_logo.svg'
import {ReactSVG} from "react-svg";

class Header extends Component {
    render() {
        return (
            <Navbar>
                <div className="brand-container container">

                    <NavbarBrand className="top-menu-mobile">
                        <ReactSVG src={assetsMobileMenu}/>
                    </NavbarBrand>

                    <NavbarBrand className="desktop-menu">
                        <ul className="desktop-menu-list">
                            <li className="desktop-menu-item">
                                <a className="href-text" href="#cases-section">
                                    {"Cases"}
                                </a>
                            </li>
                            <li className="desktop-menu-item-2 invisible">
                                <a className="href-text" href="">
                                    {"Company"}
                                </a>
                            </li>
                        </ul>
                    </NavbarBrand>

                    <NavbarBrand href="/" className="logo">
                        <ReactSVG src={assetsLogo}/>
                    </NavbarBrand>
                </div>
            </Navbar>
        );
    }
}

export default Header;
