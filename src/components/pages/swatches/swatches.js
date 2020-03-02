import React, { Component } from 'react';

class swatches extends Component {
    state = {
        heading: 'Color Swatches',
    };
    render() {
        return (
            <div>
                <h1>{this.state.heading}</h1>
            </div>
        );
    }
}

export default swatches;