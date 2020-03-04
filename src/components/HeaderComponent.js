import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";

class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <Navbar>
                    <div className="brand-container container">

                        <NavbarBrand className="top-menu-mobile">
                            <img src="../assets/images/mobile/menu.png"
                            alt="Menu"/>
                        </NavbarBrand>

                        <NavbarBrand className="desktop-menu">
                            <ul className="desktop-menu-list">
                                <li className="desktop-menu-item">Cases</li>
                                <li className="desktop-menu-item-2">Company</li>
                            </ul>
                        </NavbarBrand>

                        <NavbarBrand href="/" className="logo">
                            <img src="../assets/InterCode_Header.png" height="30" width="115"
                            alt="InterCode"/>
                        </NavbarBrand>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
