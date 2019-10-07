import React, {Component} from "react";
import { connect } from 'react-redux';

class MealForm  extends Component{
    constructor(props){
        super(props);
        // this will be filled with users data
        this.state= {
                'mealName':'',
                'calories':''
        }
    }

    handleChange=(e)=>{
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        });
    }

    handleEdit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        // validation on fields ( will update it)
        if(this.state.mealName === '' || this.state.calories ==='' || this.state.date === ''){
            console.log("Please fill all the fields");
        }
        else{
            console.log('form filled with data',this.state);
            // proceed further
            this.props.editMeal({
                ...this.state,
                mealId: this.props.mealId});

            // redirect to meals page
            this.props.history.push('/meals');

        }
    }

    handleAdd=(e)=>{
        e.preventDefault();
        console.log(this.state);
        // validation on fields ( will update it)
        if(this.state.mealName === '' || this.state.calories ==='' || this.state.date === ''){
            console.log("Please fill all the fields");
        }
        else{
            console.log('form filled with data',this.state);
            // proceed further
            this.props.addMeal(this.state);
            // redirect to meals page
            this.props.history.push('/meals');

        }
    }

    handleDelete=(e)=>{
        console.log("Are you sure Prompt!");
        // delete globally
        this.props.deleteMeal(this.props.mealId);
        // redirect to meals page
        this.props.history.push('/meals');
    }



    //
    componentDidMount() {

        //getting the mealId from history->match->params
        const mealId = this.props.match.params.mealId;

        //querying the user
        this.setState({
            'mealName':this.props.mealName,
            'calories':this.props.calories,
            'date': this.props.date
        })
        // updating the state of this form-component

    }

    render(){
        console.log(this.props);
        let mealformEle=(
                <form method="post" className="col s12" onSubmit={this.props.mealId ? this.handleEdit:this.handleAdd}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Meal-Name" name="mealName" type="text" className="validate" value={this.state.mealName} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 text-right">
                            <input placeholder="Calories" name="calories" type="number" className="validate" value={this.state.calories} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Date" name="date" className="datepicker" value={this.state.date} onChange={this.handleChange}/>
                        </div>
                    </div>
                    {
                        this.props.mealId?  (
                            <>
                            <button className="btn waves-effect waves-light mr-2" type="submit" name="action" onClick={this.handleEdit}>Edit</button>
                            <button className="btn waves-effect waves-light" type="" name="action" onClick={this.handleDelete}>Delete</button>
                            </>
                        )
                        :
                        (
                            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleAdd}>Add</button>
                        )
                    }

                </form>

            );

        return(
            <div className="formContainer">
                <div className=" form-box row">
                    <h4 className="loginHead"> Update Meal </h4>
                    {mealformEle}
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state,ownProps) =>{
    const mealId = ownProps.match.params.mealId;
    console.log(mealId);
    console.log(state.meals);
    return {
        ...state.meals.find(meal => meal.mealId === mealId )
    };
}

const mapDispatchToProps = (dispatch) =>{
    return {
        editMeal : (meal)=>dispatch({type:'EDIT_MEAL',payload:meal}),
        deleteMeal : (mealId) => dispatch({type:'DELETE_MEAL',payload: mealId}),
        addMeal : (meal) => dispatch({type:'ADD_MEAL', payload:meal})
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(MealForm);