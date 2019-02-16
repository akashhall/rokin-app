import React from 'react';
// import json from './data.json';
// import Forms from './../Forms';
import { getOfferHistory, addBeacon } from './../../../../../api';
import ModalPopover from './../../../../ModalPopover';
import { IoMdCloseCircleOutline, IoMdCreate } from 'react-icons/io'
class Beacons extends React.Component {
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

  componentDidMount() {
    // this.editModal.handleShow();
    console.log('did', sessionStorage);
    getOfferHistory({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => this.setState({ data: res.data }))

    // login().then((res) => console.log('res', res));
  }
  onModalClose = () => {
    this.selecteId = null;
    this.setState({
      editData: {
        UserName: '',
        Mobile: '',
        Branch: '',
        OfferId: '',
        ProductId: '',
        ProductPrice: '',
        OfferPercentage: '',
        OfferPrice: '',
        RedeemStatus: '',
        CreatedDate: '',
        RedeemDate: ''
      }
    })
  }
  onSumit = () => {
    const beacon_name = this.name.value;
    const beacon_uuid = this.uuid.value;
    const mac_address = this.address.value;
    const beacon_room = this.room.value;
    const offer_beacon = this.select.options[this.select.selectedIndex].value;
    const major = this.major.value;
    const minor = this.minor.value;
    let a = { type: 'add' }
    console.log('selected id', this.selecteId)
    if (this.selecteId !== null) {
      a = {
        id: this.state.data[this.selecteId].id,
        type: 'update'
      }
    }

    const data = {
      ...a,
      beacon_name,
      beacon_uuid,
      mac_address,
      offer_beacon: offer_beacon === 'true' ? true : false,
      major,
      minor,
      beacon_room,
      outlet_id: "dcba56d9-3801-40c8-9c13-8a77c39de24f",
    }

    addBeacon(data).then((res) => getOfferHistory ({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => { this.setState({ data: res.data }); this.editModal.handleHide() }));

  }
  openEditModal = (i) => {
    if (i !== undefined) {
      this.selecteId = i;
      console.log('open edit', i, this.state.data[i])
      const editData = this.state.data[i];
      this.setState({ editData })
      console.log('edit', editData, this.state)
    }
    console.log('bahar', this.state.editData.category)
    this.editModal.handleShow();
  }
  onDelete = (i) => {
    console.log('dekhte hai')
  }
  render() {
    const headers = [
      'UserName',
      'Mobile',
      'Branch',
      'OfferId',
      'ProductId',
      'ProductPrice',
      'OfferPercentage',
      'OfferPrice',
      'RedeemStatus',
      'CreatedDate',
      'RedeemDate'
    ];
    return (
      <React.Fragment >
        <div>
          <div className="container">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>Game History</h2>
                  </div>
                  {/* <div className="col-sm-6">
                    <a onClick={() => this.openEditModal()} className="btn btn-success"><span>Add New Beacon</span></a>
                    {/* <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a> */}
                  {/* </div> */}
                </div>
                <div className="panel-heading" style={{ padding: '10px 10px', height: 'auto' }}>

                  <label htmlFor="game">Select Redeem Status:</label>
                  <select style={{ width: '20%', display: 'inline-block' }} className="form-control frmclr ng-pristine ng-untouched ng-valid ng-not-empty" name="status" ng-model="OHC.redeemStatus">
                    <option value="All" selected="selected">All</option>
                    <option value="Redeem">Redeem</option>
                    <option value="Redeem">Redeemed</option>
                  </select>
                  <br />
                  <label htmlFor="startDate" style={{ marginTop: '10px' }}>Start Date:</label>
                  <input ng-model="OHC.startDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
                  <label htmlFor="endDate">End Date:</label>
                  <input ng-model="OHC.endDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
                  <button className="add_button_custom_width btn-primary col-md-1 butnadd submit_form submit_dis floatRight" ng-click="OHC.getOffersHistory()">Submit</button>
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
          <ModalPopover ref={test => this.editModal = test} onClose={this.onModalClose} modalId="editOrgModal" header="Beacon" isModal="true">
            <>
              <div className="form-group">
                <label>Beacon Name</label>
                <input ref={name => this.name = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, name: e.target.value } })} value={this.state.editData.name || ''} required placeholder="Please enter Beacon Name" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input ref={name => this.address = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, address: e.target.value } })} value={this.state.editData.address || ''} required placeholder="Please enter Address" />
              </div>
              <div className="form-group">
                <label>Room</label>
                <input ref={name => this.room = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, beacon_room: e.target.value } })} value={this.state.editData.beacon_room || ''} required placeholder="Please enter Beacon Room" />
              </div>
              <div className="form-group">
                <label>Beacon UUID</label>
                <input ref={name => this.uuid = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, beacon_uuid: e.target.value } })} value={this.state.editData.beacon_uuid || ''} required placeholder="Please enter UUID" />
              </div>
              <div className="form-group">
                <label>Major</label>
                <input ref={name => this.major = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, major: e.target.value } })} value={this.state.editData.major || ''} required placeholder="Please enter Major" />
              </div>
              <div className="form-group">
                <label>Minor</label>
                <input ref={name => this.minor = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, minor: e.target.value } })} value={this.state.editData.minor || ''} required placeholder="Please enter Minor" />
              </div>
              {/* <div className="form-group">
                <label>Description</label>
                <textarea ref={des => this.desc = des} className="form-control" placeholder="Please enter description here" onChange={(e) => this.setState({editData: {...this.state.editData, description: e.target.value} })} value={this.state.editData.description || ''} />
              </div> */}
              <select ref={sel => this.select = sel} style={{ height: '38px', width: '100%', marginBottom: '20px', marginTop: '10px', border: '1px solid lightgrey' }} >
                <option value="0" >Is offered Beacon</option>
                <option value="true" selected={this.state.editData.offer_beacon == true}>Yes</ option>
                <option value="false" selected={this.state.editData.offer_beacon == false}>No</option>
              </select>
              <div style={{ padding: '20px 55px' }} className="modal-footer">
                <div className="row">
                  <div className="col-md-6">
                    <input type="button" className="btn btn-secondary" data-dismiss="modal" defaultValue="Cancel" />
                  </div>
                  <div className="col-md-6">
                    <input onClick={this.onSumit} type="submit" className="btn btn-primary" defaultValue="Add" />

                  </div>
                </div>
              </div>
            </>
          </ModalPopover>
          <div id="deleteEmployeeModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Delete Employee</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  </div>
                  <div className="modal-body">
                    <p>Are you sure you want to delete these Records?</p>
                    <p className="text-warning"><small>This action cannot be undone.</small></p>
                  </div>
                  <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                    <input type="submit" className="btn btn-danger" defaultValue="Delete" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    )
  }
}

export default Beacons;
