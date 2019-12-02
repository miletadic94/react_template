import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { history } from './store';


const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/' component={Home} exact={true} />
                <Route path='/about' component={About} exact={true} />
            </Switch>
        </Router>
    )
}

export default App;

const Home = () => <Link to="/about">Home</Link>

const About = () => <Link to="/">About</Link>