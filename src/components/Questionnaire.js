import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { skills } from "../constants/technologyConstants";
//import CheckBox from './CheckBox';
import { createUser } from '../redux/actions/actions';
//import SignIn from './SignIn';

class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Math.floor((Math.random() * 1000) + 1),
      skills: [],
      interests: []
    };
  }

  render() {
      return (
          <div>

                      <div className='flex-container-column align-center'>
                          <img className='logo' src={require('../assets/M-logo.svg')} alt="logo"/>
                          <div>
                              Tell us about yourself
                          </div>

                          <Link to={`/profile/${this.state.id}`}>
                              <img src={require('../assets/Button-Hover.svg')} alt="button-next"
                                         onClick={() => this.createProfile()}
                              />
                          </Link>
                      </div>

          </div>
      );
  }
}

const mapStateToProps = state => {
    return {
        isAuth: state.authUser.isAuth,
        user: state.authUser.user,
    }
};

export default Questionnaire;
