import React, {Component} from 'react';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            isLogin:true,
            isSignup:false
        };
    }

    showLogin=()=>{
        if(!this.state.isLogin){
            this.setState({
                isLogin:true,
                isSignup:false
            })
        }
        else{
            console.log("Login Form is already onScreen! ");
        }
    };

    showSignup=()=>{
        if(!this.state.isSignup){
            this.setState({
                isLogin:false,
                isSignup:true
            })
        }
        else{
            console.log("Signup Form is already onScreen! ");
        }
    };



    render(){
        return(
            <div className="formContainer">
                <div className="loginToggler">
                    <span className={this.state.isLogin ? "loginTab active-tab" : "loginTab" } onClick={this.showLogin}>
                        Log-In
                    </span>
                    <span className={this.state.isSignup ? "loginTab active-tab":"loginTab" } onClick={this.showSignup}>
                        Sign-Up
                    </span>
                </div>
                { this.state.isLogin ? <LoginForm/> : <SignupForm/> }

            </div>
        );
    }
}

