import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 
import reducer from './reducer';
import Home from './component/home/Home';
import MenuLists from './component/menu/MenuList';
import Head from './component/home/Head';
import UserRegister from './component/user/UserRegister';
import UserLogin from './component/user/UserLogin';

function App() {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <Head/>
          <Switch>
            <Route exact path="/user/login" component={UserLogin}/>
            <Route exact path="/user/register" component={UserRegister}/>
            <Route exact path="/menu/:id" component={MenuLists}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
