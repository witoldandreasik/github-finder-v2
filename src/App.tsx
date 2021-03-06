import React, { useState } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import './App.css';
import SearchScreen from './components/searchScreen';
import UserScreen from './components/userScreen';
import RepositoryScreen from './components/repositoryScreen';
import Landing from './components/landing';
import About from './components/about';
import Contact from './components/contact';
export interface UserProps { login: string };
export interface RepoitoryProps { id: string };

function App() {
  document.title = 'Git explorer'
  let [qstring, changeqstring] = useState('')

  return (<>
    <nav className="navbar">

      <Link className="navbar-brand" to="/search#">
        <i className="demo-icon icon-github-circled"></i>
        Search
      </Link>
      <Link className="navbar-brand" to="/"> | Home</Link>
      <Link className="navbar-brand" to="/about"> | About</Link>
      <Link className="navbar-brand" to="/contact"> | Contact</Link>

    </nav>
    <Route exact path="/">
      <Landing></Landing>
    </Route>
    <Route exact path="/about">
      <About></About>
    </Route>
    <Route exact path="/contact">
      <Contact></Contact>
    </Route>

    <Route path='/search' >
      <SearchScreen qstring={qstring} changeqstring={changeqstring}></SearchScreen>
    </Route >

    <Route path='/user/:login' component={UserScreen}></Route >
    <Route path='/repository/:id' component={RepositoryScreen}></Route >

  </>);
}

export default App;
