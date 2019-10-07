import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";

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
            });
            this.props.history.push('/meals');
        }
    }
    handleLogout = (e)=>{
        e.preventDefault();
        console.log('Logged Out');
        this.props.logout(this.props.curr_user.userId);
        this.props.history.push('/home');
    }

    render() {
        if (!this.props.isLoggedIn) {

        return (
            <div className=" form-box row">
                <h4 className="loginHead">Sign-Up</h4>
                <form method="post" className="col s12" onSubmit={this.handleSubmit}>
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
                            <input className="with-gap" name="role" type="radio" value='user' checked = {this.state.role === 'user'} onChange={this.handleChange}/>
                            <span>User</span>
                        </label>
                        <label className="col s4 text-left">
                            <input className="with-gap" name="role" type="radio" value='manager' checked = {this.state.role === 'manager'}  onChange={this.handleChange} />
                            <span>Manager</span>
                        </label>
                        <label className="col s4 text-left">
                            <input className="with-gap" name="role" type="radio" value='admin' checked = {this.state.role === 'admin'} onChange={this.handleChange} />
                            <span>Admin</span>
                        </label>

                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleSubmit}>Sign-Up
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
                    <p>Logged In as <b>{this.props.curr_user.name}</b></p>
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleLogout}>LogOut
                    </button>
                </form>
            </div>
            )
        }
    };
}
// ownProps is empty here . why??
const mapStateToProps= (state,ownProps)=>{
    console.log(ownProps);
    return {
        ...ownProps,
        isLoggedIn: state.isLoggedIn,
        curr_user:state.curr_user
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signup: (user)=>dispatch({type:'ADD_USER',payload:user}),
        logout: (userId)=> dispatch({type:'LOGOUT',payload:userId})
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));