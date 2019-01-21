import React, { Component } from "react";
import  { Link } from 'react-router-dom';
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";

class Dashboard extends Component {
    componentDidMount(){

    }
    render(){
        return(
            <MDBContainer>
            <h1 className="text-center mt-5 mb-5">Welcome to Dashboard </h1>
            <MDBRow className="mt-5">
            <MDBCol>Domain: </MDBCol>
            <MDBCol>No of Leads Recieved: </MDBCol>
            </MDBRow>
            <MDBRow className="mt-5">
            <MDBCol>CLOSED LEADS: </MDBCol>
            <MDBCol>OPEN LEADS: </MDBCol>
            </MDBRow>
            <h4 className="mt-4 mb-4">LEADS Analysis Category-wise </h4>
            <MDBRow className="mt-5">
            <MDBCol>POSITIVE: </MDBCol>
            <MDBCol>CAN'T SAY: </MDBCol>
            <MDBCol>NEGATIVE: </MDBCol>
            </MDBRow>
            <h4 className="mt-4 mb-4">Leads Need Follow-up: </h4>
            <MDBRow className="mt-5">
            <MDBCol className="d-flex justify-content-center"><MDBBtn className="w-100" color="default"><Link className="text-white d-block" to="/folloups">Proceed To Follow ups</Link></MDBBtn></MDBCol>
            </MDBRow>
            </MDBContainer>
        );
    }
}

export default Dashboard;