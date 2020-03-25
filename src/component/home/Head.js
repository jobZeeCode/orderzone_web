import React,{ Component } from "react";
import {Link} from 'react-router-dom';

class Head extends Component {
    render() {
        return (
            <div>
                <b>Menu</b>
                <br/>
                <Link to="/User/Login">Login</Link>
                <br/>
                <Link to="/User/Register">Register</Link>
            </div>
        )
    }
}

export default Head;