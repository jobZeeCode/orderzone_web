import React,{ Component } from "react";
import {Link} from 'react-router-dom';

class Head extends Component {
    render() {
        return (
            <div>
                <b>Menu</b>
                <br/>
                <Link to="/user/login">Login</Link>
                <br/>
                <Link to="/user/register">Register</Link>
                <br/>
                <Link to="/shop/register">Shop Register</Link>
                <br/>
            </div>
        )
    }
}

export default Head;