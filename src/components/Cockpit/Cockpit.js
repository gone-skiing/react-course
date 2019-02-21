import React from 'react';
import Aux from '../../hoc/Aux';

import classes from "./Cockpit.css";

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
        </Aux>
    );
};

export default cockpit;