// create your App component here
import React, { Component } from 'react';

const spaceURL = 'http://api.open-notify.org/astros.json'

export default class App extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        fetch(spaceURL)
        .then(response => response.json())
        .then(person => this.setState({
            people: person.people
            })
        )}

    render() {
        console.log(this.state.people)
        return (
            <div>
                <h1>Hello, I am working.</h1>
                </div>
        )
    }
}
