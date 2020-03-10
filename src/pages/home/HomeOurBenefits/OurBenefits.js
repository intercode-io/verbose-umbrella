import React, {Component} from "react";
import './OurBenefitsSection.scss'
import Swiper from "react-id-swiper";
import Image from "react-bootstrap/Image";

class OurBenefits extends Component {
    render() {
        const params = {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
        };

        return (
            <div className="section-dimensions benefits-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="section-header">Our benefits</h2>
                        </div>
                    </div>
                    <div className="row benefits-row">
                        <div className="col-sm-12 our-benefits-mobile">
                            <Swiper {...params}>
                                <div className="benefit-item">
                                    <h3>High quality code</h3>
                                    <br/>
                                    <p>Our professionals are <br/>following industry <br/>standards and
                                        <br/>having many years <br/>expertise in software <br/>development.
                                    </p>
                                </div>
                                <div className="benefit-item">
                                    <h3>Business analysis</h3>
                                    <br/>
                                    <p>Understanding of a business side <br/>is crucial for software <br/>development.
                                        <br/>We discuss, plan, iterate in close <br/>communication with <br/>stakeholders
                                        to make final <br/>product matching expectations.
                                    </p>
                                </div>
                                <div className="benefit-item">
                                    <h3>Dedicated team</h3>
                                    <br/>
                                    <p>Build your own flexible remote <br/>development team
                                        <br/>involving best engineers
                                    </p>
                                </div>
                            </Swiper>
                        </div>

                        <div className="col-md-4 col-lg-2 offset-lg-1 benefits-tablet benefits-first">
                            <h3>High quality code</h3>
                            <br/>
                            <p>Our professionals are following industry standards and
                                having many years expertise in software development.
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 offset-lg-2 benefits-tablet benefits-second">
                            <h3>Business analysis</h3>
                            <br/>
                            <p>Understanding of a business side is crucial for software development.
                                We discuss, plan, iterate in close communication with stakeholders
                                to make final product matching expectations.
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-2 offset-lg-1 benefits-tablet benefits-third">
                            <h3>Dedicated team</h3>
                            <br/>
                            <p>Build your own flexible remote development team
                                involving best engineers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default OurBenefits;
