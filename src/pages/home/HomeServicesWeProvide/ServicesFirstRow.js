import React, {Component} from "react";

class ServicesFirstRow extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="container">
                            <h3 className="service-header">Prototyping/MVP</h3>
                            <div className="row">
                                Quick transition -
                                from concept to working product
                            </div>
                        </div>
                    </div>

                    <div className="col-4 offset-1">
                        <div className="container">
                            <h3 className="service-header">Front-end Development</h3>
                            <div className="row">
                                Development of complex cross-platform web apps for business and enterprise.
                                We deliver rich, responsive, UX-friendly user interfaces that will meet business needs.

                            </div>
                        </div>
                    </div>

                    <div className="col-3 offset-1">
                        <div className="container">
                            <h3 className="service-header">Mobile Development</h3>
                            <div className="row">
                                We ship world class applications for iOS and Android.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}


export default ServicesFirstRow;
