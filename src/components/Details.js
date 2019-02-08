import React from 'react';

export default function Details(props){
    return (
        <div>
        {props.tourney ? <p>{props.tourney.details}</p> : null }
        
        </div>
    )
}

