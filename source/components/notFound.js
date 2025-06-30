import React from 'react';
import "./css/notfound.css";

function DataNotFound() {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">Oops!</h1>
            <p className="not-found-message">an Error occured</p>
            <div className="not-found-emoji">😕</div>
        </div>
    );
}

export default DataNotFound;
