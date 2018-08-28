import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterDetails: {},
            homeworld: {},
            species: {}
        }
    }

    componentDidMount() {
        axios.get(`https://swapi.co/api/people/${this.props.match.params.id}/`).then(res => {
            this.setState({ characterDetails: res.data })
            axios.get(axios.get(res.data.species[0]).then(res => this.setState({ species: res.data })))
            axios.get(axios.get(res.data.homeworld).then(res => this.setState({ homeworld: res.data })))
        })
    }
    render() {
        console.log(this.state)
        const { characterDetails, homeworld, species } = this.state
        return (
            <div>
                {
                    homeworld.name && species.name ?
                        <div>
                            <Link to='/'><button>Go back</button></Link>
                            <h1>{characterDetails.name}</h1>
                            <h2>Height: {characterDetails.height}cm</h2>
                            <h2>Mass: {characterDetails.mass}Kg</h2>
                            <h2>Skin Color: {characterDetails.skin_color}</h2>
                            <h2>Hair Color: {characterDetails.hair_color}</h2>
                            <h2>Eye Color: {characterDetails.eye_color}</h2>
                            <h2>Gender: {characterDetails.gender}</h2>
                            <h2>Birth Year: {characterDetails.birth_year}</h2>
                            <h2>Homeworld: {homeworld.name}</h2>
                            <h2>Species: {species.name}</h2>
                            <Link to={`/homeworld/${homeworld.name}`}><button>Homeworld Details</button></Link>
                        </div>
                        :
                        <h1>Loading...</h1>
                }
            </div>
        );
    }
}

export default Details;
