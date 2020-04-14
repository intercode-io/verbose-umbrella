import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/swiper.css'


import './index.scss';

import './styles/sections-styles.scss'
import './styles/default-components.scss'

import './styles/ComponentStyles/buttons.scss'
import './styles/ComponentStyles/text.scss'
import './styles/ComponentStyles/gui-elements.scss'

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
