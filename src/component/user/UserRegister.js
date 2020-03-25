import React, { Component } from "react";
import { connect } from 'react-redux';
import * as action from '../../action';

class UserRegister extends Component {
    state = {
        "Email":"",
        "Lastname":"",
        "Name":"",
        "Password":"",
        "Tel":""
    } 
    onChageData = (event) => {
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        );
    }
    onSubmitStudentForm = (data, event) => {
        event.preventDefault();
        const sendData = {
            "Name": data.Name,
            "LastName": data.Lastname,
            "Email": data.Email,
            "Password": data.Password,
            "Tel": data.Tel
        }
        this.props.AddUser(sendData);
        this.props.history.push('/');
    }
    render() {
        return(
            <div>
                <h2>Register </h2>
                <form onSubmit={this.onSubmitStudentForm.bind(this, this.state)}>
                    Email <br/> 
                    <input type="email" name="Email" onChange={this.onChageData} value={this.state.Email}/>
                    <br/>
                    Password <br/>
                    <input type="password" name="Password" onChange={this.onChageData} value={this.state.Password}/>
                    <br/>
                    Name<br/>
                    <input type="text" name="Name" onChange={this.onChageData} value={this.state.Name}/>
                    <br/>
                    LastName<br/>
                    <input type="text" name="Lastname" onChange={this.onChageData} value={this.state.Lastname}/>
                    <br/>
                    Tel<br/>
                    <input type="tel" name="Tel" onChange={this.onChageData} value={this.state.Tel}/>
                    <br/>
                    <button type="submit">Add</button>
                    <button onClick={() => this.props.history.push('/')}>Cancel</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddUser : (sendData) => {
            return dispatch(action.addUser(sendData));
        }
    }
}

export default connect(null, mapDispatchToProps) (UserRegister);