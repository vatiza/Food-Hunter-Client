import React from 'react';
import { useParams } from 'react-router-dom';

const CountryWhichData = () => {
    const {id}=useParams();

    return (
        <div>
            <h1>Country Which Data{id}</h1>
        </div>
    );
};

export default CountryWhichData;