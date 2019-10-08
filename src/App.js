import React , {Component} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import UserList from "./component/UsersList";
import Login from './component/Login';
import MealsList from './component/MealsList';
import {BrowserRouter, Route,Switch, Redirect} from 'react-router-dom';
import UserForm from "./component/UserForm";
import MealForm from "./component/MealForm";
import {connect} from "react-redux";

class App extends Component {

    isAdmin = ()=> {
        if(this.props.curr_user){
            return this.props.curr_user.role ==='admin';
        }
        // no curr_user (no one is logged-in)
        else{
            return false;
        }
    }
    isManager = ()=> {
        console.log(this.props.curr_user);
        if(this.props.curr_user){
            return this.props.curr_user.role ==='admin';
        }
        // no curr_user (no one is logged-in)
        else{
            return false;
        }
    }

    render() {
        console.log(this.props);
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <Route path='/signup' component={Login}/>

                        <Route exact path="/" render={(props) => (
                            this.props.isLoggedIn ? (
                                <Home {...props} />
                            ) : (
                                <Redirect to="/login"/>
                            )
                        )}/>
                        <Route exact path="/home" render={(props) => (
                            this.props.isLoggedIn ? (
                                <Home {...props} />
                            ) : (
                                <Redirect to="/login"/>
                            )
                        )}/>
                        <Route exact path="/meals" render={(props) => (
                            this.props.isLoggedIn ? (
                                <MealsList {...props} />
                            ) : (
                                <Redirect to="/login"/>
                            )
                        )}/>
                        <Route exact path="/add/meal/" render={(props) => (
                            this.props.isLoggedIn ? (
                                <MealForm {...props} />
                            ) : (
                            <Redirect to="/login"/>
                            )
                        )}/>
                        <Route exact path="/add/user" render={(props) => (
                            (this.isManager() || this.isAdmin())? (
                                <UserForm {...props} />
                            ) : (
                            <Redirect to="/login"/>
                            )
                         )}/>
                        <Route exact path="/meals/:mealId" render={(props) => (
                            this.props.isLoggedIn ? (
                                <MealForm {...props} />
                            ) : (
                                <Redirect to="/login"/>
                            )
                        )}/>
                        <Route exact path="/users" render={(props) => (
                            (this.isManager() || this.isAdmin()) ? (
                                <UserList {...props} />
                            ) : (
                                <Redirect to="/login"/>
                            )
                        )}/>
                        <Route exact path='/users/:userId'  render={(props) => (
                            (this.isManager() || this.isAdmin()) ? (
                                <UserForm {...props} />
                            ) : (
                                <Redirect to="/login"/>
                            )
                        )}/>
                        {/*<Login/>*/}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state)=>{
   return {
        isLoggedIn: state.users.isLoggedIn,
       curr_user: state.users.curr_user
    }
}

export default connect(mapStateToProps)(App);
