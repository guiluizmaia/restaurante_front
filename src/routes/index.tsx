import { Router, Route, Switch } from 'react-router-dom';

import history from '../services/history/';

import Login from '../pages/login';
import NavBar from '../components/navbar';



const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/login" component={Login} /> 
                <Route path="/navbar" component={NavBar} />
            </Switch>
        </Router>
    )
}
export default Routes