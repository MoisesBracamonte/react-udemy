import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import {Button,Row,Col,Navbar,NavItem,Icon} from 'react-materialize';
import './App.css';

/* Importamos componentes  */
import LocationList from './components/LocationList';
import ForeExtended from './components/ForeExtended';
// Ciudades 
const cities = [
  'Buenos Aires,arg',
  'Bogotá,col',
  'Santiago,cl',
  'Madrid,es'
];
class App extends Component {
  constructor(props){
    super(props);
    this.state ={ city : null };
  }

  handleOnSelectedCity = city => {
    this.setState({ city });
  }
  render() {
    const style={
      margin:"0px"
    }
    return (
      <div className="App">
      <Navbar brand='Weather App' right className="navbar-app">
      </Navbar>
      <Row>
        <Col l={4} m={12} s={12} className="container-ll">
            <LocationList   
            cities={cities}
            onSelectedCity = {this.handleOnSelectedCity}
            />
        </Col>
        
        <Col l={8} m={12} s={12}  className="container-extendend">
        {
          this.state.city === null ? <div ><h3 style={style} >Not city</h3></div> : <ForeExtended city={this.state.city}/>
        }
        </Col>
      </Row>      
      </div>
    );
  }
 

}
App.propTypes = { cities : PropTypes.array};
export default App;
