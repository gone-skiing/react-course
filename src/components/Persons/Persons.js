import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        //console.log("Persons.js inside constructor", props);
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        //console.log("Persons.js component will mount");
    }

    componentDidMount() {
        //console.log("Persons.js component did mount");
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        //console.log("UPDATE Persons.js component will receive props", nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("UPDATE Persons.js should component update", nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //            nextProps.changed !== this.props.changed ||
    //            nextProps.clicked !== this.props.clicked;
    // }

    componentWillUpdate(nextProps, nextState, nextContext) {
        //console.log("UPDATE Persons.js component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log("UPDATE Persons.js component did update", this.props);
    }

    render() {

       // console.log("Persons.js inside render");

        return this.props.persons.map((p, index) => {
            return (
                <Person
                    key={p.id}
                    ref={this.lastPersonRef}
                    index={index}
                    click={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, p.id)}
                    name={p.name}
                    age={p.age}
                    />
            )
        });
    }
}

export default Persons;
