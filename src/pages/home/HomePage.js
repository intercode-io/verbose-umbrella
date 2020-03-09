import React, {Component} from "react";
import Neurons from "./HomeNeurons/Neurons";
import ServicesWeProvide from "./HomeServicesWeProvide/ServicesWeProvide";
import Cases from "./HomeCases/Cases";
import './HomePage.scss'

class HomePage extends Component {
    render() {
        return (
            <div className="container home-container">
                <Neurons />
                <ServicesWeProvide />
                <Cases />
            </div>
        )
    }
}


export default HomePage;