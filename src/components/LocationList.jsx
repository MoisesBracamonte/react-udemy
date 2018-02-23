import React, { Component } from 'react';
import WeatherLocation from './WeatherLocation/index';
import {Button,Row,Col} from 'react-materialize';
import './WeatherLocation/style.css';
class LocationList extends Component{
    constructor(props){       
        super(props);      
        this.state ={
            cities : this.props.cities,
        }
        this.componentCities = this.componentCities.bind();
      //  this.handleWeatherL  = this.handleWeatherL.bind(this);
    }
    render(){
        return(
            <div>
                {this.componentCities(this.state.cities)}
             </div>
        );
    }

    componentCities = cities => {
         return(
            cities.map((c,i) => (                
                <WeatherLocation
                    onPressWeatherL={() => this.handleWeatherL(c)}
                    key={i} 
                    city={c}/>
            ))
        );
    }
    handleWeatherL = city => {
        {this.props.onSelectedCity(city)}
    }
}

export default LocationList