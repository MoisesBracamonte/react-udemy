import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* Importar componentes */
import Location from './Location/index';
import WeatherData from './WeatherData/index';
import {CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    THUNDER,
    DRIZZLE  } from './../../constant/weatherConst';
import TransformWeather from './../../services/TransformWeather'; 
/* Importamos react materialize para dar estilo a nuestro proyecto */
import {Button,Row,Col} from 'react-materialize';
import './style.css';
import './style_media.css';

const apiKey=   '90e1c6e9bf8904bccf4916ffe69125f8';
const apiUrl =  'http://api.openweathermap.org/data/2.5/weather';

class WeatherLocation extends Component{
    constructor(props){
        // Utilizamos Promise : significa esperar  resultado a futuro con .then(function(params)).cath(function(params))
        super(props);
        this.state = {
            city : this.props.city,
            data : null
        }               
        this.getData =               this.getData.bind();
        this.getWeatherState =       this.getWeatherState.bind();
    }

    render(){
        return(
            <Row>                
                <Col l={12} m={12} s={12}>
                    <Col l={12} m={12} s={12} className="name-city light-blue darken-1">
                        <Location city = {this.state.city} /> 
                    </Col> 
                    { this.state.data ? <WeatherData data={this.state.data}/>  : ' Cargando información...'}
                </Col>
               <Col l={12} m={12} s={12}>
                    <Button className="boton-update" onClick={this.props.onPressWeatherL}>Ver inf.</Button>
              </Col>              
            </Row>
        );
    }
    /* -----------------FUNCIONES ----------------------------------------------------------------- */
    getWeatherState = weather => {
        if(weather < 300){
            return THUNDER;
        }else if(weather < 400){
            return DRIZZLE;
        }else if(weather < 600){
            return RAIN;
        }else if(weather < 700){
            return SNOW;
        }else if(weather === 800){
            return SUN;
        }else{
            return CLOUDY;
        }
    }

    getData = (dataEncode) => {
        return TransformWeather(dataEncode);
    }
    componentWillMount = () => {
        const {city} = this.state;
        const apiW =  `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
        return(
            fetch(apiW).then(data => {
                return data.json();
            }).then(dataEncode => {
                const data = this.getData(dataEncode);
                this.setState({data});           
            })
        );
    }
}   

WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired
}
export default WeatherLocation;