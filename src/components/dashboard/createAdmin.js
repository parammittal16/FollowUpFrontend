import React , { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import axios from '../../axios-config';

class Login extends Component {
    state = {
        username: '',
        password: '',
        domain: ''
    }
    HandleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            url: '/create-user',
            data: this.state,
            headers: {autorizacion: localStorage.token}
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    HandleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render(){
        return(
            <MDBContainer>
            <MDBRow className="d-flex justify-content-center mt-3">
            <MDBCol md="4">
            <form>
            <p className="h3 text-center mb-4">Create Admin</p>
            <div className="grey-text">
            <MDBInput id="username"
            label="Type your username"
            icon="envelope"
            group
            type="text" onChange={this.HandleChange}
            />
            <MDBInput id="password"
            label="Type your password"
            icon="lock"
            group
            type="password" onChange={this.HandleChange}
            />
             <MDBInput id="domain"
            label="Type your domain"
            icon="envelope"
            group
            type="text" onChange={this.HandleChange}
            />
            </div>
            <div className="text-center">
            <MDBBtn color="" style={{'backgroundColor': '#73509a'}} onClick={this.HandleSubmit} >Create</MDBBtn>
            </div>
            </form>
            </MDBCol>
            </MDBRow>
            </MDBContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    }
}
export default connect(mapStateToProps)(Login);