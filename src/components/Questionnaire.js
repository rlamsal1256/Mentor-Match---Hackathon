import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { skills } from "../constants/technologyConstants";
import CheckBox from './CheckBox';
import { createUser } from '../redux/actions/actions';
import SignIn from './SignIn';
import TextBox from './TextBox';

class Questionnaire extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: Math.floor((Math.random() * 1000) + 1),
            skills: [],
            interests: [],
            title: ''
        };
    }

    addSkills(value, skill) {
        if (value) {
            this.setState(prevState => ({
                skills: [...prevState.skills, skill]
            }))
        }
    }

    addInterests(value, interest) {
        if (value) {
            this.setState(prevState => ({
                interests: [...prevState.interests, interest]
            }))
        }
    }

    createProfile() {
        console.log('creating profile');
        console.log('skills', this.state.skills);
        console.log('interests ', this.state.interests);
        console.log('ID', this.state.id);
        const user = {
            'id': this.state.id,
            'email': this.props.user.email,
            'name': this.props.user.name,
            'skills': this.state.skills,
            'interests': this.state.interests
        };

        this.props.createUser(user);
    }

    handleInputChange(value) {
        this.setState({
            title: value
        })
    }

    render() {
        return (
            <div>
                { Object.keys(this.props.user).length !== 0  ?
                    (
                        <div>
                            {this.props.isAuth ? '' : <SignIn />}
                        </div>
                    ) :
                    (
                        <div className='flex-container-column align-center'>
                            <img className='logo' src={require('../assets/M-logo.svg')} alt="logo"/>
                            <div>
                                Tell us about yourself
                            </div>

                            <TextBox placeholder='Job Title' onInputChange={(value) => this.handleInputChange(value)}/>

                            <fieldset>
                                <legend>List the top 3 skills you want to teach</legend>
                                <CheckBox interest={skills.CSS} onInputChange={(value, interest) => this.addSkills(value, interest)} />
                                <CheckBox interest={skills.HTML} onInputChange={(value, interest) => this.addSkills(value, interest)} />
                                <CheckBox interest={skills.JAVA} onInputChange={(value, interest) => this.addSkills(value, interest)} />
                                <CheckBox interest={skills.JAVASCRIPT} onInputChange={(value, interest) => this.addSkills(value, interest)} />
                                <CheckBox interest={skills.MONGO} onInputChange={(value, interest) => this.addSkills(value, interest)} />
                                <CheckBox interest={skills.REACT} onInputChange={(value, interest) => this.addSkills(value, interest)} />
                            </fieldset>

                            <fieldset>
                                <legend>List the top 3 skills you want to learn</legend>
                                <CheckBox interest={skills.CSS} onInputChange={(value, interest) => this.addInterests(value, interest)} />
                                <CheckBox interest={skills.HTML} onInputChange={(value, interest) => this.addInterests(value, interest)} />
                                <CheckBox interest={skills.JAVA} onInputChange={(value, interest) => this.addInterests(value, interest)} />
                                <CheckBox interest={skills.JAVASCRIPT} onInputChange={(value, interest) => this.addInterests(value, interest)} />
                                <CheckBox interest={skills.MONGO} onInputChange={(value, interest) => this.addInterests(value, interest)} />
                                <CheckBox interest={skills.REACT} onInputChange={(value, interest) => this.addInterests(value, interest)} />
                            </fieldset>


                            <Link to={`/profile/${this.state.id}`}>
                                <img src={require('../assets/Button-Hover.svg')} alt="button-next"
                                           onClick={() => this.createProfile()}
                                />
                            </Link>
                        </div>
                    )
                }
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

export default connect(mapStateToProps, {
    createUser
})(Questionnaire);
