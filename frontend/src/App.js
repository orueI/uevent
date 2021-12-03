import './App.css';
import {LoginScreen} from "./sceen/LoginScreen";
import {RegisterScreen} from "./sceen/RegisterScreen";
import {CompanyScreen} from "./sceen/CompanyScreen";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {EventsScreen} from "./sceen/EventsScreen";
import {CreaseCompanyScreen} from "./sceen/CreaseCompanyScreen";
import {CreateEventScreen} from "./sceen/CreateEventScreen";
import {BuyEventScreen} from "./sceen/BuyEventScreen";
import {Header} from "./view/Header";
import {CreatePromoCodeScreen} from "./sceen/CreatePromoCodeScreen";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={EventsScreen}/>
                <Route exact path='/login' component={LoginScreen}/>
                <Route exact path='/register' component={RegisterScreen}/>
                <Route exact path='/events' component={EventsScreen}/>

                <Route exact path='/create/company' component={CreaseCompanyScreen}/>
                <Route path='/create/event/:id' render={(props) => CreateEventScreen(props)}/>
                <Route path='/create/promo_code/:id' render={(props) => CreatePromoCodeScreen(props)}/>

                <Route path='/company/:id' render={(props) => <CompanyScreen companyId={props.match.params.id}/>}/>

                <Route path='/buy/event/:id'
                       render={(props) => <BuyEventScreen eventId={props.match.params.id}/>}/>
            < /Switch>
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
