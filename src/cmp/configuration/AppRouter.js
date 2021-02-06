import { Route, Switch} from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Profile from '../Profile'
import QuizBee from '../QuizBee'
import Login from '../varify/Login'
import Signup from '../varify/Signup'
import Logout from '../varify/Logout'
import SetQuestions from '../SetQuestions'
import {Training} from '../Training'

function AppRouter() {
    return (
        <div className="page-app">
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} exact />
                <Route path="/profile" component={Profile} exact />
                <Route path="/question" component={QuizBee} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/signup" component={Signup} exact />
                <Route path="/logout" component={Logout} exact />
                <Route path="/setquestions" component={SetQuestions} exact />
                <Route path="/training" component={Training} exact />
            </Switch>
        </div>

    )
}
export default AppRouter