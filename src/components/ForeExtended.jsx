import React, { Component} from 'react';
import ForeItem from './ForeItem';
import TransFormFore from './../services/TransformFore';
import PropTypes from 'prop-types';
import {Row,Col,Preloader,ProgressBar} from 'react-materialize';
import './WeatherLocation/style.css';

const day = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
const apiKey=   '90e1c6e9bf8904bccf4916ffe69125f8';
const apiUrl =  'http://api.openweathermap.org/data/2.5/forecast';
class ForeExtended extends Component{
    constructor(props){
        super(props);
        this.state = {
                foreData : null
        }
        this.renderBarProgress = this.renderBarProgress.bind();
        this.handleWeekday =     this.handleWeekday.bind();
    }
    render(){        
        const style={ margin:"0px" }
        const {city} = this.props
        return(
            <div>
               <h3 style={style} >Pronostico extendido para : {city}</h3>
                <div className="container-item">
                    {this.renderBarProgress()}
                    </div>
            </div>
            
        );
    }
    /* Componente did mount se ejecuta despues del renderizado una unica vez*/
    componentDidMount(){
      this.UpdateForeItem(this.props.city);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.city != this.props.city){ // Si el props city es distinto al anterior actualizamos nuevamente los datos
            this.setState({foreData : null});
            this.UpdateForeItem(nextProps.city);
        }
    }

    UpdateForeItem(city){
        const weatherForeData = `${apiUrl}?q=${city}&appid=${apiKey}`;
        fetch(weatherForeData).then( data => { 
                return data.json() 
        }).then(dataDecode => {
            const foreData = TransFormFore(dataDecode);
            this.setState({foreData});
            console.log(foreData)
            
        })
    }
    renderBarProgress = () => {
        const {foreData} = this.state;
        if(foreData){
            return (this.handleWeekday(foreData));
        }else{
            return (
                <Row>
                    <Col s={12}>
                        <p>Cargando Inf.</p>
                        <ProgressBar/>
                    </Col>
                </Row>
            );
        }
            
    }
    handleWeekday(foreData){
        return foreData.map(foreData => 
            (<ForeItem  
                key={`${foreData.weekDay}${foreData.hour}`}
                data={foreData.data} 
                weekDay={foreData.weekDay} 
                hour={foreData.hour} />));
    }
}
ForeExtended.propTypes = {
    city: PropTypes.string.isRequired
}
export default ForeExtended;