import './App.css';
import {LoginScreen} from "./sceen/LoginScreen";
import {RegisterScreen} from "./sceen/RegisterScreen";
import {CompanyScreen} from "./sceen/CompanyScreen";
import {Header} from "./view/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {EventsScreen} from "./sceen/EventsScreen";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={LoginScreen}/>
                <Route exact path='/register' component={RegisterScreen}/>
                <Route exact path='/events' component={EventsScreen}/>
                <Route path='/company/:id' render={(props) => <CompanyScreen companyId={props.match.params.id}/>}/>

            </Switch>
        </main>
    )
}

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main/>
            </div>
        </BrowserRouter>
    );
}

export default App;