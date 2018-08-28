import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
class Homeworld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planetDetails: {}
        }
    }
    // componentDidMount(){
    //     axios.get(`https://swapi.co/api/planets/?search=${this.props.match.params.name}`).then(res=>this.setState({planetDetails:res.data}))
    // }
    componentDidMount() {
        axios.get(`https://swapi.co/api/planets/?search=${this.props.match.params.name}`).then(res => this.setState({ planetDetails: res.data.results[0] }))
    }
    handleGoBack = () => {

       console.log( this.props.history)
      this.props.history.goBack()
    }

    render() {
        const { planetDetails } = this.state
        console.log(this.state)
        return (
            <div>
                {
                    planetDetails.name ?
                        <div>
                            <button onClick={this.handleGoBack}>go back</button>
                            <h1>{planetDetails.name}</h1>
                            <h2>Climate: {planetDetails.climate}</h2>
                            <h2>Diameter: {planetDetails.diameter} Km</h2>
                            <h3>Earth's Diameter for comparison : 12742 Km</h3>
                            <h2>Gravity: {planetDetails.gravity}</h2>
                            <h2>Orbital Period: {planetDetails.orbital_period}</h2>
                            <h2>Terrain: {planetDetails.terrain}</h2>
                            <h2>Surface Water: {planetDetails.surface_water}%</h2>
                            <h2>Population: {planetDetails.population} </h2>
                        </div>
                        :
                        <h1>Loading...</h1>
                }
            </div>
        );
    }
}

export default Homeworld;