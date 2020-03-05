import React, { Component } from 'react';
import { connect } from 'react-redux';
//Style
import './swatches.css'
import mapStoreToProps from '../../../redux/mapStoreToProps';

class Swatches extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_SWATCHES'
        })
        this.props.dispatch({
            type: 'GET_COLORS'
        })
    }

    deleteSwatch = (event, id) => {
        this.props.dispatch({
            type: 'DELETE_SWATCH',
            payload: id
        })
        this.props.dispatch({
            type: 'GET_SWATCHES',
        })
    }
    addSwatch = (event, item) => {
        this.props.dispatch({
            type: 'ADD_SWATCH',
            payload: item
        })
        this.props.dispatch({
            type: 'GET_SWATCHES',
        })
    }

    render() {
        const Swatches = this.props.store.getSwatchesReducer.map((item, index) => {
            const el = `#${item.hex_code}`
            const swatch = <div style={{ backgroundColor: el }} className="container"></div>;
            return (
                <div key={index} className="body">
                    {swatch}
                    {/* <h4 className="label">{item.label}</h4> */}
                    <div>
                        <h5 className="label">{item.label}<button className="del-btn" onClick={(event) => this.deleteSwatch(event, item.id)}>DELETE</button></h5>
                        {/* <button onClick={(event) => this.deleteSwatch(event, item.id)}>DELETE</button> */}
                    </div>
                </div>
            )
        })
        const swatchesButtons = this.props.store.getSwatchesReducer.map((item, index) => {
            const el = `#${item.hex_code}`
            console.log(el)
            return (
                <div key={index} className="swatch-body">
                    <button
                        className="swatches-btn"
                        style={{ backgroundColor: el }}
                        onClick={(event) => this.addSwatch(event, item)}>
                        Add a {item.label} Box
                    </button>
                </div>
            )
        })
        return (
            <div >
                {swatchesButtons}
                <h2>Color Swatches</h2>
                {Swatches}
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Swatches);