import React, {Component} from "react";
import { connect } from 'react-redux';

class UserForm extends Component{
    constructor(props){
        super(props);
        // this will be filled with users data
        this.state= {
            'user':{
                'name':'',
                'email':'',
                'password':'',
                'role':'',
            }
        }
    }

    handleChange=(e)=>{
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        });
    }

    handleEdit=(e)=>{
        console.log(this.state);
        // validation on fields ( will update it)
        if(this.state.user.name === '' || this.state.user.email ==='' || this.state.user.password === '' || this.state.user.role===''){
            console.log("Please fill all the fields");
        }
        else{
            console.log('form filled with data',this.state);
            // proceed further


        }
    }
    handleDelete=(e)=>{
        console.log("Are you sure Prompt!");
        // delete globally
    }

    //
    componentDidMount() {

        //getting the userId from history->match->params
        const userId = this.props.match.params.userId;

        //querying the user
        this.setState({
            ...this.props
        })

        // updating the state of this form-component


    }

    render(){
        console.log(this.props);
        let userformEle = (
                <h5 className="loading">
                    Loading...
                </h5>
        );

        if(this.props.user){
            userformEle=(

                        <form className="col s12" onClick={this.handleEdit}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Full-Name" name="name" type="text" className="validate" value={this.state.user.name} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 text-right">
                                    <input placeholder="Email" name="email" type="email" className="validate" value={this.state.user.email} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Password" name="password" type="password" className="validate" value={this.state.user.password} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row margin-2">
                                <label className="col s4 text-left">
                                    <input className="with-gap" name="role" type="radio" value='user' checked = {this.state.user.role === 'user'} onChange={this.handleChange}/>
                                    <span>User</span>
                                </label>
                                <label className="col s4 text-left">
                                    <input className="with-gap" name="role" type="radio" value='manager' checked = {this.state.user.role === 'manager'}  onChange={this.handleChange} />
                                    <span>Manager</span>
                                </label>
                                <label className="col s4 text-left">
                                    <input className="with-gap" name="role" type="radio" value='admin' checked = {this.state.user.role === 'admin'} onChange={this.handleChange} />
                                    <span>Admin</span>
                                </label>

                            </div>
                            <button className="btn waves-effect waves-light mr-2" type="submit" name="action" onClick={this.handleEdit}>Edit</button>
                            <button className="btn waves-effect waves-light" type="" name="action" onClick={this.handleDelete}>Delete</button>
                        </form>

            );

        }

        return(
        <div className="formContainer">
            <div className=" form-box row">
                <h4 className="loginHead"> Update User</h4>
                {userformEle}
            </div>
        </div>
        )
    };
}

const mapStateToProps = (state,ownProps) =>{
    const userId = ownProps.match.params.userId;
    console.log(userId);
    return {
        user : state.users.find(user => user.userId === userId )
    };
}

export default connect(mapStateToProps)(UserForm);