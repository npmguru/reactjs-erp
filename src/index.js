import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './persistence/reducers';
import reduxThunk from 'redux-thunk';


import App from './App';
import Welcome from './components/masters/Welcome';
import Signup from './components/auth/Signup';
import Feature from './components/feature';


const erpStore = createStore(rootReducer,{},applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={erpStore}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/feature" exact component={Feature} />
            </App>
        </BrowserRouter>
   </Provider>
,
document.querySelector('#root'));