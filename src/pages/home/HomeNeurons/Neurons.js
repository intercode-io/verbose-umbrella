import React, { Component } from "react";
import Header from "../../../components/HeaderComponent/HeaderComponent";
import Jumbotron from "react-bootstrap/Jumbotron";
import './NeuronsSection.scss'
import Button from "react-bootstrap/Button";
import { ReactSVG } from 'react-svg';
import assetsNeuronsImage from '../../../assets/images/svg/brain_image.svg';
import assetsDecorLine from '../../../assets/decorations/lines/explore-line.svg';

class Neurons extends Component {
    render() {
        return (
            <div className='container'>

                <div className="row neurons-section section-dimensions">
                    <div className="col-12">
                        <Header {...this.props} />

                        <Jumbotron className="neurons-section-inside">

                            <div className="container-fluid">
                                <div className="row neurons-content-row">
                                    <div className="col-sm-12 col-lg-7">
                                        <div className="row">
                                            <div className="col-sm-12 neurons-image-container">
                                                <ReactSVG
                                                    beforeInjection={svg => {
                                                        svg.classList.add('neurons-image')
                                                    }}
                                                    src={assetsNeuronsImage}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-5">
                                        <div className="row neurons-text-and-button-row">
                                            <div className="header-text-group col-sm-12 col-md-8 col-lg-auto">
                                                <h1 className="header-text-neurons">Our Neurons <br /> Work For You</h1>
                                            </div>

                                            <div className="button-container col-sm-12 col-md-4 col-lg-auto">
                                                <img className="decor-explore"
                                                    src={assetsDecorLine}
                                                    alt="" />
                                                <Button
                                                    className="btn-big button-text"
                                                    onClick={() => {
                                                        if (this.props.swiper) {
                                                            this.props.swiper.slideNext();
                                                        }
                                                    }}
                                                >
                                                    {"EXPLORE"}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Jumbotron>
                    </div>
                </div>
            </div>
        )
    }
}


export default Neurons;