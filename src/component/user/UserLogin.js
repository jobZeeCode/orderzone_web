import React,{ Component } from "react";
import {connect} from "react-redux";
import * as action from '../../action';

class UserLogin extends Component{
    constructor(props) {
        super(props);
        this.emailRef = React.createRef()
        this.passRef = React.createRef();
    }
    onChangeData = (event) => {
        this.setState({
           [event.target.name] : event.target.value
        })
    }
    onSubmitForm = (event) => {
        event.preventDefault();
        let email = this.emailRef.current.value;
        let pass = this.passRef.current.value;
        let data = {
            Email : email,
            Password : pass 
        }
        this.props.Login(data)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.Profile === nextProps.Profile && this.state === nextState) {
            return false
        }else {
            if(nextProps.Profile.IsLogin){
                this.props.history.push('/');
                return false
            }
            return true
        }
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.onSubmitForm.bind(this)}>
                    <h3>Email</h3>
                    <input type="email" name="Email" ref={this.emailRef}/>
                    <br/>
                    <h3>Password</h3>
                    <input type="password" name="Password" ref={this.passRef}/>
                    <br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
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
