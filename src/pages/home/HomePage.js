import React, { useState } from "react";
import Neurons from "./HomeNeurons/Neurons";
import './HomePage.scss'
import ServicesWeProvide from "./HomeServicesWeProvide/ServicesWeProvide";
import Cases from "./HomeCases/Cases";
import OurBenefits from "./HomeOurBenefits/OurBenefits";
import QuestionSection from "./HomeQuestions/QuestionSection";

import Swiper from 'react-id-swiper';

const HomePage = () => {
    const [swiper, setSwiper] = useState(null);
    const isMobile = document.documentElement.clientWidth < 600;
    return (
        <>
            <div>
                {isMobile
                    ? (
                        <>
                            <Neurons />
                            <ServicesWeProvide />
                            <Cases />
                            <OurBenefits />
                            <QuestionSection />
                        </>
                    )
                    : (
                        <Swiper
                            getSwiper={setSwiper}
                            autoHeight
                            direction="vertical"
                            slideClass={"home-slide"}
                            mousewheel
                            speed={700}
                        >
                            <div>
                                <Neurons swiper={swiper} />
                            </div>
                            <div>
                                <ServicesWeProvide />
                            </div>
                            <div>
                                <Cases />
                            </div>
                            <div>
                                <OurBenefits />
                            </div>
                            <div>
                                <QuestionSection />
                            </div>
                        </Swiper>
                    )}
            </div>
        </>
    );
};


export default HomePage;