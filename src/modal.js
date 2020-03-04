import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {connect} from "react-redux"
import {add,edit} from "./action/lsitaction"

class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,

            name:this.props.addmode ? this.props.modif.name:"",
            year:this.props.addmode ? this.props.modif.year:"",
            image:this.props.addmode ? this.props.modif.image:"",
            rate:this.props.addmode ? this.props.modif.rate:"",


        };
    }
    handleShow = () => {
        this.setState({ show: !this.state.show });
    };

    addnewmovie = () => {
        this.props.add({ name: this.state.name, year: this.state.year, image: this.state.image,rate:this.state.rate })
        this.setState({ show: !this.state.show })
    }
    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
        
    }
    modifer=()=>{
        this.props.edit(this.props.modif.name,{ name: this.state.name, year: this.state.year, image: this.state.image,rate:this.state.rate })
    }

    render() {
        return (
            <div>
                <Button className="btn" variant="primary" onClick={this.handleShow}  >
                    <i class="far fa-plus-square">{this.props.addmode ?"edit": "add"}</i>
                </Button>

                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div>
                                <label>Title:</label>
                                <input type="text" name="name" value={this.state.name} onChange={this.handlechange} />
                            </div>
                            <div>
                                <label>Image:</label>
                                <input type="text" name="image"value={this.state.image}  onChange={this.handlechange} />
                            </div>
                            <div>
                                <label>Rating:</label>
                                <input type="text" name="rate" value={this.state.rate} onChange={this.handlechange} />
                            </div>
                            <div>
                                <label>Year:</label>
                                <input type="text" name="year" value={this.state.year} onChange={this.handlechange} />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow}>
                            Close
            </Button>
                        <Button variant="primary" onClick={this.props.addmode ? this.modifer:this.addnewmovie} >{this.props.addmode ?"edit": "add"}</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
const MapDispatchToProps=dispatch=>{
    return{
        add:(x)=>dispatch(add(x)),
        edit:(x,y)=>dispatch(edit(x,y))
    }
}

export default connect(null,MapDispatchToProps)(AddModal);