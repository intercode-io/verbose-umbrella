import React, {Component} from "react";
import Header from "../../../components/HeaderComponent";
import Jumbotron from "react-bootstrap/Jumbotron";

class HomeNeurons extends Component {
    render() {
        return (

            <div className="neurons-section row">
                <div className="col-12">
                    <Jumbotron className="neurons-section-inside">
                        <div className="">
                            <Header/>

                            <div className="container top-text-row">

                                <div className="row">
                                    <div className="neurons-image-container col-sm-12 col-md-6 col-lg-1">
                                        <img className="neurons-image"
                                             src="../assets/images/brain_image.png"
                                             alt=""/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="neurons-text-button">
                                        <div className="header-text-group col-sm-12 col-md-6 col-lg-1">
                                            <h1 className="header-text">Our Neurons <br/> Work For You</h1>
                                        </div>

                                        <div className="button-container col-sm-12 col-md-6 col-lg-1">
                                            <button className="btn-big button-text">EXPLORE</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/*<div className="col-7 d-flex  justify-content-end">*/}
                            {/*    /!*<img src="assets/images/section-1/brain_image.png"/>*!/*/}
                            {/*</div>*/}
                        </div>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}


export default HomeNeurons;