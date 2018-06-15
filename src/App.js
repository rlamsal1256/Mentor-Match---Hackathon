import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Hodor from './components/Hodor';
import Profile from './components/Profile';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Hodor} />
                    <Route exact path="/profile/" component={Profile} />
                </Switch>
            </div>
        );
    }
}

export default App;
