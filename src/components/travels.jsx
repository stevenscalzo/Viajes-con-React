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
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    handleSubmit(event) {
        console.log('A travel was suubmited: ' + this.state.destino);
        
        axios.post('http://localhost:3000/api/travel', {destino:  this.state.destino, imagen: this.state.imagen})
            .then(res => {
                console.log(res.data);
                this.setState({
               travels:[
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
                Añadir Destino:
                <input name="destino" value={this.state.destino} onChange={(e) => this.handleChange(e)} />
                <input name="image" value={this.state.imagen} onChange={(e) => this.handleChangeImagen(e)} />
                <input type="submit"/>

            </form>
        </div>
    }
}


export default Travels;
