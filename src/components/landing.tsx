import React, { useState } from 'react';
import '../styles/landing.css';
import '../styles/repositoryComponents.css'
import { Link, Redirect, Route } from 'react-router-dom';
import SearchScreen from './searchScreen';

function Landing() {

    let [qstring, changeqstring] = useState('')


    return (<div className="student-info user-box">
        <h1 className='student-title'>Name and surname: Witold Andreasik, Andrzej Chłodziński</h1>
        <h2 className="student-number">Album index: 64042, 64057</h2>
        <h3 className="student-group">Project Group: SP02</h3>

        <Link className="navbar-brand landing-go-to" to="/search">Go to application</Link>
        <Route path='/search' >
            <SearchScreen qstring={qstring} changeqstring={changeqstring}></SearchScreen>
        </Route >

    </div>)

}
export default Landing