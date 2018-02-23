import React from 'react';
import PropTypes from 'prop-types';
const Location = ({city}) => ( // Aplicamos destructurin para pasar parametro      
      <div className="container-L">
          {city}
      </div>     
);

Location.propTypes = {
    city : PropTypes.string.isRequired,
};
export default Location;