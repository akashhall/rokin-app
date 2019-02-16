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
import OrgForm from '../OrgForm';
import Organisation from '../SuperAdminForms/Forms/Organisation';
import Branch from '../SuperAdminForms/Forms/Branch';
import { getAllOrg } from '../../../api'
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: true,
      Organisation: false,
      Branch: false,
      Users: false
    }
  }
  componentDidMount() {

    let data = getAllOrg(sessionStorage.token);
    data.then((data) => {
      console.log(data)

    })
  }

  ShowForms = (type) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case 'Organisation': {
        this.setState({ Organisation: true, Branch: false, Users: false, article: false })
        break;
      }
      case 'Branch': {
        this.setState({ Organisation: false, Branch: true, Users: false, article: false })
        break;
      }
      case 'Users': {
        this.setState({ Organisation: false, Branch: false, Users: true, article: false })
        break;
      }
      default: {
        this.setState({ Organisation: false, Branch: false, Users: false, article: true })
      }
    }

  }
  render() {
    return (
      <React.Fragment>
        {sessionStorage.role !== undefined ?
          <div className="nano-content">

            <header><ul class="header">
            <li className='admin'>SuperAdmin</li>>
              {/* <li>Organization:</li>
            <li>Branch: HRC Mumbai-Worli</li> */}
              <button>Logout</button>
            </ul></header>
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
                          <a onClick={() => this.ShowForms('Organisation')}>
                            <i className="ti-view-list" />
                            <span className="menu-title">
                              <strong>Organisation</strong>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a onClick={() => this.ShowForms('Branch')}>
                            <i className="ti-view-list" />
                            <span className="menu-title">
                              <strong>Branch</strong>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a onClick={() => this.ShowForms('Users')}>
                            <i className="ti-view-list" />
                            <span className="menu-title">
                              <strong>Users</strong>
                            </span>
                          </a>
                        </li>
                      </ul>
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

            <article>
              {this.state.article ? ' Welcome Super Admin' : null}
              {this.state.Organisation && <Organisation />}
              {this.state.Branchs && <Branch />}
            </article>
          </div>
          : null}
      </React.Fragment>
    )
  }

}

export default Dashboard;