import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import BrowsePage from './../components/Pages/BrowsePage';
// import Forms from './Pages/Forms';
import '../styles/App.css';

class App extends Component {
    /*Added MainRoute Component For App Routing*/
    render() {
        return (
            <div>
                <header >
                    {/* <h1>WElCOME TO SYMBO INSURANCE</h1> */}
                </header>
                <Switch>
                    <Route exact path='/' component={BrowsePage} />
                    {/* <Route path='/PDP' component={PDP} /> */}
                    {/* <Route path='/Compare' component={ComparePage} /> */}
                    {/* <Route path='/forms' component={Forms} /> */}
                </Switch>
                {/* <MainRoutes /> */}
                <footer>
                    {/* <h1>Please Visit : www.symboinsurance.com</h1> */}
                </footer>
            </div>
        );
    }
}

export default App;