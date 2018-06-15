import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import Questionnaire from './components/Questionnaire';
import Profile from './components/Profile';
import Filter from './components/Filter';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/questionnaire" component={Questionnaire} />
                    <Route exact path="/profile/:id" component={Profile} />
                    <Route exact path="/filter/" component={Filter} />
                </Switch>
            </div>
        );
    }
}

export default App;
