import React, { Component } from 'react';
import Travel from './travel';
import axios from 'axios';



class Travels extends Component {
    constructor() {
        super();
        this.state = {
            travels: [],
            destino: "",
            imagen: "",
            precio: "",
            fecha_inicio: "",
            fecha_fin: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangePrecio = this.handleChangePrecio.bind(this);
        this.handleChangeFechaInicio = this.handleChangeFechaInicio.bind(this);
        this.handleChangeFechaFin = this.handleChangeFechaFin.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/travel')
            .then(res => {
                console.log(res);
                const travels = res.data;
                this.setState({ travels });
            })
    }

    handleChange(event) {
        this.setState({ destino: event.target.value })
    }

    handleChangeImagen(event) {
        this.setState({ imagen: event.target.value })
    }

    handleChangePrecio(event) {
        this.setState({ precio: event.target.value })
    }

    handleChangeFechaInicio(event) {
        this.setState({ fecha_inicio: event.target.value })
    }

    handleChangeFechaFin(event) {
        this.setState({ fecha_fin: event.target.value })
    }

    handleSubmit(event) {
        console.log('A travel was suubmited: ' + this.state.destino);

        axios.post('http://localhost:3000/api/travel', {
            destino: this.state.destino,
            imagen: this.state.imagen,
            precio: this.state.precio,
            fecha_inicio: this.state.fecha_inicio,
            fecha_fin: this.state.fecha_fin
        }).then(res => {
            console.log(res.data);
            this.setState({
                travels: [
                    ...this.state.travels,
                    res.data
                ]
            })
        })
        event.preventDefault();
    }

    render() {
        return <div>
            {(this.state.travels).map(travel => <Travel {...travel} />)}
            <form onSubmit={this.handleSubmit}>
                <label>Añadir Destino:</label>
                <input name="destino" value={this.state.destino} onChange={(e) => this.handleChange(e)} />
                <label>Añadir Imagen: </label>
                <input name="image" value={this.state.imagen} onChange={(e) => this.handleChangeImagen(e)} />
                <label>Añadir Precio:</label>
                <input name="image" value={this.state.precio} onChange={(e) => this.handleChangePrecio(e)} />
                <label>Añadir fecha de inicio:</label>
                <input name="image" value={this.state.fecha_inicio} onChange={(e) => this.handleChangeFechaInicio(e)} />
                <label>Añadir fecha de fin:</label>
                <input name="image" value={this.state.fecha_fin} onChange={(e) => this.handleChangeFechaFin(e)} />
                <input type="submit" />

            </form>
        </div>
    }
}


export default Travels;
