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
    handleSubmit=(e)=>{
        e.preventDefault();

    }

    render(){
            return(
                <>
                    <div className="filterContainer" >
                        { this.state.isFilter? null :  (
                            <h5 className="filter-title" onClick={this.showFilters}>Filters </h5>
                         )}
                    </div>
                    <div className={"filtersEle "+ (this.state.isFilter ? " show ": " hide ")}>
                        <div className="formContainer">
                            <form method="post" className="filter-form-box row" onSubmit={this.handleSubmit} >
                                <div className="input-group col s6">
                                    <input type="text" placeholder="From (Date)" className="datepicker" />
                                </div>
                                <div className="input-group col s6">
                                    <input type="text" placeholder="To (Date)" className="datepicker" />
                                </div>
                                <div className="input-group col s6">
                                    <input type="text" placeholder="From (Time)" className="timepicker" />
                                </div>
                                <div className="input-group col s6">
                                    <input type="text" placeholder="To (Time)" className="timepicker" />
                                </div>

                                <button className="btn waves-effect waves-light light-blue lighten-2 mt-2 mr-2" type="submit" name="action">DONE
                                </button>
                                <button className="btn waves-effect waves-light light-blue lighten-2 mt-2" type="" onClick={this.showFilters} name="action">CANCEL
                                </button>
                            </form>
                        </div>
                    </div>

                </>
            );


    }
}