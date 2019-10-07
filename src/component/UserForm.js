import React, {Component} from "react";
import { connect } from 'react-redux';

class UserForm extends Component {
    constructor(props) {
        super(props);
        // this will be filled with users data
        this.state = {
            'user': {
                'name': '',
                'email': '',
                'password': '',
                'role': '',
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            user:{
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        });
    }

    handleEdit = (e) => {
        e.preventDefault()
        console.log(this.state);
        // validation on fields ( will update it)
        if (this.state.user.name === '' || this.state.user.email === '' || this.state.user.password === '' || this.state.user.role === '') {
            console.log("Please fill all the fields");
        } else {
            console.log('form filled with data', this.state);
            // proceed further
            this.props.editUser(this.state.user);
            this.props.history.push('/users');


        }
    }
    handleDelete = (e) => {
        e.preventDefault();
        console.log("Are you sure Prompt!");
        // delete globally
        this.props.deleteUser(this.state.user.userId);
        this.props.history.push('/users');
    }

    handleAdd = (e) => {
        e.preventDefault();
        console.log("Are you sure Prompt!");
        if (this.state.user.name === '' || this.state.user.email === '' || this.state.user.password === '' || this.state.user.role === '') {
            console.log("Please fill all the fields");
        } else {
            console.log('form filled with data', this.state);
            // add in the store
            this.props.addUser(this.state.user);
            this.props.history.push('/users');
        }

    }
    //
        componentDidMount()
        {

            //getting the userId from history->match->params
            const userId = this.props.match.params.userId;

            //querying the user
            if(this.props.user) {
                this.setState({
                    user: {
                        ...this.props.user
                    }
                });
            }

            // updating the state of this form-component


        }

        render()
        {
            console.log(this.props);
            let userformEle = (

                    <form method="post" className="col s12" onSubmit={ this.props.user ? this.handleEdit : this.handleAdd }>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Full-Name" name="name" type="text" className="validate"
                                       value={this.state.user.name} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 text-right">
                                <input placeholder="Email" name="email" type="email" className="validate"
                                       value={this.state.user.email} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Password" name="password" type="password" className="validate"
                                       value={this.state.user.password} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row margin-2">
                            <label className="col s4 text-left">
                                <input className="with-gap" name="role" type="radio" value='user'
                                       checked={this.state.user.role === 'user'} onChange={this.handleChange}/>
                                <span>User</span>
                            </label>
                            <label className="col s4 text-left">
                                <input className="with-gap" name="role" type="radio" value='manager'
                                       checked={this.state.user.role === 'manager'} onChange={this.handleChange}/>
                                <span>Manager</span>
                            </label>
                            <label className="col s4 text-left">
                                <input className="with-gap" name="role" type="radio" value='admin'
                                       checked={this.state.user.role === 'admin'} onChange={this.handleChange}/>
                                <span>Admin</span>
                            </label>

                        </div>
                        {
                            this.props.user ? (
                                <>
                                <button className="btn waves-effect waves-light mr-2" type="submit" name="action"
                                        onClick={this.handleEdit}>Edit
                                </button>
                                <button className="btn waves-effect waves-light" type="" name="action"
                                     onClick={this.handleDelete}>Delete
                                 </button>
                                </>
                            ):
                            (
                            <button className="btn waves-effect waves-light mr-2" type="submit" name="action"
                                      onClick={this.handleAdd}>ADD
                            </button>

                            )
                        }

                    </form>

                );

            return (
                <div className="formContainer">
                    <div className=" form-box row">
                        <h4 className="loginHead">{this.props.user? "Update User" : "ADD USER"}</h4>
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

const mapDispatchToProps = (dispatch)=>{
    return{
        addUser : (user) => dispatch({type:'ADD_USER',payload:user}),
        editUser : (user) =>dispatch({type:'EDIT_USER',payload:user}),
        deleteUser : (userId) =>dispatch({type:'DELETE_USER',payload:userId})
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(UserForm);