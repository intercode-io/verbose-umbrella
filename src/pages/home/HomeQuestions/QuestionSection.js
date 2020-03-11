import React, {Component} from "react";
import './QuestionSection.scss'

class QuestionSection extends Component {

    render() {

        return (
            <div className="container section-dimensions question-section test">
                <div className="row test">
                    <div className="col-sm-12">
                        <h3 className="section-header questions-header">Have any questions?</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 offset-3 d-flex justify-content-center text-center
                                    col-md-12 offset-md-0
                                    justify-content-lg-start">
                        <p className="info-text justify-content-end">Here few ways to get in touch with us</p>
                    </div>
                </div>
                <div className="row message-us-part">
                    <div className="col-6 offset-1">
                        <h4 className="text msg-text">Message us</h4>
                    </div>
                    <form className="col-10 offset-1 text-input-form">
                        <input type="text"
                               name="name"
                               placeholder="Name"
                               className="input-form"
                            // value={this.state.formControls.name.value}
                            // onChange={this.changeHandler}
                        />

                        <input type="email"
                               name="email"
                               placeholder="Email"
                               className="input-form"
                            // value={this.state.formControls.email.value}
                            // onChange={this.changeHandler}
                        />

                        <textarea name="name"
                                  placeholder="Message"
                                  className="input-form"
                            // value={this.state.formControls.name.value}
                            // onChange={this.changeHandler}
                        />

                        <div className="button-container">
                            <button className="send-btn send-btn-margins button-text">SEND</button>
                        </div>
                    </form>
                </div>
                <div className="row contact-form">
                    <div className="col-12">
                        <p className="contact-title">Our phone</p>
                        <p className="text1">+380000000000</p>
                    </div>
                    <div className="col-12">
                        <p className="contact-title">Our email</p>
                        <p className="text1">potrpots@gmail.com</p>
                    </div>
                    <div className="col-12">
                        <p className="contact-title">Our office</p>
                        <p className="text1">United Kingdom  99 Staple <br/> Hill Road, Bristol, BS16 5AD</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default QuestionSection;
