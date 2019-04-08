import React from 'react';

function Display(props) {
    return (
        <div>
            <h3> count of `balls` and `strikes` for the at-bat </h3>
            <h2>Balls: {props.balls}</h2>
            <h2>Strikes: {props.strikes}</h2>
        </div>
    );
}

export default Display;