import React,{ Component } from "react";
import {connect} from "react-redux";
import * as action from '../../action';

class UserLogin extends Component {
    state = {
        Email:'',
        Password : '',
    }
    onChangeData = (event) => {
        this.setState({
           [event.target.name] : event.target.value
        })
    }
    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.Login(this.state)
    }

    render() {
        if (this.props.Profile.IsLogin){
            this.props.history.push('/');
        }
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.onSubmitForm}>
                    <h3>Email</h3>
                    <input type="email" name="Email" onChange={this.onChangeData} value={this.state.Email}/>
                    <br/>
                    <h3>Password</h3>
                    <input type="password" name="Password" onChange={this.onChangeData} value={this.state.Password}/>
                    <br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
    componentDidUpdate() {
        if(this.props.Profile.IsLogin) {
            //Login pass
            this.props.history.push('/');
        }else {
            //Login not pass
        }
    }
}
const mapStateToProps = (state) => {
    return {
        Profile : state.Profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Login : (data) => {
            return dispatch(action.loginUser(data));
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(UserLogin);
