import React, {Component} from 'react';
import '../../containers/App.css';
import Person from './Person/Person'

class Persons extends Component {
    render() {
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    clickDelete={this.props.clickDelete.bind(this, index)}
                    change={(event) => this.props.change(event, person.id)}
                />
            )
        });
    };
}

export default Persons;