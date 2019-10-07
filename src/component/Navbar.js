import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class Navbar extends Component{


    render(){
        // store the userId in this variable
        const userIcon = this.props.isLoggedIn? (
            <li>
                <NavLink to={"/users/"+this.props.curr_user.userId}>
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

const mapStateToProps=(state)=>{
    return{
        isLoggedIn: state.isLoggedIn,
        curr_user: state.curr_user
    }
};

export default connect(mapStateToProps)(Navbar);
