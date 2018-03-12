import React from 'react';
import  './Title.css';

const title = (props) => (
    <h1 className="heading-primary">
        <span className="heading-primary__heading-primary--main">{props.main}</span>
        <span className="heading-primary__heading-primary--sub">{props.sub}</span>
    </h1>
);

export default title;