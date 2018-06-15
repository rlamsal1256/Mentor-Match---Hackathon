import React, {Component} from 'react';
import {GoogleLogin} from 'react-google-login';
import {connect} from 'react-redux';


class SignIn extends Component {

    render(){
        const responseGoogle = (response) =>{
            console.log(response);
        };
        return(
            <div>
                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                >Sign in with Google
                </GoogleLogin>
            </div>
        )
    }
}