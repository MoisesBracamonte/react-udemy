import React from 'react';
// Importamos iconos de weather icons
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD,
        CLOUDY,
        SUN,
        RAIN,
        SNOW,
        WINDY,
        THUNDER,
        DRIZZLE      
    } from './../../../../constant/weatherConst';


const getWeatherIcons = weatherState => {
switch(weatherState){
      case CLOUD:
          return 'cloud';
          break;
      case CLOUDY:
          return 'cloudy';
          break;
      case SUN:
          return 'day-sunny';
          break;
      case RAIN:
          return 'rain';
          break;
      case SNOW:
          return 'snow';
          break;
      case WINDY:
          return 'windy';
          break;
      case THUNDER:
          return 'day-thunderstorm';
          break;
      case DRIZZLE:
          return 'day-showers';
          break;
      default:
          return 'day-sunny';      
    }
}
const getWeatherState = weatherState => {
    return (<WeatherIcons className="wicons" name={getWeatherIcons(weatherState)} size="2x" />);
}
// Componente
const WeatherTemperature = ({temperature,weatherState}) => (
        <div>
            {getWeatherState(weatherState)}          
            <span>{`${temperature} c°`}</span>
        </div>
      );

WeatherTemperature.propTypes = {
    temperature:    PropTypes.number.isRequired,
    weatherState:   PropTypes.string,
};
export default WeatherTemperature;