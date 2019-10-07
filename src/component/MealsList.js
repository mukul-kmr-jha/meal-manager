import React, {Component} from 'react';
import Meal from "./Meal";
import Filter from "./Filter";
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

class MealsList extends Component {

    render(){
        // console.log(this.props);
        const {meals} = this.props;
        const mealsList =  meals.map((meal)=>{
            // console.log(meal);
           return (<Meal meal={meal} key={meal.mealId}/>);
        });
        return(

            <div className="mealslist">
                <div className="meallistTitle">
                    <h4 > Available Meals
                        <span className="addIcon">
                            <Link to="add/meal" ><i className=" material-icons">add_circle_outline</i> </Link>
                        </span>
                    </h4>
                </div>
                <div className="mealscont">
                    {mealsList}
                </div>
                <Filter/>

            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        "meals": state.meals
    }
}

export default connect(mapStateToProps)(MealsList);