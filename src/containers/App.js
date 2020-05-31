import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpet from '../components/Cockpit/Cockpit'

class App extends Component {

    constructor(props){
        super(props);
        console.log('[App.js] constructor')
    }

    state = {
        persons: [
            {id: "asdasd", name: "neeraj", age: 28},
            {id: "asda12", name: "neeraj2", age: 128},
            {id: "swsw23", name: "neeraj3", age: 228},
        ],
        showPersons: true
    };

    static getDerivedStateFromProps(props, state){
        console.log('[App.js] getDerivedStateFromProps')
        return state
    }

    componentDidMount(){
        console.log('[App.js] componentDidMount')
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        })
    };

    changeNameHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value

        const persons = [...this.state.persons]

        persons[personIndex] = person;

        this.setState({
            persons: persons
        })
    };

    render() {

        console.log('[App.js] render')

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clickDelete={this.deletePersonHandler}
                        change={this.changeNameHandler}
                    />
                </div>
            )
        }

        return (
            <div className="personContainer">
                <Cockpet title={this.props.appTitle} />
                {persons}
            </div>
        )

    };
}

export default App;
