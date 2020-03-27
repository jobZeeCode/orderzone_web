import React, { Component } from "react";
import {connect} from 'react-redux';
import axios from 'axios';
import * as action from '../../action';

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
        Image: "",
        Pic : [""],
        NumberOfInputFile : 0 
    }

    onChangeData = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    } 

    onImageChange = (event) => {
        let arr = this.Pic.filter((v,i,arr)=> v !== "");
        arr.append(event.target.files[0])
        this.setState({
            Pic: arr
        });
        console.log(this.state)
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
        }
        this.props.AddShop(data);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm.bind(this, this.state)}>
                    <input type="text" name="Name" placeholder="Shop Name" onChange={this.onChangeData}/><br/> 
                    <input type="text" name="Description" placeholder="Description Shop" onChange={this.onChangeData}/><br/> 
                    <input type="text" name="Province" placeholder="Province" onChange={this.onChangeData}/><br/> 
                    <input type="text" name="District" placeholder="District" onChange={this.onChangeData}/><br/> 
                    <input type="text" name="SubDistrict" placeholder="SubDistrict" onChange={this.onChangeData}/><br/> 
                    <input type="text" name="HouseNumber" placeholder="HouseNumber" onChange={this.onChangeData}/><br/> 
                    <input type="text" name="Post" placeholder="Post" onChange={this.onChangeData}/><br/> 
                    <input type="text" name="Type" placeholder="Type" onChange={this.onChangeData}/><br/> 
                    <input type="file"  onChange={this.onImageChange}/><br/>
                    <button type="submit">ADD DATA</button>
                </form>
            </div>
        )
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        AddShop : (data) => {
            return dispatch(this.action.addShop(data));
        }
    }
}

export default connect(null, mapDistpatchToProps) (ShopRegister);