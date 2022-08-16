import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Profile} from "./Profile";
import Login from "./Login";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Profile/>
                <Login/>
            </div>
        );
    }
}

export default App;
