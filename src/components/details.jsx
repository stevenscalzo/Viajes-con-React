import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';



class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            travel: null
        }


        Axios.get('http://localhost:3000/api/travel').then((resp) => {
            let idCiudad = this.travelId = props.match.params.id;
            console.log(idCiudad);
            let travels = (resp.data)
            let find = travels.findIndex(x => x.id == idCiudad);
            console.log(find);
            let travel = travels[find];
            console.log(travel);

            this.setState({
                travel
            })
        })
    }

    render() {

        if (this.state.travel) {
            return <div>
                <Link to="/">Inicio</Link>
                <h1>{this.state.travel.destino}</h1>
                <img src={this.state.travel.imagen} alt="" />
                <h2>{this.state.travel.precio + '€'}</h2>
                <h3>{this.state.travel.fecha_inicio}</h3>
                <h3>{this.state.travel.fecha_fin}</h3>
            </div>
        } else {
            return <div>
                <h2>Cargando destinos...</h2>
            </div>
        }
    }
}


export default Details;