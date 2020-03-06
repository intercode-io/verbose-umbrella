import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'swiper/css/swiper.css'


import './index.css';

import './styles/ComponentStyles/buttons.css'
import './styles/ComponentStyles/text.css'
import './styles/ComponentStyles/bootstrap-classes.css'
import './styles/ComponentStyles/gui-elements.css'

import './styles/HeaderSection.css'
import './styles/NeuronsSection.css'
import './styles/ServicesWeProvideSection.css'
import './styles/CasesSection.css'
import './styles/OurBenefitsSection.css'
import './styles/default-components.css'

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
