import React from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from './Person/Person';

const persons = (props) => props.persons.map((p, index) => {
        return (
            <ErrorBoundary key={p.id}>
                <Person
                    click={() => props.clicked(index)}
                    changed={(event) => props.changed(event, p.id)}
                    name={p.name}
                    age={p.age}/>
            </ErrorBoundary>
        )
    });

export default persons;
