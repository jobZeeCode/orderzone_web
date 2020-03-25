import React, { Component } from "react";
import ShopItem from '../shop/ShopItem';
import { connect } from 'react-redux';
import * as action from '../../action';
class Home extends Component {
    render() {
        const allShops = this.props.ShopFromStore;
        let lists = allShops.map(item => (
            <ul key={item.ID}>
                <li><ShopItem data={item}/></li>
            </ul>
        ))
        return (
            <div>
                {lists}
            </div>
        )
    }

    componentDidMount() {
        this.props.GetAllShops();
    }
}

const mapStateToProps = (state) => {
    return {
        ShopFromStore : state.Shops
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetAllShops : () => {
            return dispatch(action.getShops());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);