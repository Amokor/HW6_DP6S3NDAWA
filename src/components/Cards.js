import React, { Component } from 'react';
import axios from 'axios'

export class Cards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             covid: []
        }
    }

    componentDidMount = () => {
        axios.get('https://corona.lmao.ninja/v2/countries/gh').then((res) => {
            this.setState({
                covid: res.data,
            });
        }).catch((err) => {
            console.log(err);
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    <div className="header">
                        <div>
                        <p id="logo">p</p>
                        </div>
                        <div className="text">
                        <p>PaSe Covid-19 App</p>
                        </div>
                        </div>
                        <div className="dashboard">
                        
                        <div className="cases">
                        <p className="def">Cases <i className="fa fa-caret-up fa-lg" /></p>
                        <span>{ this.state.covid.cases }</span> 
                        </div>
                        <div className="cases">
                        <p className="def"> Death <i className="fa fa-caret-up fa-lg" /></p>
                        <span>{ this.state.covid.deaths }</span>
                        </div>
                        <div className="cases">
                        <p className="def">Active<i className="fa fa-caret-up fa-lg" /></p>
                        <span>{ this.state.covid.active }</span>
                        </div>
                        <div className="cases">
                        <p className="def">Recovered <i className="fa fa-caret-down fa-lg" /></p>
                        <span>{ this.state.covid.recovered }</span>
                        </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default Cards
