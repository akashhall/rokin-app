import React from 'react';
// import json from './data.json';
// import Forms from './../Forms';
import { getCustomerHistory, addBeacon } from './../../../../../api';
import ModalPopover from './../../../../ModalPopover';
import { IoMdCloseCircleOutline, IoMdCreate } from 'react-icons/io'
class OfferReport extends React.Component {
  constructor(props) {
    super(props);

    this.selecteId = null;
    this.state = {
      data: [],
      editData: {
        Date: '',
        BranchCode: '',
        TotalOffersGiven: '',
        TotalOfferAmount: '',
        PendingRedeems: '',
        PendingRedeemAmount: '',
        TotalRedeemed: '',
        TotalRedeemedAmount: ''
      }
    }
  };

  // componentDidMount() {

  //   console.log('did', sessionStorage);
  //   getCustomerHistory({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => this.setState({ data: res.data }))

  //   // login().then((res) => console.log('res', res));
  // }
  onModalClose = () => {
    this.selecteId = null;
    this.setState({
      editData: {
        name: '',
        address: '',
        beacon_room: '',
        location: '',
        major: '',
        minor: '',
        offer_beacon: false
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

    addBeacon(data).then((res) => getCustomerHistory({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => { this.setState({ data: res.data }); this.editModal.handleHide() }));

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
      'DATE',
      'BRANCH CODE',
      'TOTAL OFFER GIVEN',
      'TOTAL OFFER AMOUNT',
      'PENDING REDEEMS',
      'PENDING REDEEM AMOUNT',
      'TOTAL REDEEMED',
      'TOTAL REDEEMED AMOUNT'
    ];
    return (
      <React.Fragment >
        <div>
          <div className="container">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>Offer Report</h2>
                  </div>
                </div>
                <div className="panel-heading" style={{ padding: '10px 10px', height: 'auto' }}>
                  <label htmlFor="startDate">Select Store:</label>
                  &nbsp;
                  <select style={{ width: '20%', display: 'inline-block' }} className="form-control frmclr ng-pristine ng-untouched ng-valid ng-not-empty" name="type" ng-model="IOC.prefixName">
                    <option value="All" selected="selected">All</option>
                    {/* ngRepeat: item in IOC.subItems */}<option ng-repeat="item in IOC.subItems" value="HRCMumbai1" className="ng-binding ng-scope" style={{}}>HRC Mumbai-Worli</option>{/* end ngRepeat: item in IOC.subItems */}<option ng-repeat="item in IOC.subItems" value="rootsmumbai" className="ng-binding ng-scope">Roots Mumbai</option>{/* end ngRepeat: item in IOC.subItems */}<option ng-repeat="item in IOC.subItems" value="HRCHyd" className="ng-binding ng-scope">HRC Hyderabad</option>{/* end ngRepeat: item in IOC.subItems */}<option ng-repeat="item in IOC.subItems" value="HRCMumbaiAnd" className="ng-binding ng-scope">HRC Mumbai-Andheri</option>{/* end ngRepeat: item in IOC.subItems */}<option ng-repeat="item in IOC.subItems" value="Myurdwr" className="ng-binding ng-scope">Mayur Dharwar</option>{/* end ngRepeat: item in IOC.subItems */}<option ng-repeat="item in IOC.subItems" value="HRCPune" className="ng-binding ng-scope">HRC Pune</option>{/* end ngRepeat: item in IOC.subItems */}<option ng-repeat="item in IOC.subItems" value="JastroKings" className="ng-binding ng-scope">Jack Astors Toronto-Kings</option>{/* end ngRepeat: item in IOC.subItems */}
                  </select>
                  &nbsp;
                  <label htmlFor="startDate">Start Date:</label>
                  &nbsp;
                  <input style={{ padding: '4px' }} ng-model="URC.startDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
                  &nbsp; &nbsp;
                  <label htmlFor="endDate">End Date:</label>
                  &nbsp;
                  <input style={{ padding: '4px' }} ng-model="URC.endDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
                  &nbsp;
                  <button style={{ padding: '7px', marginTop: '2px', marginRight: '108px' }} className="btn btn-primary" ng-click="URC.getUserReport()">Submit</button>
                  {/* <span className="search_input margin_top10">
                  <label htmlFor="search">Search:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                  <input type="text" name="search" ng-model="URC.search" className="ng-pristine ng-untouched ng-valid ng-empty" />
                  <button className="add_button_custom_width btn-primary col-md-1 butnadd submit_form submit_dis floatRight custom_added" ng-click="URC.exportToSpreadSheet()">Export as Excel</button>
                </span> */}
                  {/* <h3 class="panel-title">Payment Form</h3> */}
                </div>
              </div>



              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    {
                      headers && headers.length ?
                        headers.map((header) => <th style={{ width: '160px' }}>{header}</th>) : null
                    }
                  </tr>
                </thead>
                <tbody>
                  {this.state.data && this.state.data.length ?
                    this.state.data.map((d, i) =>
                      <tr key={i}>
                        <td style={{ width: '200px' }}>{d.name}</td>
                        <td>{d.date}</td>
                        <td>{d.action}</td>
                        <td>{d.actionType}</td>
                        <td>{d.message}</td>
                        <td>{d.offerMeassage.toString()}</td>
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

export default OfferReport;
