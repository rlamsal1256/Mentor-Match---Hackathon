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
                <div style={{fontWeight: "bold"}}>
                    {this.state.name ? this.state.name : 'Kevin'}
                </div>
                <div>
                    {this.state.position ? this.state.position : 'Developer'}
                </div>
                <div>
                    {this.state.email ? this.state.email : 'a@a.com'}
                </div>
                <div>
                    <ul>
                        {this.state.skill && this.state.skills.map((skill, index) => (
                            <li key={index}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    Interests:
                    <ul>
                            <li>
                                'Interests'
                            </li>
                        ))}
                    </ul>
                </div>


                <Link to="/filter">
                    <input type="button" value="Find your match"/>
                </Link>
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