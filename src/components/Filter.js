import React, {Component } from 'react';
import CheckBox from  './CheckBox'
import {skills} from '../constants/technologyConstants'
class Filter extends Component{
    render()
    {
        return(
            <div className='flex-container-row'>
                <div className='filters'>
                    Filters
                    <fieldset>
                        <legend> Choose your interests</legend>
                            <CheckBox interest={skills.JAVA} onChange ={(value, interest) => this.addFilters(value, interest)} ></CheckBox>
                            <CheckBox interest={skills.MONGO} onChange ={(value, interest) => this.addFilters(value, interest)}></CheckBox>
                            <CheckBox interest={skills.HTML} onChange ={(value, interest) => this.addFilters(value, interest)}></CheckBox>
                            <CheckBox interest={skills.JAVASCRIPT} onChange ={(value, interest) => this.addFilters(value, interest)}> </CheckBox>


                    </fieldset>

                </div>

            </div>
        )
    }

}

export default Filter;