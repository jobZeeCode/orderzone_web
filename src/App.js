import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 
import reducer from './reducer';
import Home from './component/home/Home';
import MenuLists from './component/menu/MenuList';

function App() {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/menu/:id" component={MenuLists}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
