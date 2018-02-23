import React, { Component } from 'react';
import {CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    THUNDER,
    DRIZZLE  } from './../constant/weatherConst';
const  getWeatherState = weather => {
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
const TransformWeather = dataDecode => {
        const {humidity,temp} = dataDecode.main;
        const {id} =            dataDecode.weather[0];
        const { speed } =       dataDecode.wind;
        const weatherState =    getWeatherState(id);
        const data ={
            temperature :   temp,
            weatherState :  weatherState,
            humidity:       humidity,            
            wind :          `${speed} m/s`
        }
        return data;
}

export default TransformWeather;