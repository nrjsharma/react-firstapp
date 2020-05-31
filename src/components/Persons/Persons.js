import React, {Component} from 'react';
import '../../containers/App.css';
import Person from './Person/Person'

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('[Persons.js] constructor')
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return {message: "Ja mata di"}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate', snapshot)
    }

    render() {
        console.log('[Persons.js] render')
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