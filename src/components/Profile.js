import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import {skills} from "../constants/technologyConstants";

// import {skills} from "../constants/technologyConstants";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Jon Doe',
            email: 'a@a.com',
            skills: [],
            interests: []
        };
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id, 10);
        console.log(id);
        console.log(this.props.users);
        const profile = this.props.users.filter(profile => parseInt(profile.id, 10) === id);
        console.log('NAME', this.state.name);
        console.log(profile);

        if (profile && profile.length > 0) {
            this.setState({
                name: profile[0].name,
                email: profile[0].email,
                skills: profile[0].skills,
                interests: profile[0].interests
            });
        }
    }

    render() {
        return (
            <div className='flex-container-column align-center'>
                <img className='logo' src={require('../assets/M-logo.svg')} alt="logo"/>
                <div className='profile-flex'>
                    <div className="image-cropper">
                        <img src="http://www.electricvelocity.com.au/Upload/Blogs/smart-e-bike-side_2.jpg"
                             className="rounded"/>
                    </div>
                    <div className="profile-header">
                        {this.state.name ? this.state.name : 'Kevin'}
                    </div>
                    <div className="profile-details">
                        {this.state.position ? this.state.position : 'Developer'}
                    </div>
                    <div className="profile-details">
                        {this.state.email ? this.state.email : 'a@a.com'}
                    </div>
                    <div>
                        <div className="profile-header">Skills:
                        </div>
                        {this.state.skills && this.state.skills.map((skill, index) => (
                            <li className="profile-details" key={index}>
                                {skill}
                            </li>
                        ))}
                    </div>

                    <div>
                        <div className="profile-header"> Interests:
                        </div>
                        {this.state.interests && this.state.interests.map((interest, index) => (
                            <li className="profile-details" key={index}>
                                {interest}
                            </li>
                        ))}
                    </div>

                    <br></br>

                    <Link to="/filter">
                        <img src={require('../assets/Button-FindMatch.svg')} alt="button-next"
                        />
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.authUser.user,
        isAuth: state.authUser.isAuth,
        users: state.users
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);