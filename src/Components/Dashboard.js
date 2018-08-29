import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charVal: '',
            text:''
        }
        
    }
    handleInput (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                {/* the value on each character represents their swapi id. for example https://swapi.co/api/people/1/ will return Luke and all of his info. */}
                <select name='Val' onChange={this.handleInput}>
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
                <input name="text" onChange={this.handleInput}/>
                <button>Get Details</button>
                {/* when this button is clicked it should link to the details component. */}
            </div>
        );
    }
}

export default Dashboard;