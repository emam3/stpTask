import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import ColorS from './ColorS';

class CarousalM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '' ,
      colorHolder: ''

    };

    this.changeColor = this.changeColor.bind(this)
    this.changeMain = this.changeMain.bind(this)
  }

  changeColor(color) {
    let colornew = color
    this.setState({ colorHolder: colornew })
  }

  changeMain(){
    let mainC = this.state.colorHolder ;
    this.setState({color:mainC})
  }

  render() {
    let style = `color:${this.state.color}`
    return (
      <div Style={style}>

        <div id="carouselExampleIndicators" class="carousel slide d-none d-lg-block" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://i.imgur.com/fMojzIX.jpg" class="d-block w-100 tales" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <span className="fa-layers fa-fw"> </span>
                <h5 Style={style}>Vision</h5>
                <p Style={style}>To be a Leading organization working on developing youth who will lead positive changes.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://i.imgur.com/fMojzIX.jpg" class="d-block w-100 tales" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5 Style={style}>Mission</h5>
                <p Style={style}>To develop youth in various fields personally and
                technically through academic programs, projects,
                and events in a values oriented system,
                to take our part in providing a generation capable of playing its roles
          effictively towards itself, community and country. </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://i.imgur.com/fMojzIX.jpg" class="d-block w-100 tales" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5 Style={style}>Abou us!</h5>
                <p Style={style}>STP was founded in 2006 at Cairo university; The purpose of STP is to
                strengthen the leadership, skills,
                effectiveness and efficiency of involved people; enabling them to
                further enrich the quality of the community and their personal life.</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <ColorS changeColor={this.changeColor} changeMain={this.changeMain} />

      </div>

    );
  }
}

export default CarousalM;


/*


**/