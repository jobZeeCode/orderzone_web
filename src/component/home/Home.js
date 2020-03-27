import React, { Component } from "react";
import ShopItem from '../shop/ShopItem';
import { connect } from 'react-redux';
import * as action from '../../action';
class Home extends Component {
    render() {
        let lists;
        try {
            const allShops = this.props.ShopFromStore;
            lists = allShops.map(item => (
                <ul key={item.ID}>
                    <li><ShopItem data={item}/></li>
                </ul>
            ))
        } catch(e){
            lists = (
                <div>
                    No shops
                </div>
            )
        }
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