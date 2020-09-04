import React from 'react';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './About.css';
import ColorSM from './ColorSM';



class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorMobile: ''
        };

        this.changeColor = this.changeColor.bind(this)
    }

    changeColor(color) {
        let colornew = color
        this.setState({ colorMobile: colornew })
        console.log("hi from inside About Mobile : " + colornew)
    }


    render() {
        let style= `color:${this.state.colorMobile}`
        return (
            <div class="container-fluied d-lg-none" Style="background-color:#e9e9e9;padding-left:50px">

                <div class="row no-gutters" >

                    <div class="col">
                        <h1 Style={style}>About us!</h1>
                        <p className="mobileP" Style={style}>STP was founded in 2006 at Cairo university; The purpose of STP is to
                        strengthen the leadership, skills,
                        effectiveness and efficiency of involved people; enabling them to
                        further enrich the quality of the community and their personal life.
                        </p>

                        <li><h5 Style={style}>Vision</h5></li>
                        <p className="mobileP" Style={style}>
                            To be a Leading organization working on developing youth who will lead positive changes.
                        </p>

                        <li> <h5 Style={style}>Mission</h5></li>
                        <p className="mobileP" Style={style}>
                            To develop youth in various fields personally and technically through academic programs,
                            projects, and events in a values oriented system, to take our part
                            in providing a generation capable of playing
                            its roles effictively towards itself, community and country.
                        </p>

                    </div>

                    <div class="col">
                        <img src="https://i.imgur.com/pzwEkp3.jpg" class="img-responsive" Style="Padding:50px" />
                    </div>

                </div>

                <ColorSM changeColor={this.changeColor} />

            </div>
        );
    }
}

export default About;