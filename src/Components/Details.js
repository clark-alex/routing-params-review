import React, { Component } from 'react';
import axios from 'axios'

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterDetails : {}
        }
    }
    
    componentDidMount(){
        axios.get(`https://swapi.co/api/people/${this.props.match.params.id}/`).then(res=>{
            this.setState({characterDetails:res.data})
        })
    }
    render() {
        console.log(this.state)
        const {characterDetails} = this.state
        return (
            <div>
                <h1>{characterDetails.name}</h1>
                <h2>Height: {characterDetails.height}cm</h2>
                <h2>Mass: {characterDetails.mass}Kg</h2>
                <h2>Skin Color: {characterDetails.skin_color}</h2>
                <h2>Hair Color: {characterDetails.hair_color}</h2>
                <h2>Eye Color: {characterDetails.eye_color}</h2>
                <h2>Gender: {characterDetails.gender}</h2>
                <h2>Birth Year: {characterDetails.birth_year}</h2>
            </div>
        );
    }
}

export default Details;
