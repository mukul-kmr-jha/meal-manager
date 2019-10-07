import React, {Component} from 'react';
import MealsList from "./MealsList";
import { connect }  from 'react-redux';

class Home extends Component {

    render(){
        console.log(this.props);
        return(
            <div className="">
                Welcome to Home Page!
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Home);