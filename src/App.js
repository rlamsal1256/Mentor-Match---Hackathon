import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import Questionnaire from './components/Questionnaire';
import Profile from './components/Profile';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/questionnaire" component={Questionnaire} />
                    <Route exact path="/profile/" component={Profile} />
                </Switch>
            </div>
        );
    }
}

export default App;
