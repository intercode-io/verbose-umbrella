import React, {Component} from "react";
import Neurons from "./HomeNeurons/Neurons";
import ServicesWeProvide from "./HomeServicesWeProvide/ServicesWeProvide";
import Cases from "./HomeCases/Cases";

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <Neurons />
                <ServicesWeProvide />
                <Cases />
            </div>
        )
    }
}


export default HomePage;