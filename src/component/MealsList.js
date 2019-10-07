import React, {Component} from 'react';
import Meal from "./Meal";
import Filter from "./Filter";
import { connect } from 'react-redux';

class MealsList extends Component {

    render(){
        console.log(this.props);
        const {meals} = this.props;
        const mealsList =  meals.map((meal)=>{
            console.log(meal);
           return (<Meal meal={meal} key={meal.mealId}/>);
        });
        return(

            <div className="userlist">
                <div className="userlistTitle">
                    <h4 > Available Meals </h4>
                </div>
                <Filter/>
                <div className="userscont">
                    {mealsList}
                </div>
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