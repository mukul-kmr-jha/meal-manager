import React, {Component} from "react";
import {connect} from "react-redux";

class SignupForm extends Component{
    constructor(props){
        super(props);
        this.state= {
            name:'',
            email:'',
            password:'',
            role:'',
        };
    }

    handleChange=(e)=>{
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        })
    }
    handleChange2 = (e)=>{
        e.target.setAttribute('checked',true);
        this.setState({
            ...this.state,
            'role': e.target.value
        })
        console.log(e.target);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        // validation on fields ( will update it)
        if(this.state.name === '' || this.state.email ==='' || this.state.password === '' || this.state.role===''){
            console.log("Please fill all the fields");

        }
        else{
            console.log('form filled with data',this.state);
            // proceed further

            // remove the filled data

            // Updating the global store
            this.props.signup({
                ...this.state
            })
            this.setState({
                name:'',
                email:'',
                password:'',
                role:'',
            });
        }
    }

    render() {
        if (!this.props.isLoggedIn) {

        return (
            <div className=" form-box row">
                <h4 className="loginHead">Sign-Up</h4>
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Full-Name" name="name" type="text" className="validate"
                                   value={this.state.name} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 text-right">
                            <input placeholder="Email" name="email" type="email" className="validate"
                                   value={this.state.email} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Password" name="password" type="password" className="validate"
                                   value={this.state.password} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row margin-2">
                        <label className="col s4 text-left">
                            <input className="with-gap" name="role" type="radio" value='user'
                                   onChange={this.handleChange2}/>
                            <span>User</span>
                        </label>
                        <label className="col s4 text-left">
                            <input className="with-gap" name="role" type="radio" value='manager'
                                   onChange={this.handleChange2}/>
                            <span>Manager</span>
                        </label>
                        <label className="col s4 text-left">
                            <input className="with-gap" name="role" type="radio" value='admin'
                                   onChange={this.handleChange2}/>
                            <span>Admin</span>
                        </label>

                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Sign-Up
                    </button>
                </form>
            </div>
        )
    }
    else{
        console.log(this.props);
    return(
        <div className="form-box row">
            <h4 className="loginHead">Logged-In</h4>
            <form className="col s12" onSubmit={this.handleLogout}>
                <p>Signed UP as {this.props.curr_user.name}</p>
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
        ...state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signup: (user)=>{
            return dispatch({type:'SIGNUP',payload:user})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);