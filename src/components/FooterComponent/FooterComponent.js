import React, {Component} from 'react';
import './FooterComponent.scss'

class FooterComponent extends Component {
    render() {
        return (
            <div className="footer-container footer-dimensions">
                <div className="container footer-container-inside">
                    <div className="row footer-row">
                        <div className="col-12 col-lg-4 footer-logo-mobile-container">
                            <img src="../assets/InterCode_Header.png" height="30" width="115"
                                 alt="InterCode"/>
                        </div>
                        <div className="col-4 footer-menu">
                            <ul className="footer-menu-list">
                                <li className="footer-menu-item">
                                    <a className="href-text" href="#cases-section">Cases</a></li>
                                <li className="footer-menu-item-2">Company</li>
                            </ul>
                        </div>

                        <div className="col-md-4 footer-logo-tablet-container">
                            <img src="../assets/InterCode_Header.png" height="30" width="115"
                                 alt="InterCode"/>
                        </div>

                        <div className="col-4 offset-4 offset-md-0 footer-social-media">
                            <img src="../assets/images/social-media/instagram.png"
                                 height="24" width="24"
                                 className="instagram-icon icon-style"
                                 alt="InterCode"/>
                            <img src="../assets/images/social-media/facebook.png"
                                 height="24" width="24"
                                 className="facebook-icon icon-style"
                                 alt="InterCode"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterComponent;
