import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

// import {skills} from "../constants/technologyConstants";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Jon Doe',
            email: 'a@a.com'
            // skills: [skills.JAVA],
            // interests: [skills.JAVASCRIPT]
        };
    }

    componentDidMount() {
        // const id = parseInt(this.props.match.params.id, 10);
        // const profile = this.props.users.filter(profile => parseInt(profile.id, 10) === id);
        //
        // if (profile && profile.length > 0) {
        //     this.setState({
        //         name: profile[0].name,
        //         email: profile[0].email,
        //         skills: profile[0].skills,
        //         interests: profile[0].interests
        //     });
        // }
    }

    render() {
        return (
            <div className='flex-container-column align-center'>
                <img className='logo' src={require('../assets/M-logo.svg')} alt="logo"/>
                <div className='profile-flex'>
                    <div class="image-cropper">
                        <img src="http://www.electricvelocity.com.au/Upload/Blogs/smart-e-bike-side_2.jpg"
                             class="rounded"/>
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
                        {this.state.skill && this.state.skills.map((skill, index) => (
                            <li className="profile-details" key={index}>
                                {skill}
                            </li>
                        ))}
                        <li className="profile-details">Javascript</li>
                        <li className="profile-details">HTML</li>
                        <li className="profile-details">CSS</li>
                    </div>

                    <div>
                        <div className="profile-header"> Interests:
                        </div>
                        {this.state.skill && this.state.skills.map((skill, index) => (
                            <li className="profile-details" key={index}>
                                {skill}
                            </li>
                        ))}
                        <li className="profile-details">Javascript</li>
                        <li className="profile-details">HTML</li>
                        <li className="profile-details">CSS</li>
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
        // user: state.authUser.user,
        // isAuth: state.authUser.isAuth,
        // users: state.users
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);