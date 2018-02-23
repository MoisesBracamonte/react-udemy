import React from 'react';
import PropTypes from 'prop-types';
const WeatherExtraInfo = ({humidity,wind}) => (
    <div>
        {`${humidity}% | ${wind} wind` }
    </div>
);
WeatherExtraInfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    wind :     PropTypes.string.isRequired,
};
export default WeatherExtraInfo;