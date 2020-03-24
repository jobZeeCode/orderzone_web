import React,{ Component } from "react";

class MenuItem extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li>{this.props.data.Name}</li>
                    <li>{this.props.data.Description}</li>
                    {Object.keys(this.props.data.Price).forEach((item)=>(
                        <li>this.props.data.Price[item]</li>
                    ))}
                </ul>
            </div>  
        )
    }
}

export default MenuItem;