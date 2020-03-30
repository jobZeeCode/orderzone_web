import React ,{ Component } from "react";
import {connect} from 'react-redux';
import * as action from '../../action';
import ShopEdit from './ShopEdit';

class ShopControl extends Component {
    state = {

    }
    render() {
        let myShop = this.props.Shops.filter((item)=> item.UserID === this.props.match.params.id)
        let list = myShop.map((item)=> (
            <ShopEdit data={item} key={item.ID}/>))
        return (
            <div>
                ShopControl
                <h1>เลือกร้าน</h1>
                {list} 
            </div>
        )
    }

    componentDidMount() {
        this.props.GetShops()
    }
}

const mapStateToProps = (state) => {
    return {
        Shops : state.Shops
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetShops : ()=> {
            return dispatch(action.getShops());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ShopControl);
