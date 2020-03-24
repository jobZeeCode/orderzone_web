import React, { Component } from "react";
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import * as action from '../../action';
class MenuList extends Component {
    state = {
        Menus: []
    }
    render() {
        const menus = this.props.MenuFromStore;
        const ownMenus = menus.filter(item=> item.ShopID === this.props.match.params.id)  
        let lists = ownMenus.map((item)=> (
            <div key={item.ID}>
                <ul>
                    <li><MenuItem data={item}/></li>
                </ul>
            </div>
        ))
        return(
            <div>
                <h1>Menu</h1>
                {lists}
            </div>
        )
    }
    componentDidMount() {
        this.props.GetAllMenu();
    }
}

const mapStateToProps = (state)=> {
    return {
        MenuFromStore : state.Menus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetAllMenu : () => {
            return dispatch(action.getMenus())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);