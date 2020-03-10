import React, {Component} from "react";
import Neurons from "./HomeNeurons/Neurons";
import './HomePage.scss'
import ServicesWeProvide from "./HomeServicesWeProvide/ServicesWeProvide";
import Cases from "./HomeCases/Cases";
import OurBenefits from "./HomeOurBenefits/OurBenefits";

class HomePage extends Component {
    render() {
        return (
            <div className="container home-container">
                <Neurons />
                <ServicesWeProvide />
                <Cases />
                <OurBenefits />
            </div>
        )
    }
}


export default HomePage;