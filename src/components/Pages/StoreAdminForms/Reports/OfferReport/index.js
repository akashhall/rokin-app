import React from 'react';
import './styles.scss'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import Header from '../../../materialui/components/Header/Header'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {/* {"Dashboards"} */}

        <div className="nano-content">
          {/* <header>
              <ul className="header">
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </header> */}
          <nav>
            <div id="mainnav-profile" className="mainnav-profile">
              <div className="profile-wrap">
                <div className="pad-btm">
                </div>
                <span className='admin'>StoreAdmin</span>
              </div>
              <a className="box-block" data-toggle="collapse" aria-expanded="false">
<p className="admin-name" id="UserNameloggedin1">Welcome rohit</p>
</a>
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
                    <ul className="dropdown-menu" >
                      <li>
                        <a href="#!/dashboard/beacons">
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Beacons</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#!/dashboard/quiz">
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Quiz</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#!/dashboard/quizoffer">
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Quiz Offers</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#!/dashboard/treasurehunt">
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Treasure Hunt</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#!/dashboard/products">
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Products</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#!/dashboard/users">
                          <i className="ion-compose" />
                          <span className="menu-title">
                            <strong>Users</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#!/dashboard/offers">
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Offers</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#!/dashboard/notifications">
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Notifications</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#!/dashboard/sendoffer">
                          <i className="ti-view-list" />
                          <span className="menu-title">
                            <strong>Send/Redeem Offers</strong>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#!/dashboard/redeemgameoffer">
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
                      <ul className="dropdown-menu" style={{ width: '100%' }}>
                        <li>
                          <a href="#!/dashboard/userhistory">
                            <i className="ti-view-list" />
                            <span className="menu-title">
                              <strong>Customer History</strong>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#!/dashboard/gamehistory">
                            <i className="ti-view-list" />
                            <span className="menu-title">
                              <strong>Game History</strong>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#!/dashboard/offershistory">
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
          </nav>
          <header><ul class="header">
            <li>Organization:</li>
            <li>Branch: HRC Mumbai-Worli</li>
          </ul></header>
          <article>
            Welcome Store Admin
              </article>
        </div>
      </React.Fragment>
    )
  }

}

export default Dashboard;