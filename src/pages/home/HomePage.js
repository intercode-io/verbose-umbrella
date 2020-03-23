import React from "react";
import Neurons from "./HomeNeurons/Neurons";
import './HomePage.scss'
import ServicesWeProvide from "./HomeServicesWeProvide/ServicesWeProvide";
import Cases from "./HomeCases/Cases";
import OurBenefits from "./HomeOurBenefits/OurBenefits";
import QuestionSection from "./HomeQuestions/QuestionSection";

import FooterComponent from "../../components/FooterComponent/FooterComponent";

const HomePage = () => {
    return (
        <>
            <Neurons/>
            <ServicesWeProvide/>
            <Cases/>
            <OurBenefits/>
            <QuestionSection/>
            <FooterComponent/>
        </>

    );
};


export default HomePage;