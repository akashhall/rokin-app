import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { withStyles } from '@material-ui/core/styles';
import brand from 'ba-utils/brand';
import ApiClient from '../../../../helpers/ApiClient';
import { PapperBlock, CrudTable, Notification } from './../../../components';
import {
  fetchAction,
  addAction,
  removeAction,
  updateAction,
  editAction,
  saveAction,
  closeNotifAction,
} from '../../../actions/CrudTbActions';
import AddOfferForm from './forms/addOfferForm';
// Reducer Branch
const branch = 'crudTableDemo';

const styles = ({
  root: {
    flexGrow: 1,
  }
});
const anchorTable = [
  {
    name: 'id',
    label: 'Id',
    type: 'static',
    initialValue: '',
    hidden: false
  }, {
    name: 'name',
    label: 'Organisation',
    type: 'text',
    initialValue: '',
    width: 'auto',
    hidden: false
  }, {
    name: 'description',
    label: 'Description',
    type: 'text',
    initialValue: '',
    width: 'auto',
    hidden: false
  }, {
    name: 'groupName',
    label: 'Group Name',
    type: 'selection',
    initialValue: 'Select',
    options: ['Shoppin', 'Chillin', 'Nightin'],
    width: '150',
    hidden: false
  }, {
    name: 'edited',
    label: '',
    type: 'static',
    initialValue: '',
    hidden: true
  }, {
    name: 'action',
    label: 'Action',
    type: 'static',
    initialValue: '',
    hidden: false
  },
];
const dataApi = [
  {
    id: 1,
    name: 'rock',
    description: 'BESTSELLER is an international',
    groupName: 'Shoppin',
    edited: false,
  }, {
    id: 2,
    name: 'choice',
    description: 'dfsdf is an international',
    groupName: 'Chillin',
    edited: false,
  }, {
    id: 3,
    name: 'Sugun',
    description: 'dfsgxcv dfg sfdsvs  is an international',
    groupName: 'Nightin',
    edited: false,
  }
];
const client = new ApiClient();
class Offers extends React.Component {
  state = {
    open: false,
  };
  componentDidMount() {
    client.post('https://api.rockinap.com/admin/organisations', {
      data: {
        category: 'shopin out'
      }
    })
      .then(_res => {
        console.log('Org=====>', _res);
      })
      .catch(err => {
        console.log('err------>', err);
      });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  submitForm = (values, ext) => {
    console.log('values=====>', values, '/n===>', ext);
  }

  render() {
    const {
      classes,
      fetchData,
      addEmptyRow,
      dataTable,
      removeRow,
      updateRow,
      editRow,
      finishEditRow,
      closeNotif,
      messageNotif,
    } = this.props;
    const title = brand.name + ' - Organisations';
    const description = brand.desc;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <Notification close={() => closeNotif(branch)} message={messageNotif} />
        <PapperBlock className={classes.root} title="Organisations" desc="Add/Edit or Delete Organisations">
          <Button variant="raised" color="secondary" onClick={this.handleClickOpen}>Open form dialog</Button>
          <CrudTable
            dataInit={dataApi}
            anchor={anchorTable}
            title="Inventory"
            dataTable={dataTable}
            fetchData={fetchData}
            addEmptyRow={addEmptyRow}
            removeRow={removeRow}
            updateRow={updateRow}
            editRow={editRow}
            finishEditRow={finishEditRow}
            branch={branch}
          />
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Add New Offer</DialogTitle>
            <DialogContent>
              <AddOfferForm onSubmit={(values, ext) => this.submitForm(values, ext)} />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </PapperBlock>
      </div>
    );
  }
}

Offers.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  dataTable: PropTypes.object.isRequired,
  addEmptyRow: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired,
  updateRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  finishEditRow: PropTypes.func.isRequired,
  closeNotif: PropTypes.func.isRequired,
  messageNotif: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  force: state, // force state from reducer
  dataTable: state.getIn([branch, 'dataTable']),
  messageNotif: state.getIn([branch, 'notifMsg']),
});

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchAction, dispatch),
  addEmptyRow: bindActionCreators(addAction, dispatch),
  removeRow: bindActionCreators(removeAction, dispatch),
  updateRow: bindActionCreators(updateAction, dispatch),
  editRow: bindActionCreators(editAction, dispatch),
  finishEditRow: bindActionCreators(saveAction, dispatch),
  closeNotif: bindActionCreators(closeNotifAction, dispatch),
});

const OffersPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Offers);

export default withStyles(styles)(OffersPage);
