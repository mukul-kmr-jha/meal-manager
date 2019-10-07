import React, {Component} from 'react';
import MealsList from "./MealsList";

export default class Filter extends Component {
    constructor(props){
        super(props);
        this.state={
            isFilter:false
        }
    }

    showFilters=()=>{
        console.log("Filter toggle");
        this.setState({
            isFilter: !this.state.isFilter
        });
    }

    render(){


        return(
            <div className="filterContainer" >
                <h5 className="filter-title" onClick={this.showFilters}>Filters </h5>
            </div>

        );
    }
}