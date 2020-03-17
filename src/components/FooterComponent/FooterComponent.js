import React from 'react';
import './FooterComponent.scss'
import { ReactSVG } from "react-svg";

import assetsLogo from '../../assets/images/svg/InterCode_logo.svg'
import assetsFacebook from '../../assets/images/svg/social-media/facebook.svg'
import assetsInstagram from '../../assets/images/svg/social-media/instagram.svg'

const FooterComponent = () => {
    const isMobile = document.documentElement.clientWidth < 600;
    return (
        <div className="footer-container footer-dimensions" style={{
            position: isMobile ? "block" : "absolute",
            bottom: 0,
            left: 0,
            width: document.documentElement.clientWidth,
        }}>
            <div className="container footer-container-inside">
                <div className="row footer-row">
                    <div className="col-12 col-lg-4 footer-logo-mobile-container">
                        <ReactSVG
                            src={assetsLogo} />
                    </div>
                    <div className="col-4 footer-menu">
                        <div className="footer-menu-list">
                            <div className="footer-menu-item">
                                <a className="href-text" href="#cases-section">Cases</a></div>
                            <div className="footer-menu-item-2 href-text">Company</div>
                        </div>
                    </div>

                    <div className="col-md-4 footer-logo-tablet-container">
                        <ReactSVG
                            src={assetsLogo} />
                    </div>

                    <div className="col-4 offset-4 offset-md-0 footer-social-media">
                        <ReactSVG
                            src={assetsInstagram} />
                        <ReactSVG
                            src={assetsFacebook} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;
