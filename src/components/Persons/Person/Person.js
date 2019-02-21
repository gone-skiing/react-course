import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'

import classes from './Person.css';

import AuthContext from '../../../containers/AuthContext';

class Person extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        //console.log("Person.js inside constructor", props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        //console.log("Person.js component will mount");
    }

    componentDidMount() {
        //console.log("Person.js component did mount");
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        //console.log("Person.js inside render");

        return (
            <Aux>
                {this.context.isAuthenticated ? <p>I am authenticated</p> : null}
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
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
