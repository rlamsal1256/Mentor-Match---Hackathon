import React, {Component} from 'react';
import {GoogleLogin} from 'react-google-login';
import {connect} from 'react-redux';
import {SignInUser} from './../redux/actions/actions';


class SignIn extends Component {

    render(){
        const responseGoogle = (res) =>{
            let postData = {
                name: res.w3.ig,
                provider:'google',
                email: res.w3.U3,
                provider_id: res.El,
                token: res.Zi.access_token,
                provider_pic: res.w3.Paa
            };

        this.props.SignInUser(postData);
        };

        return(
            <div className = 'flex-container-column align-center'>
                <img className='logo' src={require('../assets/M-logo.svg')} alt='logo'/>
                <GoogleLogin
                    clientId="886637869712-573t01u5erqv7dh8ilt0rbi7mftki3ts.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                >Sign in with Google
                </GoogleLogin>
            </div>
        )
    }
}
const mapStateToProps = () => {
    return{

    }
};

export default connect(mapStateToProps, {
    SignInUser
})(SignIn);