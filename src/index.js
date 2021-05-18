import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostList from './components/blog/PostList.js';
import ShowPost from './components/blog/ShowPost.js';
import Update from './components/blog/Update.js';
import Create from './components/blog/Create.js';
import Login from './components/auth/Login.js';
import Register from './components/auth/Register';
import SaveData from './components/SaveData.js';

ReactDOM.render(
  <React.Fragment>
    <Router>
      <Switch>
        <Route exact path='/' component={PostList}/>
        <Route exact path='/create' component={Create}/>
        <Route exact path='/post/:post_id' component={ShowPost}/>
        <Route exact path='/update/:post_id' component={Update}/>
        <Route exact path='/savedata' component={SaveData}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/Register' component={Register}/>
      </Switch>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
