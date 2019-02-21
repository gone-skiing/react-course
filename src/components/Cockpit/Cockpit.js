import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import classes from "./Cockpit.css";

import AuthContext from '../../containers/AuthContext';

class Login extends Component {
    static contextType = AuthContext;

    render() {
        return (
            <button onClick={this.context.toggleAuth}>
                {this.context.isAuthenticated ? 'Log Out' : 'Log In'}
            </button>
        );
    }
}

const cockpit = (props) => {

    const assignedClasses = [];
    let buttonClass = classes.Button;

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.red, classes.bold);
    }

    if (props.showPersons) {
        buttonClass = [classes.Button, classes.Red].join(' ');
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>

            <button
                className={buttonClass}
                onClick={props.clicked}>Toggle Names</button>

            <Login/>
        </Aux>
    );
};

export default React.memo(cockpit);