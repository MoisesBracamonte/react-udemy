import React from 'react';
/** Importar componentes  */
import WeatherTemp from './WeatherTemperature/index';
import WeatherExtraInf from './WeatherExtraInfo/index';
import PropTypes from 'prop-types';
/* Importamos materialize para dar estilo */
import {Row,Col} from 'react-materialize';
const WeatherData = ({data}) =>{ // Pasamos parametro por structuring
    const {temperature,weatherState,humidity,wind} = data; // Creamos variable con structuring
    return ( 
            <div>
            <Row>
            <Col l={12} m={12} s={12} className="container-temp">
            <WeatherTemp temperature={temperature} weatherState = {weatherState} />
            </Col>
            <Col l={12} m={12} s={12} className="container-info">            
            <WeatherExtraInf  humidity={humidity}  wind={wind} />
            </Col>
            </Row>
            </div>

)
};

// Creacion de propstypes.shape
WeatherData.propTypes = {
    data:PropTypes.shape({
        temperature :   PropTypes.number.isRequired,
        weatherState :  PropTypes.string.isRequired,
        humidity :      PropTypes.number.isRequired,
        wind:           PropTypes.string.isRequired
    })
}
export default WeatherData;