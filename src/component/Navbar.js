import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class Navbar extends Component{

    isLoggedIn=()=>{
        return true;
    }

    render(){
        // store the userId in this variable
        const userId = 123;
        const userIcon = this.isLoggedIn() ? (
            <li>
                <NavLink to={"/users/"+userId}>
                    <i className="material-icons">person_outline</i>
                </NavLink>
            </li>
        )   :
        null ;

        return(
            <nav>
                <div className="nav-wrapper">
                    <NavLink to="/home" className="brand-logo">
                        <div className="logo">
                            D
                        </div>
                    </NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/meals">Meals</NavLink></li>
                        <li><NavLink to="/users">Users</NavLink></li>
                        <li><NavLink to="/login">Log-In / Out</NavLink></li>
                        {userIcon}
                    </ul>
                </div>
            </nav>
        )
    };
}