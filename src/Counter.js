import React from 'react';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min";




class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date11: '',
            date22: '',
            date1: '',
            date2: '',
            date3: '',
            startCounting: false,
            youtTimer: ''
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault();
        let MainD1 = new Date(this.state.date11).getTime()
        let MainD2 = new Date(this.state.date22).getTime()
        this.setState({ date1: MainD1, date2: MainD2 })
        let countDownDate3 = MainD2 - MainD1;
        this.setDate3(countDownDate3)
        console.log(this.state.date3)
        this.setState({ startCounting: true })
        this.startCounting();
    }

    setDate3(date) {
        this.setState({ date3: date })

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    startCounting() {
        setInterval(() => {
            let dateNow = this.state.date3
            let days = Math.floor(dateNow / (1000 * 60 * 60 * 24));
            let hr = Math.floor((dateNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let min = Math.floor((dateNow % (1000 * 60 * 60)) / (1000 * 60));
            let sec = Math.floor((dateNow % (1000 * 60)) / 1000);
            this.setState({youtTimer: days + "d " + hr + "h "+ min + "m " + sec + "s" })
            dateNow = dateNow -1000 ;
            this.setState({date3 : dateNow})
            if (dateNow < 0) {
                this.setState({youtTimer: "We're done!" })
            }

        }, 1000)
    }

    render() {
        return (
            <div class="container">
                <form onSubmit={this.startCounting}>
                    <div class="form-row no-gutters">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="ex : Jan 5, 2021 15:37:25" Name="date11" onChange={this.handleChange} />
                            <input type="text" class="form-control" placeholder="ex : sep 21, 2022 15:37:25" Name="date22" onChange={this.handleChange} />
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-light" onClick={this.handleSubmit}>sub</button>
                        </div><div class="col">
                        </div>
                    </div>
                </form>
                <p>Note : Date should be written as it's shown in the examples or you won't get the countdown</p>
                <h1> {this.state.youtTimer } </h1>
            </div>
        );
    }
}

export default Counter;