import React, {Component } from 'react';

class Filter extends Component{
    render()
    {
        return(
            <div className='flex-container-row'>
                <div className={'filters'}>
                    Filters
                    <fieldset>
                        <legend>
                            <Checkbox interest={skills.JAVA} onChange ={(value, interest) => this.addFilters(value, interest)} ></Checkbox>
                            <Checkbox interest={skills.MONGO} onChange ={(value, interest) => this.addFilters(value, interest)}></Checkbox>
                            <Checkbox interest={skills.HTML} onChange ={(value, interest) => this.addFilters(value, interest)}></Checkbox>
                            <Checkbox interest={skills.JAVASCRIPT} onChange ={(value, interest) => this.addFilters(value, interest)}> </Checkbox>

                        </legend>
                    </fieldset>

                </div>

            </div>
        )
    }

}

export default Filter;