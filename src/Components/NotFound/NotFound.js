import React from 'react';

const NotFound = () => {
    const notFound={
        textAlign:'center', 
        backgroundColor:'lightgray'
    }
    return (
        <div style={notFound}>
            <h3>Sorry, Page Not Found</h3>
            <h1>404 Error!!!</h1>
        </div>
    );
};

export default NotFound;