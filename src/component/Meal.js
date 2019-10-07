import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import dishImg from '../images/dish.jpeg';

export default class Meal extends Component{
    render(){
        return(
            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src={dishImg} alt="Dish"/>
                            <span className="card-badge green"><i
                                className="material-icons">check_circle</i> Calories : {this.props.meal.calories} </span>
                            <span className="card-title">{this.props.meal.mealName}</span>
                    </div>
                    <div className="card-content">
                        <p>{this.props.meal.date}</p>
                    </div>
                    <div className="card-action">
                        <Link to={"/meals/" + this.props.meal.mealId}>Edit</Link>
                    </div>
                </div>
            </div>
        )
    }
}