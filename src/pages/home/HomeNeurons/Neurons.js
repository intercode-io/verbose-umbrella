import React, {Component} from "react";
import Header from "../../../components/HeaderComponent";
import Jumbotron from "react-bootstrap/Jumbotron";

class Neurons extends Component {
    render() {
        return (

            <div className="row neurons-section">
                <div className="col-12">
                    <Jumbotron className="neurons-section-inside">
                        <Header/>

                        <div className="container-fluid">

                            <div className="row neurons-content-row">
                                <div className="col-sm-12 col-md-12 col-lg-7">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 neurons-image-container">
                                            <img className="neurons-image"
                                                 src="../assets/images/brain_image.png"
                                                 alt=""/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-5">
                                    <div className="row neurons-text-and-button-row">
                                        <div className="header-text-group col-sm-12 col-md-8 col-lg-auto">
                                            <h1 className="header-text">Our Neurons <br/> Work For You</h1>
                                        </div>

                                        <div className="button-container col-sm-12 col-md-4 col-lg-auto">
                                            <img className="decor-explore"
                                                 src="../assets/decorations/lines/explore-line.png"
                                                 alt=""/>
                                            <button className="btn-big button-text">EXPLORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/*<div className="col-7 d-flex  justify-content-end">*/}
                        {/*    /!*<img src="assets/images/section-1/brain_image.png"/>*!/*/}
                        {/*</div>*/}
                    </Jumbotron>
                </div>
            </div>
        )
    }
}


export default Neurons;