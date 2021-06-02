import { Router, Route, Switch, Redirect } from 'react-router-dom';

import history from '../services/history/';

import Login from '../pages/login';
import NavBar from '../pages/navbar';



const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route path="/login" component={Login} /> 
                <Route path="/navbar" component={NavBar} />
            </Switch>
        </Router>
    )
}
export default Routes