import React, {Component} from "react";
import Swiper from 'react-id-swiper';
import Image from "react-bootstrap/Image";
import CasesImages from "./PhotoSliderDesktop";
import './CasesSection.scss'

class Cases extends Component {

    constructor(props) {
        const imagesarray = [
            {id: 1, title: 'Respage', src: "assets/images/desktop/Respage.png"},
            {id: 2, title: 'PepTalkHer', src: "/assets/images/desktop/PepTalkHer.png"}
        ];
        super(props);
        this.state = {
            images: imagesarray,
        }
    }

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
            <div className="row cases-section section-dimensions">
                <div className="col-12">
                    <div className="container-fluid cases-section-inside section-dimensions">
                        <div className="row">
                            <div className="col-sm-12 cases-header">
                                <h1>Cases<span className="cases-shadow-span">Cases</span></h1>
                            </div>
                        </div>
                        <div className="row mobile-tablet-swiper">
                            <Swiper {...params}>
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
                            <CasesImages images={this.state.images}/>
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