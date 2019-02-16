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
import { getAllOrg } from './../../../api';
class SuperAdminDashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let data = getAllOrg(sessionStorage.token);
    data.then((data) => {
      console.log(data)
    })
  }
  render() {
    return (
      <React.Fragment>
        {/* {"Dashboards"} */}
      
      </React.Fragment>
    )
  }

}

export default SuperAdminDashboard;