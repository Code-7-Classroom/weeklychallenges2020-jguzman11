import React, {Component} from 'react';
import './Persons.css';

class Persons extends Component{
    render() {
        return (
            <div>
                {this.props.person.map(info => (
                    <div className="person">
                        <li className="top">Name: {info.Name}</li>
                        <li>Phone: {info.Phone}</li>
                        <li>Date of Birth: {info.DOB}</li>
                    </div>
                ))}
            </div>
        )
    }
}

export default Persons;