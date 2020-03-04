import React, { Component } from 'react';
import { connect } from "react-redux";
import { deletemovie } from './action/lsitaction';
import Star from './stars';
import StarRatingComponent from 'react-star-rating-component';
import AddModal from "./modal"
import {Link} from "react-router-dom"



 class Movieitem extends Component {
    deleteitem=(x)=>{
        this.props.delete(x)
    }
    render() {
        return (
            <div>
                {this.props.detail.movies.filter(el=>(el.name.toUpperCase().includes( this.props.detail.keyword.toUpperCase().trim()))&& (el.rate>=this.props.detail.rating)).map(el => <div>
              <img src={el.image} className="img" /> 
              <p>{el.name}</p>
              <p>{el.year} </p>
              <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={el.rate}
        />    <AddModal modif={el} addmode={true}/>
                      <button onClick={()=>this.deleteitem(el.name)}>delete</button>
                      <Link to={`/${el.name}`}><button>Description</button></Link>
              </div> )} 
            </div>  
        );
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        delete: (x)=>dispatch(deletemovie(x)),
    }
}

export default connect(null,mapDispatchToProps)(Movieitem);
