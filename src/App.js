import React , {Component} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import UserList from "./component/UsersList";
import Login from './component/Login';
import MealsList from './component/MealsList';
import {BrowserRouter, Route,Switch, Redirect} from 'react-router-dom';
import UserForm from "./component/UserForm";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            isUserLoggedIn: false
        }
    }
    isUserLoggedIn = ()=>{
        return true;
    }
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <Route path='/signup' component={Login}/>
                        <Route path='/users/:userId' component={UserForm}/>
                        <Route exact path="/" render={(props) => (
                            this.isUserLoggedIn() ? (
                                <Home {...props} />
                            ) : (
                                <Redirect to="/login"/>
                            )
                        )}/>
                        <Route exact path="/home" render={(props) => (
                            this.isUserLoggedIn() ? (
                                <Home {...props} />
                            ) : (
                                <Redirect to="/login"/>
                            )
                        )}/>
                        <Route exact path="/meals" render={(props) => (
                            this.isUserLoggedIn() ? (
                                <MealsList {...props} />
                            ) : (
                                <Redirect to="/login"/>
                            )
                        )}/>
                        <Route exact path="/users" render={(props) => (
                            this.isUserLoggedIn() ? (
                                <UserList {...props} />
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

export default App;
