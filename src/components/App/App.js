import React, { Component } from 'react';
import { connect } from 'react-redux';
// styling
import './App.css';
//react-router
import { HashRouter as Router, Route } from 'react-router-dom';
// components
import Header from '../Header/Header';
// routes
import swatches from '../pages/swatches/swatches';
import colors from '../pages/colors/colors';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />

                    <div className="container">
                        <Route path="/" exact component={swatches} />
                        <Route path="/colors" component={colors} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default connect()(App);
