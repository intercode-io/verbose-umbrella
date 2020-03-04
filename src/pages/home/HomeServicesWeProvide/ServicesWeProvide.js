import React, {Component} from "react";
import ServicesFirstRow from "./ServicesFirstRow";
import ServicesSecondRow from "./ServicesSecondRow";

class ServicesWeProvide extends Component {
    render() {
        return (
            <div className="container">
                <div className="services-we-provide-section">
                    <div className="row swp-top-text">
                        <div>
                            <h2 className="service-header-title">Services </h2>
                        </div>
                    </div>
                    <div className="row">
                        {/*<ServicesFirstRow />*/}
                    </div>
                    <div className="row second-row-services">
                        {/*<ServicesSecondRow />*/}
                    </div>
                </div>
            </div>
        )
    }
}


export default ServicesWeProvide;
