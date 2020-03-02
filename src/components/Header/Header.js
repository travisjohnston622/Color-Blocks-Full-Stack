import React, { Component } from 'react';
import './Header.css';
// react-router
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="appBar">
                <h1>Color Swatches</h1>
                <nav>
                    <div>
                        <Link to='/'>swatches</Link>
                    </div>
                    <div>
                        <Link to='/colors'>colors</Link>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
