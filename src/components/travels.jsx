import React, { Component } from 'react';
import Travel from './travel';
import axios from 'axios';



class Travels extends Component {
    constructor() {
        super();
        this.state = {
            travels: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/travel')
            .then(res => {
                console.log(res);
                const travels = res.data;
                this.setState({ travels });
            })
    }

    render() {
        return <div>
            {(this.state.travels).map(travel => <Travel {...travel} />)}
        </div>
    }
}


export default Travels;
