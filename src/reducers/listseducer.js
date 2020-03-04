import { fireEvent } from "@testing-library/react";
import {Search,searchrate,deletemovie,add,edit} from "../action/lsitaction"

const tab=[
    {
        image:"https://tse3.mm.bing.net/th?id=OIP.xUyDvyeUSX5kGn8HLKZWkAHaFj&pid=Api&P=0&w=226&h=171" ,
        name : "freinds",
        year:"1999",
        rate:5
    },
    {
        image:"https://tse2.mm.bing.net/th?id=OIP.ZIgATp2_6-m7YXj1dR2RIgAAAA&pid=Api&P=0&w=300&h=300",
        name: "dark",
        year:"2019",
        rate:3
     }

]
const Listreducer =(state={movies :tab , keyword : "" , rating : 0,editmode:null},action)=>{
    switch(action.type){
        case "add": 
        return {...state,movies:state.movies.concat(action.payload)};
        case "Search":
            // return state.filter(el => el.name.toUpperCase().includes( action.payload.toUpperCase().trim()))
            return {...state , keyword: action.payload}
       case "searchrate":
           return {...state,rating:action.payload}
        case "deletemovie" :
            return {...state,movies:state.movies.filter(el => el.name !== action.payload)}
           case "edit":
               return {...state,movies:state.movies.map(el=> el.name===action.payload.name ? action.payload.change:el)}
            default :
        return state
}}

export default Listreducer