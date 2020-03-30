import React, { Component } from "react";
import {connect} from 'react-redux';
import * as action from '../../action';
import {Link} from 'react-router-dom';

class ShopRegister extends Component {
    state = {
        Name : "",
        Description : "",
        Province : "",
        District : "",
        SubDistrict : "",
        HouseNumber : "",
        Post : "",
        Type : "",
        Pic : [],
        NumberOfInputFile : 0 
    }

    onChangeData = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    } 

    onSubmitForm = (data, event) => {
        event.preventDefault();
        let sendData = {
                Name : data.Name,
                Description : data.Description,
                Addr : {
                    Province : data.Province,
                    District : data.District,
                    SubDistrict : data.SubDistrict,
                    HouseNumber : data.HouseNumber,
                    Post : data.Post,
                },
                Pic : "",
                Type : data.Type,
                UserID: this.props.Profile.ID
        }
        this.props.AddShop(sendData);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <Link to={`/shop/control/${this.props.Profile.ID}`}>Shop Control Panel</Link>
                <form onSubmit={this.onSubmitForm.bind(this, this.state)}>
                    <input type="text" name="Name" placeholder="Shop Name" onChange={this.onChangeData}/><br/> 
                    <input type="text" name="Description" placeholder="Description Shop" onChange={this.onChangeData}/><br/> 
                    <input type="text" name="Province" placeholder="Province" onChange={this.onChangeData}/><br/> 
                    <input type="text" name="District" placeholder="District" onChange={this.onChangeData}/><br/> 
                    <input type="text" name="SubDistrict" placeholder="SubDistrict" onChange={this.onChangeData}/><br/> 
                    <input type="text" name="HouseNumber" placeholder="HouseNumber" onChange={this.onChangeData}/><br/> 
                    <input type="text" name="Post" placeholder="Post" onChange={this.onChangeData}/><br/> 
                    <input type="text" name="Type" placeholder="Type" onChange={this.onChangeData}/><br/> 
                    <button type="submit">ADD DATA</button>
                </form>
            </div>
        )
    }

    componentDidMount() {
        if (!this.props.Profile.IsLogin) {
            this.props.history.push('/user/login')
        }
    }
}

const mapStateToProps = (state) => {
    return {
        Profile : state.Profile
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        AddShop : (data) => {
            return dispatch(action.addShop(data));
        }
    }
}

export default connect(mapStateToProps, mapDistpatchToProps) (ShopRegister);