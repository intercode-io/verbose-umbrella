import React, {Component} from "react";
import HomeNeurons from "./HomeNeurons/HomeNeurons";
import ServicesWeProvide from "./HomeServicesWeProvide/ServicesWeProvide";

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <HomeNeurons />
                <ServicesWeProvide />
            </div>
        )
    }
}


export default HomePage;