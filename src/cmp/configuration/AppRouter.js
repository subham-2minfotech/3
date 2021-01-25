import {Route, Switch} from 'react-router-dom'

function AppRouter() {
    return(
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/profile" component={Home} exact />
            <Route path="/" component={Home} exact />
        </Switch>
    )
}