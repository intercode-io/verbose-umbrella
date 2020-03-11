import React, {Component} from "react";
import Neurons from "./HomeNeurons/Neurons";
import './HomePage.scss'
import ServicesWeProvide from "./HomeServicesWeProvide/ServicesWeProvide";
import Cases from "./HomeCases/Cases";
import OurBenefits from "./HomeOurBenefits/OurBenefits";
import QuestionSection from "./HomeQuestions/QuestionSection";

class HomePage extends Component {
    render() {
        return (
            <>
                <Neurons />
                <ServicesWeProvide />
                <Cases />
                <OurBenefits />
                <QuestionSection />
            </>
        )
    }
}


export default HomePage;