import React from 'react';
import './Country.css';
const Country = (props) => {
    console.log(props.country);
    return (
        <div className="country">
            <h4>This is: {props.country.name}</h4>
            <p>Capital is: {props.country.capital}</p>
            <img src={props.country.flag} alt="" />
            <p>Population is: {props.country.population}</p>
        </div>
    );
};

export default Country;