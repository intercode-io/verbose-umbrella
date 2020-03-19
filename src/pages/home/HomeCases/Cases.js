import React, { Component } from "react";
import Swiper from 'react-id-swiper';
import Image from "react-bootstrap/Image";
import PhotoSliderDesktop from "./PhotoSliderDesktop";
import './CasesSection.scss'

import assetsDesktopRespage from '../../../assets/images/png/carousel/desktop/Respage.png';
import assetsDesktopPepTalkHer from '../../../assets/images/png/carousel/desktop/PepTalkHer.png';
import assetsMobileRespage from '../../../assets/images/png/carousel/mobile/respage.png';
import assetsMobilePepTalkHer from '../../../assets/images/png/carousel/mobile/PepTalkHer.png';

class Cases extends Component {

    constructor(props) {
        super(props);

        const imagesarray = [
            { id: 1, title: 'Respage', src: assetsDesktopRespage },
            { id: 2, title: 'PepTalkHer', src: assetsDesktopPepTalkHer }
        ];

        const swiperParams = {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
        };

        this.state = {
            images: imagesarray,
            swiperParams: swiperParams,
        }
    }

    render() {
        return (
            <div className="container-fluid" id="cases-section">
                <div className="row section-dimensions  cases-section">
                    <div className="container cases-section-inside section-dimensions">
                        <div className="row">
                            <div className="col-sm-12 cases-header">
                                <h2 className="section-header-text cases-header-text">Cases
                                    <span className="shadow-span shadow-h">Cases</span>
                                </h2>
                            </div>
                        </div>
                        <div className="row mobile-tablet-swiper">
                            <Swiper {...this.state.swiperParams}>
                                <div>
                                    <Image className="carousel-image"
                                        src={assetsMobileRespage}
                                        alt="" />
                                </div>
                                <div>
                                    <Image className="carousel-image"
                                        src={assetsMobilePepTalkHer}
                                        alt="" />
                                </div>
                            </Swiper>
                        </div>
                        <div className="row desktop-swiper">
                            <PhotoSliderDesktop images={this.state.images} />
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


export default Cases;