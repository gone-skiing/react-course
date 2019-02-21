import React, { Component } from 'react';

import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Max', age: 28},
            {id: '2', name: 'Bob', age: 50},
            {id: '3', name: "Pete", age: 30}
        ],
        showPersons: false
    };

    deletePersonHandler = (index) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {return id === p.id});

        const personsCopy = [...this.state.persons];
        personsCopy[personIndex].name = event.target.value;
        this.setState({persons: personsCopy});
    };

    togglePersonsHandler = () => {
        this.setState({showPersons: !this.state.showPersons});
    };

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />;
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />

                {persons}
            </div>
        );
    }
}

export default App;
