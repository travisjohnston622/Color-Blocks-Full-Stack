import React, { Component } from 'react';

class colors extends Component {
    state = {
        heading: 'Color Settings'
    }
    render() {
        return (
            <div>
                <h1>{this.state.heading}</h1>
            </div>
        );
    }
}

export default colors;