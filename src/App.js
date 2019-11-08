import React, { Component } from 'react';



class App extends  Component {

    state = {
        collection: ''
    }


componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
    .then(response => response.json())
    .then(data => 
        this.setState({
            collection: data.people

        }))
}

    render() {
        return (
            <div>
                {this.state.collection}
            </div>
        )
    }
}



export default App;