import React, {Component} from 'react';
import User from "./User";
import {connect} from 'react-redux';

import Meal from "./Meal";
import {Link} from "react-router-dom";

class UserList extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }

    render(){
        console.log("Props are ,",this.props);
        const {users} = this.props;
        const userlist =  users.map((user)=>{
            // console.log(user);
            return (<User user={user} key={user.userId}/>);
        });
        return(
            <div className="userlist">
                <div className="userlistTitle">
                    <h4 > List Of Users <span className="addIcon">
                            <Link to="add/user" ><i className=" material-icons">add_circle_outline</i> </Link>
                        </span>
                    </h4>
                </div>
                <div className="userscont">
                    {userlist}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        'users' : state.users,
        curr_user : state.curr_user
    }
}


export default connect(mapStateToProps)(UserList);