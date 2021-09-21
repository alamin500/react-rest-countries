import React from 'react';
import './Country.css';
const Country = (props) => {
    const{name, flag, capital, population, region} = props.country;
    console.log(props.country);
    return (
        <div className="country">
            <h4>This is: {name}</h4>
            <p>Capital is: {capital}</p>
            <img src={flag} alt="" />
            <p>Population is: {population}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;