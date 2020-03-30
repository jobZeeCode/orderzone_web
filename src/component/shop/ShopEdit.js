import React, { Component } from "react";
import {connect} from 'react-redux';
import * as action from '../../action';
import {storage} from '../../firebase';

class ShopEdit extends Component {
    state = {
        ID : '',
        Name: '',
        Description: '',
        Pic: [],
        Type: '',
        UserID: '',
        Addr: {},
        Images :[],
    }
    onEditShop = (data,event) => {
        let sendData = {
            ID : this.state.ID,
            Name: this.state.Name,
            Description: this.state.Description,
            Pic: this.state.Pic,
            Type: this.state.Type,
            UserID: this.state.UserID,
            Addr: this.state.Addr
        }
        this.props.EditShop(sendData);
    }
    onChangeData(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onImageChange = (event) => {
        if (event.target.files[0]) {
            const image = event.target.files[0];
            let allImage = this.state.Images;
            allImage.push(image);
            this.setState({
                Images : allImage
            });
        }
        console.log(this.state);
    }
    onUpLoadImage = () => {
        let allImage = this.state.Images;
        allImage.forEach((item)=>{
            let uploadTask = storage.ref(`${this.props.data.ID}/${item.name}`).put(item)
            uploadTask.on('state_changed',
            (snapshot)=> {
                //progress
            },
            (error)=> {
                //error
            },
            ()=> {
                //complete function
                storage.ref(`${this.props.data.ID}`).child(`${item.name}`).getDownloadURL().then(url=>{
                    let allPic = this.state.Pic
                    allPic.push(url);
                    this.setState({
                        Pic: allPic
                    });
                });
                console.log(`${item.name} finished`);
            });
            
        });
    }
    componentDidMount() {
        if(this.props.data.Pic.length === 0){
            this.setState({ ID : this.props.data.ID,
                Name: this.props.data.Name,
                Description: this.props.data.Description,
                Pic: [],
                Type: this.props.data.Type,
                UserID: this.props.data.UserID,
                Addr: this.props.data.Addr,
            })
        }else {
            this.setState({
                ...this.props.data
            })
        }
    }
    render() {
        return (
            <div>
                <h3>{this.props.data.Name}</h3> 
                <button>Click To Edit</button>
                <div >
                    <input type="text" name="Description" onChange={this.onChangeData} value={this.props.data.Description}/> 
                    <br/>
                    <input type="file" onChange={this.onImageChange.bind(this)}/>
                    <br/>
                    {
                        this.state.Images.map((item,index,arr)=>(
                            <li key={index}>{item.name}</li>
                        ))
                    }
                    <button onClick={this.onUpLoadImage.bind(this)}>Upload</button>
                    {
                        this.state.Pic.length > 0? this.state.Pic.map((item,index,arr)=> <img src={item} key={index}alt="profile"/> ) : (<li>No Pic</li>)
                    }
                    <button onClick={this.onEditShop.bind(this)}>ยืนยันการปรับแต่ง</button>
                    <br/>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        EditShop : (data) => {
            return dispatch(action.editShop(data));
        }
    }
}

export default connect(null, mapDispatchToProps) (ShopEdit);