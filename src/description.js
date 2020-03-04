import React, { Component } from 'react';
import { connect } from "react-redux";

 class Description extends Component {
    constructor(props){
        super(props)
        this.state={
            movie:{}
        }
    }
    componentDidMount=()=>{
        this.setState({
            movie:this.props.movie.filter(el=> el.name===this.props.match.params.name)[0]
        })
        
    }
    render() {
        return (
            <div>
               <img src={this.state.movie.image}/> 
        <h1>{this.state.movie.name}</h1>
            </div>
        );
    }
}
const MapStateToProps=state=>{
    return{
        movie:state.Listreducer.movies
    }
}
export default connect(MapStateToProps)(Description);
