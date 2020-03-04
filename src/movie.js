import React, { Component } from 'react';
import { connect } from "react-redux";
import Satr from "./stars"
import Star from './stars';
import StarRatingComponent from 'react-star-rating-component';
import { deletemovie } from './action/lsitaction';
import AddModal from "./modal"
import Movieitem from "./movieitem"

 class Movie extends Component {
   
    
   
    render() {
        return (
            <div className="listname">
             <Movieitem detail={this.props.detail}/> 
             <AddModal addmode={false}/> 

            </div>

        );
    }
}
const mapStateToProps=state =>{
    return{
        detail: state.Listreducer
    }
}


export default connect(mapStateToProps)(Movie);
