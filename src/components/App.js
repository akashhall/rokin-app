import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import LoginPage from './../components/Pages/LoginPage';
import StoreAdminDashboard from './../components/Pages/StoreAdminDashboard';
import SuperAdminDashboard from './../components/Pages/SuperAdminDashboard';
import Beacons from '../components/Pages/StoreAdminForms/Forms/Beacons';
// import GameOffer from '../components/Pages/StoreAdminForms/Forms/GameOffer';
// import Notifications from '../components/Pages/StoreAdminForms/Forms/Notifications';
import Offers from '../components/Pages/StoreAdminForms/Forms/Offers';
import Products from '../components/Pages/StoreAdminForms/Forms/Products';
// import Quiz from '../components/Pages/StoreAdminForms/Forms/Quiz';
// import QuizOffers from '../components/Pages/StoreAdminForms/Forms/QuizOffers';
// import SendOffer from '../components/Pages/StoreAdminForms/Forms/SendOffer';
// import TreasureHunt from '../components/Pages/StoreAdminForms/Forms/TreasureHunt';
// import Users from '../components/Pages/StoreAdminForms/Forms/Users';
import CurrentUsers from '../components/Pages/StoreAdminForms/Reports/CurrentUsers';
import CustomerHistory from '../components/Pages/StoreAdminForms/Reports/CustomerHistory';
import CustomerReport from '../components/Pages/StoreAdminForms/Reports/CustomerReport';
import GameHistory from '../components/Pages/StoreAdminForms/Reports/GameHistory';
import OfferHistory from '../components/Pages/StoreAdminForms/Reports/OfferHistory';
import OfferReport from '../components/Pages/StoreAdminForms/Reports/OfferReport';
import CustomerRequest from '../components/Pages/StoreAdminForms/Reports/CustomerRequest';
import OrgForm from '../components/Pages/OrgForm';
import Notifications from './../components/Pages/StoreAdminForms/Forms/Notifications'
import SendOffer from './../components/Pages/StoreAdminForms/Forms/SendOffer'

// import Forms from './Pages/Forms';
import '../styles/App.css';
import '../styles/custom.scss';

class App extends Component {
  /*Added MainRoute Component For App Routing*/
  render() {
    return (
      <div>
        <header >
          {/* <h1>WElCOME TO SYMBO INSURANCE</h1> */}
        </header>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route path='/org' component={OrgForm} />
          <Route path='/StoreAdminDashboard' component={StoreAdminDashboard} />
          <Route path='/SuperAdminDashboard' component={SuperAdminDashboard} />
          <Route path='/beacons' component={Beacons} />
          <Route path='/products' component={Products} />
          <Route path='/offers' component={Offers} />
          {/* <Route path='/gameOffer' component={GameOffer} />
          <Route path='/notifications' component={Notifications} />
          <Route path='/offers' component={Offers} />
          <Route path='/product' component={Products} />
          <Route path='/quiz' component={Quiz} />
          <Route path='/quizOffers' component={QuizOffers} />
          <Route path='/sendOffer' component={SendOffer} />
          <Route path='/treasureHunt' component={TreasureHunt} />
          <Route path='/users' component={Users} />
          <Route path='/currentUsers' component={CurrentUsers} />

          <Route path='/customerHistory' component={CustomerHistory} />
          <Route path='/customerRequests' component={CustomerRequests} />
          <Route path='/gamehistory' component={GameHistory} />
          <Route path='/offerHistory' component={OfferHistory} />
          <Route path='/offerReport' component={OfferReport} /> */}
          <Route path='/customerRequest' component={CustomerRequest} />
          <Route path='/customerReport' component={CustomerReport} />
          <Route path='/customerHistory' component={CustomerHistory} />
          <Route path='/offerHistory' component={OfferHistory} />
          <Route path='/gamehistory' component={GameHistory} />
          <Route path='/notifications' component={Notifications} />
          <Route path='/currentUsers' component={CurrentUsers} />
          <Route path='/offerReport' component={OfferReport} />  
          <Route path='/sendOffer' component={SendOffer} />
          <Route path='/notifications' component={Notifications} />
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
