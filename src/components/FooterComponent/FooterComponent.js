import React, {Component} from 'react';
import './FooterComponent.scss'
import {ReactSVG} from "react-svg";

import assetsLogo from '../../assets/images/svg/InterCode_logo.svg'
import assetsFacebook from '../../assets/images/svg/social-media/facebook.svg'
import assetsInstagram from '../../assets/images/svg/social-media/instagram.svg'

class FooterComponent extends Component {
    render() {
        return (
            <div className="footer-container footer-dimensions">
                <div className="container footer-container-inside">
                    <div className="row footer-row">
                        <div className="col-12 col-lg-4 footer-logo-mobile-container">
                            <ReactSVG
                                src={assetsLogo} />
                        </div>
                        <div className="col-4 footer-menu">
                            <ul className="footer-menu-list">
                                <li className="footer-menu-item">
                                    <a className="href-text" href="#cases-section">Cases</a></li>
                                <li className="footer-menu-item-2">Company</li>
                            </ul>
                        </div>

                        <div className="col-md-4 footer-logo-tablet-container">
                            <ReactSVG
                                src={assetsLogo} />
                        </div>

                        <div className="col-4 offset-4 offset-md-0 footer-social-media">
                            <ReactSVG
                                src={assetsInstagram}/>
                            <ReactSVG
                                src={assetsFacebook}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterComponent;
