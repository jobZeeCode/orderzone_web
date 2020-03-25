import React,{ Component } from "react";
import {connect} from "react-redux";
import * as action from '../../action';

class UserLogin extends Component {
    state = {
        Email:'',
        Password : '',
        ID: ''
    }
    onChangeData = (event) => {
        this.setState({
           [event.target.name] : event.target.value
        })
    }
    onSubmitForm = (event) => {
        event.preventDefault();
        var condi = this.checkLogin();
        if (condi) {
            //Login pass
            this.props.history.push('/');
        }else {
            //Login fail
        }
    }

    checkLogin() {
        const allUsers = this.props.UserFromStore;
        var user = allUsers.filter(item => item.Email === this.state.Email && item.Password === this.state.Password);
        try {
            console.log("check :",user[0].ID !== "");
            if (user[0].ID !== ""){
                //Login pass
                const data = {
                    Email : user[0].Email,
                    ID : user[0].ID,
                    IsLogin: true
                }
                this.props.Login(data);
                return true
            }else {
                //Login fail
                return false
            }
        }catch (err) {
            return false 
        }
    }
    render() {
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

    componentDidMount() {
        this.props.GetUsersFromStore();
    }
}

const mapStateToProps = (state) => {
    return {
        UserFromStore : state.Users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Login : (data) => {
            return dispatch(action.loginUser(data));
        },
        GetUsersFromStore: () => {
            return dispatch(action.getAllUsers());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
