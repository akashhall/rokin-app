import React from 'react';
// import json from './data.json';
// import Forms from './../Forms';
import { getOfferHistory, addBeacon } from './../../../../../api';
import ModalPopover from './../../../../ModalPopover';
import { IoMdCloseCircleOutline, IoMdCreate } from 'react-icons/io'
class OfferHistory extends React.Component {
  constructor(props) {
    super(props);

    this.selecteId = null;
    this.state = {
      data: [],
      editData: {
        // name: '',
        // address: '',
        // beacon_room: '',
        // location: '',
        // major: '',
        // minor: '',
        // offer_beacon: false
        name: '',
        date: '',
        action: '',
        actionType: '',
        offerMeassage: '',
        RedeemStatus: ''

      }
    }
  };

  render() {
    const headers = [
      'User Name',
      'Mobile',
      'Branch',
      'Offer Id',
      'Product Id',
      'Product Price',
      'Offer Percentage',
      'Offer Price',
      'Redeem Status',
      'Created Date',
      'Redeem Date'
    ];
    return (
      <React.Fragment >
        <div>
          <div className="container">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>Offer History</h2>
                  </div>
                  {/* <div className="col-sm-6">
                    <a onClick={() => this.openEditModal()} className="btn btn-success"><span>Add New Beacon</span></a>
                    {/* <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a> */}
                  {/* </div> */}
                </div>
                <div className="panel-heading" style={{ padding: '10px 10px', height: 'auto', display: 'flex' }}>

                  <label htmlFor="game">Select Redeem Status:</label>
                  <select style={{ width: '20%', display: 'inline-block', marginBottom: '15px' }} className="form-control frmclr ng-pristine ng-untouched ng-valid ng-not-empty" name="status" ng-model="OHC.redeemStatus">
                    <option value="All" selected="selected">All</option>
                    <option value="Redeem">Redeem</option>
                    <option value="Redeem">Redeemed</option>
                  </select>
                  &nbsp;
                  <label style={{ marginTop: '0px' }} htmlFor="startDate" >Start Date:</label>
                  &nbsp;
                  <input style={{ marginBottom: '15px' }} ng-model="OHC.startDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
                  &nbsp;
                  <label htmlFor="endDate">End Date:</label>
                  &nbsp;
                  <input style={{ marginBottom: '15px' }} ng-model="OHC.endDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
                  {/* <button style={{ marginBottom: '15px', padding: '4px' }} className="btn btn-primary" ng-click="OHC.getOffersHistory()">Submit</button> */}
                  <button class="btn btn-primary" style={{ marginTop: '1px', marginBottom: '16px' }}>Submit</button>
                </div>

              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    {
                      headers && headers.length ?
                        headers.map((header) => <th>{header}</th>) : null
                    }
                  </tr>
                </thead>
                <tbody>
                  {this.state.data && this.state.data.length ?
                    this.state.data.map((d, i) =>
                      <tr key={i}>
                        <td style={{ width: '200px' }}>{d.name}</td>
                        <td>{d.address}</td>
                        <td>{d.beacon_uuid}</td>
                        <td>{d.beacon_room}</td>
                        <td>{d.location}</td>
                        <td>{d.offer_beacon.toString()}</td>
                        <td>
                          <a style={{ fontSize: '30px', marginRight: '20px' }} title="Edit" onClick={() => this.openEditModal(i)} className="edit"><IoMdCreate /></a>
                          <a style={{ fontSize: '30px' }} title="Delete" className="delete"><IoMdCloseCircleOutline /></a>
                        </td>
                      </tr>
                    ) : null
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment >
    )
  }
}

export default OfferHistory;
