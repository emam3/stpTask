import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import CarousalM from './CarousalM';
import About from './AboutMobile';
import ColorS from './ColorS';
import Counter from './Counter';
import {Route} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }



  render() {
    return (
      <div>
        <CarousalM />
        <About />
        <Counter />
      </div>
    );
  }
}

export default App;