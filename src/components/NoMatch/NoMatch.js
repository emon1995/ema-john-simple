import React from 'react';
import { useLocation } from 'react-router-dom';

const NoMatch = () => {
    let location = useLocation()
    return (
        <div>
            <h1>Page Not Found</h1>
            <h2>Path Location Not Match: {location.pathname}</h2>
        </div>
    );
};

export default NoMatch;