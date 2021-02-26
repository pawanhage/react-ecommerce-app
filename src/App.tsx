import React from 'react';
import './App.css';
import Menu from './components/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Items from './components/Items';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './configureStore';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Menu></Menu>
                    <Switch>
                        <Route path='/items' component={Items} />
                        <Route path='/cart' component={Cart} />
                        <Route path="**">
                            <Redirect to='/items'></Redirect>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
