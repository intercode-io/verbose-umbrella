import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Swiper from 'react-slider-swiper';
import Swiper from 'react-id-swiper';
import Image from "react-bootstrap/Image";

class HomeCases extends Component {
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
        }
        return (

            <div className="row cases-section">
                <div className="col-12">
                    <div className="container-fluid cases-section-inside">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col- col-lg-12 cases-header">
                                <h1>Cases<span className="cases-shadow-span">Cases</span></h1>
                            </div>
                        </div>
                        <div className="row mobile-tablet-swiper">
                            <Swiper {...params}>
                                    <div>
                                        <Image src="../assets/images/mobile/Carousel/1.png"
                                             alt="" style={{flex: 1, resizeMode: 'stretch', width: '100%'}}/>
                                    </div>
                                    <div>
                                        <Image src="../assets/images/mobile/Carousel/2.png"
                                               alt="" style={{flex: 1, resizeMode: 'stretch', width: '100%'}}/>
                                    </div>
                            </Swiper>
                        </div>
                        <div className="row cases-view-more">
                            <h1 className="cases-view-more-text">VIEW MORE</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default HomeCases;