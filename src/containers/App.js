import React, { PureComponent } from 'react';

import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withCLass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from './AuthContext';

class App extends PureComponent {
    constructor(props) {
        super(props);
        // this.state... can be used to initialize state here. Still used in older versions.
        console.log("App.js inside constructor", props);
    }

    // componentWillMount() {
    //     //console.log("App.js component will mount");
    // }

    componentDidMount() {
        //console.log("App.js component did mount");
    }
    //
    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     //console.log("UPDATE App.js component will update", nextProps, nextState);
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log("UPDATE App.js component did update", this.props);
    }

    // noinspection JSUnusedLocalSymbols
    static getDerivedStateFromProps(nextProps, prevState) {
        //console.log("App.js get derived state from props");
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        //console.log("App.js get snapshot before update");
        return null;
    }

    state = {
        persons: [
            {id: '1', name: 'Max', age: 28},
            {id: '2', name: 'Bob', age: 50},
            {id: '3', name: "Pete", age: 30}
        ],
        showPersons: false,
        toggleClickedCounter: 0,
        authenticated: false
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
        // noinspection JSUnusedLocalSymbols
        this.setState((prevState, props) => {
            return {
                showPersons: !this.state.showPersons,
                toggleClickedCounter: prevState.toggleClickedCounter + 1
            };
        });
    };

    loginHandler = () => {
        // noinspection JSUnusedLocalSymbols
        this.setState((prevState, props) => { return {authenticated: !prevState.authenticated}});
    };

    render() {
        //console.log("App.js inside render");

        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />;
        }

        return (
            <Aux>
                <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>

                <AuthContext.Provider
                    value={{isAuthenticated: this.state.authenticated, toggleAuth: this.loginHandler}}>

                    <Cockpit
                        appTitle={this.props.title}
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}
                    />

                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default withCLass(App, classes.App);
