import React from 'react';

function travel(props) {
    return <div id="travels">
        <h1>{props.destino}</h1>
        <img src={props.imagen} alt="" />
    </div>
}


export default travel;