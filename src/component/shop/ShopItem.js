import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import * as action from '../../action';

class ShopItem extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.data.Name}</li>
                    <li>{this.props.data.Description}</li>
                </ul>
                <br/>
                <Link to={`/menu/${this.props.data.ID}`}>
                    <button>Detail...</button>
                </Link> 
            </div>
        )
    }
}

export default connect(null, null)(ShopItem);