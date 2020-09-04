import React from 'react';
import { render } from '@testing-library/react';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min";

// change color for mobile

class ColorSM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorM: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault();
}

handleChange(e) {
    let colorn = e.target.value;
    this.setState({ color: colorn })
    this.props.changeColor(colorn)
    console.log("color from colorS : " + colorn)
}


  render() {
    return (
        <div class="container d-lg-none">
        <h3 >Style it yourself!</h3>
        <form onSubmit={this.handleSubmit}>
            <div class="form-row no-gutters">
                <div class="col">
                    <input type="text" class="form-control" placeholder="First name" onChange={this.handleChange} />
                </div>
                <div class="col">
                </div><div class="col">
                </div>
            </div>
        </form>
    </div>
    );
  }
}

export default ColorSM;