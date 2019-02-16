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
import CustomerHistory from '../StoreAdminForms/Reports/CustomerHistory';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      offerHistory: false



    }
  }

  ShowForms = (type) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case 'beacon': {
        this.setState({ beacons: true, quiz: false, article: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false })
        break;
      }
      case 'quiz': {
        this.setState({ beacons: false, quiz: true, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'quizOffer': {
        this.setState({ beacons: false, quiz: false, quizOffer: true, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'gameOffer': {
        this.setState({ beacons: false, quiz: false, quizOffer: false, gameOffer: true, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'notifications': {
        this.setState({ beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: true, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'offers': {
        this.setState({ beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: true, products: false, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'products': {
        this.setState({ beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: true, sendOffer: false, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'sendOffer': {
        this.setState({ beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: true, treasureHunt: false, users: false, article: false })
        break;
      }
      case 'treasureHunt': {
        this.setState({ beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: true, users: false, article: false })
        break;
      }
      case 'users': {
        this.setState({ beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: true, article: false })
        break;
      }
      case 'customerHistory': {
        this.setState({ customerHistory: true, gameHistory: false, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: true, article: false })
        break;
      }
      case 'gameHistory': {
        this.setState({ customerHistory: false, gameHistory: true, offerHistory: false, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: true, article: false })
        break;
      }
      case 'offerHistory': {
        this.setState({ customerHistory: false, gameHistory: false, offerHistory: true, beacons: false, quiz: false, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: true, article: false })
        break;
      }

      default: {
        this.setState({ beacons: false, quiz: false, article: true, quizOffer: false, gameOffer: false, notifications: false, offers: false, products: false, sendOffer: false, treasureHunt: false, users: false, article: false, customerHistory: false, gameHistory: false, offerHistory: false })
      }
    }
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
              <li>Organization:</li>
              <li>Branch: HRC Mumbai-Worli</li>
            </div>
            <button>Logout</button>
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
                        <a onClick={() => this.ShowForms('Notificatios')}>
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
                          <a onClick={() => this.ShowForms('gameHistoy')}>
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
                          <a href="#!/dashboard/userinroom">
                            <i className="ti-view-list" />
                            <span className="menu-title">
                              <strong>Current Users</strong>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#!/dashboard/userreport">
                            <i className="ti-view-list" />
                            <span className="menu-title">
                              <strong>Customer Report</strong>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#!/dashboard/offerreport">
                            <i className="ti-view-list" />
                            <span className="menu-title">
                              <strong>Offer Report</strong>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#!/dashboard/instantoffer">
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
            <img src="/funndynamix.png"></img>
          </nav>
          {/* <header><ul class="header">
            <li>Organization:</li>
            <li>Branch: HRC Mumbai-Worli</li>
            <button>Logout</button>
          </ul>
          </header> */}
          <article>
            {/* Welcome Store Admin */}
            {this.state.article ? 'Welcome Store Admin' : null}
            {/* <OrgForm /> */}
            {this.state.beacons && <Beacon />}
            {this.state.quiz && <Quiz />}
            {this.state.customerHistory && <CustomerHistory />}
          </article>
        </div>
      </React.Fragment>
    )
  }

}

export default Dashboard;