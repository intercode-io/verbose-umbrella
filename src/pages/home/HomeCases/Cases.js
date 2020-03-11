import React, {Component} from "react";
import Swiper from 'react-id-swiper';
import Image from "react-bootstrap/Image";
import PhotoSliderDesktop from "./PhotoSliderDesktop";
import './CasesSection.scss'

class Cases extends Component {

    constructor(props) {
        super(props);

        const imagesarray = [
            {id: 1, title: 'Respage', src: "assets/images/desktop/Respage.png"},
            {id: 2, title: 'PepTalkHer', src: "/assets/images/desktop/PepTalkHer.png"}
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
            <div className="container-fluid">
                <div className="row section-dimensions  cases-section">
                    <div className="container cases-section-inside section-dimensions">
                        <div className="row">
                            <div className="col-sm-12 cases-header">
                                <h1 className="section-header-text cases-header-text">Cases
                                    <span className="cases-shadow-span shadow-span">Cases</span></h1>
                            </div>
                        </div>
                        <div className="row mobile-tablet-swiper">
                            <Swiper {...this.state.swiperParams}>
                                <div>
                                    <Image className="carousel-image"
                                           src="../assets/images/mobile/Carousel/1.png"
                                           alt=""/>
                                </div>
                                <div>
                                    <Image className="carousel-image"
                                           src="../assets/images/mobile/Carousel/2.png"
                                           alt=""/>
                                </div>
                            </Swiper>
                        </div>
                        <div className="row desktop-swiper">
                            <PhotoSliderDesktop images={this.state.images}/>
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