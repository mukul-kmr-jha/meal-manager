import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import femaleImg from '../images/user-female.png';
// import maleImg from '../images/user-male.png';


class User extends Component{

    render(){
        // console.log(this.props);
        return(

            <div className="card underline">
                <div className="userCard card-image waves-effect waves-block waves-light">
                    <img className="activator userImg"  alt="User" src={femaleImg}/>
                </div>
                <div className="card-content">
                <span className="card-title activator  grey-text text-darken-4">{this.props.user.name}
                </span>
                </div>
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{this.props.user.name}
                </span>
                <p> {this.props.user.email}</p>
                <Link to={"/users/"+ this.props.user.userId} className="waves-effect waves-light btn" >Edit </Link>
                </div>
            </div>
        );
    }
}

export default  User;