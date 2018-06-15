import React, {Component } from 'react';
import {connect} from 'react-redux';
import CheckBox from  './CheckBox'
import {skills} from '../constants/technologyConstants';
import {Link} from 'react-router-dom';
class Filter extends Component{
    constructor(props){
        super(props);

        this.state = {
            matchedProfiles: [],
            filters: []
        }
    }
    componentDidMount(){
        this.applyFilters();
    }
    addFilters(value, filter){
        if(value) {
            this.setState(prevState => ({
                filters: [...prevState.filters, filter]
            }));
        }
    }

    applyFilters(){
        let matchedProfiles = [];

        this.state.filters.forEach(filter => {
            this.props.users.forEach(user => {
                user.skills.forEach(skill => {
                    if(skill === filter){
                        matchedProfiles.push(user);
                    }
                })
            })
        });

        if(matchedProfiles && matchedProfiles.length > 0)
        this.setState({
            matchedProfiles: matchedProfiles
        });
    }

    render()
    {
        return(
            <div className='flex-container-row'>
                <div className='filters'>
                    Filters
                    <fieldset>
                        <legend> Choose your interests</legend>
                            <CheckBox interest={skills.JAVA} onInputChange ={(value, interest) => this.addFilters(value, interest)} ></CheckBox>
                            <CheckBox interest={skills.MONGO} onInputChange ={(value, interest) => this.addFilters(value, interest)}></CheckBox>
                            <CheckBox interest={skills.HTML} onInputChange ={(value, interest) => this.addFilters(value, interest)}></CheckBox>
                            <CheckBox interest={skills.JAVASCRIPT} onInputChange ={(value, interest) => this.addFilters(value, interest)}> </CheckBox>
                    </fieldset>
                    <button onClick={() => this.applyFilters()}>
                        Apply Filters
                    </button>

                </div>
                <div className= 'results'>
                    {this.state.matchedProfiles.map((matchedProfile, index) => (
                        <li key={index} className= 'matched-profile flex-container-row' >
                            <div style={{flex: '3'}}>
                                <Link to={`/profile/${matchedProfile.id}`}>
                                {matchedProfile.name}
                                </Link>

                            </div>
                            <div style={{flex: '1'}}>
                                <input type="button" value="Request a mentor"/>
                            </div>

                        </li>
                    ))}

                </div>

            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        users: state.users
    }
};
const mapDispatchToProps = dispatch => {
    return{

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);