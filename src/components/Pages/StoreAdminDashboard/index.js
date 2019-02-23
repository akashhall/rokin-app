/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './styles.scss'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OrgForm from '../OrgForm';
import Beacon from '../StoreAdminForms/Forms/Beacons';
import Quiz from '../StoreAdminForms/Forms/Quiz';
import Users from '../StoreAdminForms/Forms/Users';
import CustomerHistory from '../StoreAdminForms/Reports/CustomerHistory';
import Notification from './../StoreAdminForms/Forms/Notifications';
import CurrentUsers from './../StoreAdminForms/Reports/CurrentUsers';
// import CustomerHistory from './../StoreAdminForms/Reports/CustomerHistory';
import CustomerReport from './../StoreAdminForms/Reports/CustomerReport';
import CustomerRequest from './../StoreAdminForms/Reports/CustomerRequest';
import GameHistory from './../StoreAdminForms/Reports/GameHistory';
import OfferHistory from './../StoreAdminForms/Reports/OfferHistory';
import OfferReport from './../StoreAdminForms/Reports/OfferReport';
import SendOffer from './../StoreAdminForms/Forms/SendOffer';
import { getAllCommon } from './../../../api';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outletData: {},
      article: true,
      beacons: false,
      quiz: false,
      quizOffer: false,
      gameOffer: false,
      notifications: false,
      offers: false,
      products: false,
      sendOffer: false,
      treasureHunt: false,
      users: false,
      customerHistory: false,
      gameHistory: false,
      offerHistory: false,
      customerReport: false,
      CustomerRequest: false,
      offerReport: false,
      currentUsers: false
    }
  }
  componentDidMount() {
    getAllCommon('get-outlet', { id: sessionStorage.outlet_id }).then((data) => this.setState({ outletData: data.data }));
  }

  ShowForms = (type) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case 'beacon': {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: false, customerReport: false, customerHistory: false, gameHistory: false, offerHistory: false, beacons: true, quiz: false, article: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false })
        break;
      }
      case 'quiz': {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: false, customerReport: false, customerHistory: false, gameHistory: false, offerHistory: false, beacons: false, quiz: true, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'quizOffer': {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: false, customerReport: false, customerHistory: false, gameHistory: false, offerHistory: false, beacons: false, quiz: false, quizOffer: true, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'gameOffer': {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: false, customerReport: false, customerHistory: false, gameHistory: false, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: true, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'notifications': {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: false, customerReport: false, customerHistory: false, gameHistory: false, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: true, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'offers': {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: false, customerReport: false, customerHistory: false, gameHistory: false, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: true, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'products': {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: false, customerReport: false, customerHistory: false, gameHistory: false, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: true, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'sendOffer': {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: false, customerReport: false, customerHistory: false, gameHistory: false, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: true, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'treasureHunt': {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: false, customerReport: false, customerHistory: false, gameHistory: false, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: true, users: false, article: false })
        break;
      }
      case 'users': {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: false, customerReport: false, customerHistory: false, gameHistory: false, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: true, article: false })
        break;
      }
      case 'customerHistory': {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: false, customerReport: false, customerHistory: true, gameHistory: false, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'gameHistory': {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: false, customerReport: false, customerHistory: false, gameHistory: true, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'offerHistory': {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: false, customerReport: false, customerHistory: false, gameHistory: false, offerHistory: true, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'currentUsers': {
        this.setState({ currentUsers: true, offerReport: false, customerRequests: false, customerReport: false, customerHistory: false, gameHistory: false, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'customerReport': {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: false, customerReport: true, RecustomerHistory: false, gameHistory: false, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'offerReport': {
        this.setState({ currentUsers: false, offerReport: true, customerRequests: false, customerReport: false, customerHistory: false, gameHistory: false, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'customerRequests': {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: true, customerReport: false, customerHistory: false, gameHistory: false, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }


      default: {
        this.setState({ currentUsers: false, offerReport: false, customerRequests: false, customerReport: false, customerHistory: false, gameHistory: false, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: true })
      }
    }
  }
  logoutSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user_id');
    sessionStorage.removeItem('role');
    this.props.history.push({
      pathname: '/',
    })
  }
  render() {
    return (
      <React.Fragment>
        {/* {"Dashboards"} */}
        <div className="nano-content">
          <header><ul class="header">

            <li className='admin'>

              <strong>StoreAdmin</strong></li>
            <div>
              <img style={{ width: '150px', height: 'auto' }} src="rokinapp.png" />
              <span>{this.state.outletData.name}</span>
            </div>
            <button onClick={this.logoutSession} className="btn btn-">Logout</button>
          </ul>
          </header>
          <nav>
            <div id="mainnav-profile" className="mainnav-profile">
              {/* <div className="profile-wrap">
                <div className="pad-btm">
                </div>
                <span className='admin'>StoreAdmin</span>
              </div> */}
              {/* <a className="box-block" data-toggle="collapse" aria-expanded="false">
                <p className="admin-name" id="UserNameloggedin1">Welcome rohit</p>
              </a> */}
            </div>

            <div id="mainnav-shortcut">
              <ul className="list-unstyled" />
            </div>
            <ul id="mainnav-menu" className="list-group">
              {/* <li className="list-header">Navigation</li> */}
              <ExpansionPanel >
                <ExpansionPanelSummary className="icon" expandIcon={<ExpandMoreIcon />}>
                  Forms
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    <ul className="" >
                      <li>
                        <a onClick={() => this.ShowForms('beacon')}>
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Beacons</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.ShowForms('quiz')}>
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Quiz</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.ShowForms('quizOffer')}>
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Quiz Offers</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.ShowForms('treasureHunt')}>
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Treasure Hunt</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.ShowForms('products')}>
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Products</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.ShowForms('users')}>
                          <i className="ion-compose" />
                          <span className="menu-title">
                            <strong>Users</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a honClick={() => this.ShowForms('offers')}>
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Offers</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.ShowForms('notifications')}>
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Notifications</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.ShowForms('sendOffer')}>
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Send/Redeem Offers</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.ShowForms('gameOffer')}>
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Redeem Game Offers</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                      </li></ul>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <div className="dropdown" id="mainnav-profile" style={{ margin: '15px 0px' }}>
              </div>
              <div className="dropdown" id="mainnav-profile">

                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>Reports</ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      <ul className="" style={{ width: '100%' }}>
                        <li>
                          <a onClick={() => this.ShowForms('customerHistory')}>
                            <i className="ti-view-list" />
                            <span className="menu-title">
                              <strong>Customer History</strong>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a onClick={() => this.ShowForms('gameHistory')}>
                            <i className="ti-view-list" />
                            <span className="menu-title">
                              <strong>Game History</strong>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a onClick={() => this.ShowForms('offerHistory')}>
                            <i className="ti-view-list" />
                            <span className="menu-title">
                              <strong>Offer History</strong>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a onClick={() => this.ShowForms('currentUsers')}>
                            <i className="ti-view-list" />
                            <span className="menu-title">
                              <strong>Current Users</strong>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a onClick={() => this.ShowForms('customerReport')}>
                            <i className="ti-view-list" />
                            <span className="menu-title">
                              <strong>Customer Report</strong>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a onClick={() => this.ShowForms('offerReport')}>
                            <i className="ti-view-list" />
                            <span className="menu-title">
                              <strong>Offer Report</strong>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a onClick={() => this.ShowForms('customerRequests')}>
                            <i className="ti-view-list" />
                            <span className="menu-title">
                              <strong>Customer Requests</strong>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </ul>
            <img src="funnDynamix.png" />
          </nav>
          {/* <header><ul class="header">
            <li>Organization:</li>
            <li>Branch: HRC Mumbai-Worli</li>
            <button>Logout</button>
          </ul>
          </header> */}
          <article>
            {/* Welcome Store Admin */}
            {this.state.article ?
              <div style={{ background: 'white', paddingTop: '15px', textAlign: 'center', border: '1px solid lightgray', boxShadow: '0px 0px 6px 0px grey', paddingBottom: '15px' }}>
                <h4>{this.state.outletData.description}</h4>
                <img style={{ width: '900px', height: 'auto' }} src={this.state.outletData.image_path} />
              </div> : null}
            {/* <OrgForm /> */}
            {this.state.beacons && <Beacon />}
            {this.state.quiz && <Quiz />}
            {this.state.users && <Users />}
            {this.state.customerHistory && <CustomerHistory />}
            {this.state.currentUsers && <CurrentUsers />}
            {this.state.customerReport && <CustomerReport />}
            {this.state.gameHistory && <GameHistory />}
            {this.state.customerRequests && <CustomerRequest />}
            {this.state.offerHistory && <OfferHistory />}
            {this.state.offerReport && <OfferReport />}
            {this.state.notifications && <Notification />}
            {this.state.sendOffer && <SendOffer />}

          </article>
        </div>
      </React.Fragment>
    )
  }

}

export default Dashboard;