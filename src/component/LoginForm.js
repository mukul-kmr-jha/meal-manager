import React, {Component} from "react";
import { connect } from 'react-redux';
import {withRouter} from "react-router";

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            'name_email':'',
            'password':''
        }
    }

    handleChange = (e)=>{
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        })
    }
    handleLogin=(e)=>{
        e.preventDefault();
        console.log('Login the User');
        this.setState({
            ...this.state,
            // isLoggedIn: true
        });
        // update the store
        this.props.login({
            'name_email':this.state.name_email,
            'password':this.state.password
        });
        // console.log(this.props);
        this.props.history.push('/meals');



    }
    handleLogout=(e)=>{
        e.preventDefault();
        console.log('LogOut the User');

        // update the store
        this.props.logout(this.props.curr_user.userId);
        this.props.history.push('/home');

    }
    render(){
        console.log(this.props);
        if (!this.props.isLoggedIn) {

            return (
                <div className="form-box row">
                    <h4 className="loginHead">Login</h4>
                    <form method="post" className="col s12" onSubmit={this.handleLogin}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Name / Email" name="name_email" type="text"
                                       value={this.state.name_email} onChange={this.handleChange} className="validate"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Password" name="password" type="password"
                                       value={this.state.password} onChange={this.handleChange} className="validate"/>
                            </div>
                        </div>

                        <button className="btn waves-effect waves-light" type="submit" name="action">Login
                        </button>
                    </form>
                </div>
            )
        }
        else{
            return(
                <div className="form-box row">
                    <h4 className="loginHead">Logged-In</h4>
                    <form method= "post" className="col s12" onSubmit={this.handleLogout}>
                        <p>Logged In as <b> {this.props.curr_user.name} </b></p>
                        <button className="btn waves-effect waves-light" type="submit" name="action">LogOut
                        </button>
                    </form>
                </div>
            )
        }
    };
}

const mapStateToProps= (state)=>{
    return {
        isLoggedIn: state.isLoggedIn,
        curr_user: state.curr_user
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        login: (user)=>dispatch({type:'LOGIN',payload:user}),
        logout: (userId)=>dispatch({type:'LOGOUT',payload:userId})
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));