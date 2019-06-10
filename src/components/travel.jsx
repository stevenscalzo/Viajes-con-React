import React from 'react';

function travel(props) {
    return <div id="travels">
        <h1>{props.destino}</h1>
        <img src={props.imagen} alt="" />
        <h2>{props.precio}</h2>
        <h3>{props.fecha_inicio}</h3>
        <h3>{props.fecha_fin}</h3>
    </div>
}


export default travel;