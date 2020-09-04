import React from 'react';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './ColorS.css';
import Counter from './Counter';


class ColorS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ''
        };
        this.handleChange =
            this.handleChange.bind(this)
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
            <div Style="width:auto;height:200px;background-color:#eee">
                <div class="container d-none d-lg-block" >
                    <h3 >Style it yourself!</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-row no-gutters">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Type color name or hash!" onChange={this.handleChange} />
                            </div>
                            <button type="button" class="btn btn-light" onClick={this.props.changeMain}>Style</button>
                            <div class="col">
                            </div><div class="col">
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default ColorS;