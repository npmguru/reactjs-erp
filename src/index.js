import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import {erpStore,persistor} from './persistence/store';

import App from './App';
import Welcome from './components/masters/Welcome';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import SignOut from './components/auth/signout';



ReactDOM.render(
    <Provider store={erpStore}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/feature" exact component={Feature} />
                <Route path="/signout" exact component={SignOut} />
            </App>
        </BrowserRouter>
        </PersistGate>
   </Provider>
,
document.querySelector('#root'));