import React, { Component } from 'react';
import './../WeatherLocation/style.css';
import WeatherData from './../WeatherLocation/WeatherData'
import PropTypes from 'prop-types';

class ForeItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {weekDay,hour,data} = this.props
        return(
            <div>
                <div className="list-day"> {`${weekDay}:  ${hour} hs`} </div>
                <WeatherData data={data}/>
             </div>
        );
    }
}

ForeItem.propTypes = {
    weekDay : PropTypes.string.isRequired,
    hour :    PropTypes.number.isRequired,
    data:PropTypes.shape({
        temperature :   PropTypes.number.isRequired,
        weatherState :  PropTypes.string.isRequired,
        humidity :      PropTypes.number.isRequired,
        wind:           PropTypes.string.isRequired
    })
}
export default ForeItem;