import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((p, index) => {
                        return (
                            <Person
                                key={p.id}
                                click={() => this.deletePersonHandler(index)}
                                changed={(event) => this.nameChangedHandler(event, p.id)}
                                name={p.name}
                                age={p.age}/>
                        );
                    })}
                </div>
            );

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'white'
            };
        }

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red');
        }

        if (this.state.persons.length <= 1) {
            classes.push('red', 'bold');
        }

        return (
            <div className="App">
                <h1>Hi, I am react app...</h1>
                <p className={classes.join(' ')}>This is really working</p>

                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Names</button>

                {persons}
            </div>
        );
//    return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'How about now, I am react App from element'));
    }
}

export default App;
