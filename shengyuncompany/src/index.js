import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from "react-router"
// import Home from "./component/home"
import Introduce from "./component/introduce"
import SuccessExample from "./component/successExample"
import OurService from "./component/ourService"
import CallUs from "./component/callUs"
import App from './component/App';


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            {/*<IndexRoute  component={Home}></IndexRoute>*/}
            <Route path="/callUs" component={CallUs}></Route>
            <Route path="/successExample" component={SuccessExample}></Route>
            <Route path="/ourService" component={OurService}></Route>
            <Route path="/introduce" component={Introduce}></Route>
        </Route>
    </Router>
), document.getElementById('root'));

