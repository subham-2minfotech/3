import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import Login from './varify/Login'
import Signup from './varify/Signup'

function Auth() {
    return (
        <div>
            <h1>Auth</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/Signup" component={Signup} />
                <Route path="/Login" component={Login} />
            </Switch>
        </div>
    )
}

export default Auth