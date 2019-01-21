import React , { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import img from '../../assets/akgskills.png';
import { connect } from 'react-redux';
import { checkAuth } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    HandleSubmit = (e) => {
        e.preventDefault();
        this.props.onAuth(this.state);
    }
    HandleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render(){
        let authRedirect = null;
        if(this.props.isAuthenticated){
                    authRedirect = (<Redirect to="/dashboard" />);
        }
        return(
            <MDBContainer>
            {authRedirect}
            <div className="text-center mt-4"><img style={{width:"130px"}} src={img} alt="Logo"/></div>
            <MDBRow className="d-flex justify-content-center mt-3">
            <MDBCol md="4">
            <form>
            <p className="h3 text-center mb-4">Sign in</p>
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
            </div>
            <div className="text-center">
            <MDBBtn color="" style={{'backgroundColor': '#73509a'}} onClick={this.HandleSubmit} >Login</MDBBtn>
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
        isAuthenticated: state.auth.token !== null
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (credientials) => (dispatch(checkAuth(credientials)))
    } 
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);