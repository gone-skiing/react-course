import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        if (this.props.index === 0) {
            this.inputElement.focus();
        }
    }

    render() {
        console.log("Person.js inside render");

        return (
            <Aux>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp) => {this.inputElement = inp;}}
                    type={"text"}
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
