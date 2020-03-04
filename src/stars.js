import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import {connect} from "react-redux"
import {searchrate} from "./action/lsitaction"


 
class Star extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 0
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue},()=>{this.props.searchrate(this.state.rating)});
  }
 
  render() {
    const { rating } = this.state;
     
    return (                
      <div>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
const mapDispatchToProps=dispatch=>{
    return{
        searchrate:(x)=>dispatch(searchrate(x))
    }
}



export default connect(null,mapDispatchToProps)(Star)