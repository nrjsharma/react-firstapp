import React, {Component} from 'react';
import '../../../containers/App.css';

class Person extends Component {
    render() {
        return (
            <div className="person">
                <p onClick={this.props.clickDelete}>Hello i am {this.props.name} and i am {this.props.age} year old</p>
                <input onChange={this.props.change} placeholder={this.props.name}/>
            </div>
        )
    }
}
;

export default Person;