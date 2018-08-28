import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterName: ''
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <h1>StarWars Detail Finder</h1>
                <br />
                <h2>Click below to find out more</h2>
                <select name="characterName" onChange={this.handleChange}>
                    <option value="" selected disabled hidden>Select a character</option>
                    <option value="1">Luke</option>
                    <option value="2">C-3P0</option>
                    <option value="3">R2-D2</option>
                    <option value="4">Darth Vader</option>
                    <option value="5">Leia Organa</option>
                    <option value="6">Owen Lars</option>
                    <option value="10">Obi-Wan Kenobi</option>
                    <option value="11">Anakin Skywalker</option>
                    <option value="13">ChewBacca</option>
                    <option value="14">Han Solo</option>
                    <option value="20">Yoda</option>
                    <option value="21">Palpatine</option>
                    <option value="22">Boba Fett</option>
                    <option value="32">Qui-Gon Jinn</option>
                    <option value="36">Jar Jar Binks</option>
                    <option value="44">Darth Maul</option>
                </select>
                <Link to={`/details/${this.state.characterName}`}><button>Get Details</button></Link>
            </div>
        );
    }
}

export default Dashboard;