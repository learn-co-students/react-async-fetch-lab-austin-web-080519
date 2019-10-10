// create your App component here
import React, {Component} from 'react';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount(){
        return fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(function(json){
            this.setState({peopleinSpace: json.people})
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                {this.state.peopleInSpace.map(person => person.name)}
            </div>
        )
    }


}