import React, {Component} from "react";
import HomeNeurons from "./HomeNeurons/HomeNeurons";
import ServicesWeProvide from "./HomeServicesWeProvide/ServicesWeProvide";
import HomeCases from "./HomeCases/HomeCases";

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <HomeNeurons />
                <ServicesWeProvide />
                <HomeCases />
            </div>
        )
    }
}


export default HomePage;