import { Router, Route } from 'react-router-dom';

import history from '../services/history/';

import Login from '../components/login';

const Routes = () => {
    return (
        <Router history={history}>
            <Route path="/" component={Login} />
        </Router>
    )
}
export default Routes