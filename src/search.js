import React, { Component } from 'react';
import {connect} from "react-redux"
import{searchmovie} from "./action/lsitaction"
import Star from "./stars"
 class Search extends Component {
    constructor(props){
        super(props)
        this.state={
          text:""
        }    
    
    
    }
    handlechange=(e)=>{
        this.setState({
            text:e.target.value
        },()=> this.props.Search(this.state.text))
       
    }
    render() {
        return (
            <div>
              <input onChange={this.handlechange} />
              <button>Search</button>
              <Star/>  
            </div>
        );
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        Search : (x)=> dispatch(searchmovie(x)),
    }
}

export default connect(null,mapDispatchToProps)(Search);
