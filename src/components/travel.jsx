import React from 'react';
import {Link} from 'react-router-dom';

function travel(props) {
    return <div id="travels">
        <h1>{props.destino}</h1>
        <Link to={"/details/" + props.id}><img src={props.imagen} alt="" /></Link>
        
        
    </div>
}


export default travel;