import React from 'react';

function Dashboard(props) {

    return (
        <div>
            <div>Dashboard:</div>
            <button onClick={props.ball}>BALL</button>
            <button onClick={props.strike}>STRIKE</button>
            <button onClick={props.hit}>HIT</button>
            <button data-testid='foul' onClick={props.foul}>FOUL</button>
        </div>
    );
}

export default Dashboard;