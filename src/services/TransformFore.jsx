import Moment from 'moment';
import 'moment/locale/es';
import TransformWeather from './../services/TransformWeather'
/* Creamos una funcion */

const TransFormFore = data =>(
    /* Aplicamos filtro para traernos la hora que queremos mostrar */
    data.list.filter(item => (
        Moment.unix(item.dt).hour() === 6  ||
        Moment.unix(item.dt).hour() === 12 ||
        Moment.unix(item.dt).hour() === 15 
         
    )).map( item => (
        {
            weekDay : Moment.unix(item.dt).format('ddd'),
            hour :    Moment.unix(item.dt).hour(),
            data :    TransformWeather(item)       
        }
    ))
);   
export default TransFormFore;
