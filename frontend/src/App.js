import './App.css';
import {LoginScreen} from "./sceen/LoginScreen";
import {RegisterScreen} from "./sceen/RegisterScreen";
import {CompanyScreen} from "./sceen/CompanyScreen";
import {Header} from "./view/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {EventsScreen} from "./sceen/EventsScreen";
import {CreaseCompanyScreen} from "./sceen/CreaseCompanyScreen";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={EventsScreen}/>
                <Route exact path='/login' component={LoginScreen}/>
                <Route exact path='/register' component={RegisterScreen}/>
                <Route exact path='/events' component={EventsScreen}/>

                <Route exact path='/create/company' component={CreaseCompanyScreen}/>
                {/*<Route path='/create/event/:id' render={(props) => <CreateEventScreen companyId={props.match.params.id}/>}/>*/}
                <Route exact path='/create/event' component={CreaseCompanyScreen}/>
                <Route exact path='/create/promo_code' component={CreaseCompanyScreen}/>

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
