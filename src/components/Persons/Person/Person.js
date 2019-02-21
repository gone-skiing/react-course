import React, { Component } from 'react';
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'

import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log("Person.js inside constructor", props);
    }

    componentWillMount() {
        console.log("Person.js component will mount");
    }

    componentDidMount() {
        console.log("Person.js component did mount");
    }

    render() {
        console.log("Person.js inside render");

        return (
            <Aux>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type={"test"} onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
    }
}

export default withClass(Person, classes.Person);
