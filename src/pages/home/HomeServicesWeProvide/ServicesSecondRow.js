import React, {Component} from "react";

class ServicesSecondRow extends Component {
    render() {
        return (
                <div className="container">
                    <div className="row">

                        <div className="col-3 offset-2">
                            <h3 className="service-header">Back-end development</h3>
                            <div className="row">
                                Developing reliable, scalable and long-living servers and microservices
                            </div>
                        </div>

                        <div className="col-3 offset-2">
                            <h3 className="service-header">Support</h3>
                            <div className="row">
                                Reliable support solutions
                                over entire lifecycle of a software
                            </div>
                        </div>

                    </div>
                </div>
        )
    }
}


export default ServicesSecondRow;
