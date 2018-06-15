import React, {Component } from 'react';
import {connect} from 'react-redux';
import CheckBox from  './CheckBox'
import {skills} from '../constants/technologyConstants';

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