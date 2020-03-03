import React, { Component } from 'react';

class colors extends Component {
    state = {
        heading: 'Color Settings',
        newColor: {
            label: '',
            hexCode: '',
        }
    }
    render() {
        return (
            <div>
                <h2>Add A Color</h2>
                <form>
                    <input type='text' placeholder='Label' value={this.state.newColor.label} />
                    <input type='text' placeholder='Hex Code' value={this.state.newColor.hexCode} />
                </form>
                <h1>{this.state.heading}</h1>
            </div>
        );
    }
}

export default colors;