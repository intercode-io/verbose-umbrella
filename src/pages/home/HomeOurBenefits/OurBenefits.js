import React, {Component} from "react";
import './OurBenefitsSection.scss'

class ServicesWeProvide extends Component {
    render() {
        return (
            <div className="swp-row">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 services-we-provide-header">
                            <h2 className="service-header-title">Services we provide</h2>
                        </div>
                    </div>
                    <div className="row services-list-row">
                        <div className="col-sm-12">
                            <div className="row services-first-row">
                                <div className="col-sm-12 col-md-6 col-lg-3 offset-lg-0 swp-item">
                                    <div className="blue-circles mobile-circle"></div>
                                    <p className="text service-title">Prototyping/MVP</p>
                                    <p className="text services-description">
                                        Quick transition - <br />
                                        from concept to working product
                                    </p>
                                </div>

                                <div className="col-sm-12 col-lg-3 offset-lg-1 mobile-dev-row-all swp-item">
                                    <div className="blue-circles mobile-circle"></div>
                                    <p className="text service-title">Mobile Development <br/> </p>
                                    <p className="text services-description">
                                        We ship world class applications for iOS and Android.
                                    </p>
                                </div>

                                <div className="col-sm-12 col-md-4 offset-md-2 col-lg-3 offset-lg-1 swp-item">
                                    <div className="blue-circles mobile-circle"></div>
                                    <p className="text service-title">Front-end Development</p>
                                    <p className="text services-description two-row-title-text">
                                        Development of complex cross-platform web apps for business and enterprise.
                                        We deliver rich, responsive, UX-friendly user interfaces that will meet business needs.
                                    </p>
                                </div>

                            </div>

                            <div className="row mobile-dev-row-tablet">
                                <div className="col-sm-12 col-md-11">
                                    <p>Mobile Development</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-3 offset-lg-2 swp-item">
                                    <div className="blue-circles mobile-circle"></div>
                                    <p className="text service-title">Back-end Development</p>
                                    <p className="text services-description two-row-title-text">
                                        Developing reliable, scalable and long-living servers and microservices
                                    </p>
                                </div>

                                <div className="col-sm-12 col-md-3 offset-lg-1 swp-item">
                                    <div className="blue-circles mobile-circle"></div>
                                    <p className="text service-title">Support</p>
                                    <p className="text services-description">
                                        Reliable support solutions
                                        over entire lifecycle of a software
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ServicesWeProvide;
