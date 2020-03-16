import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import './HeaderSection.scss'

class Header extends Component {
    render() {
        return (
            <Navbar>
                <div className="brand-container container">

                    <NavbarBrand className="top-menu-mobile">
                        <img src="../assets/images/mobile/menu.png"
                             alt="Menu"/>
                    </NavbarBrand>

                    <NavbarBrand className="desktop-menu">
                        <ul className="desktop-menu-list">
                            <li className="desktop-menu-item">
                                <a className="href-text" href="#cases-section">Cases</a></li>
                            <li className="desktop-menu-item-2">
                                <a className="href-text" href="">Company</a></li>
                        </ul>
                    </NavbarBrand>

                    <NavbarBrand href="/" className="logo">
                        <img src="../assets/InterCode_Header.png" height="30" width="115"
                             alt="InterCode"/>
                    </NavbarBrand>
                </div>
            </Navbar>
        );
    }
}

export default Header;
