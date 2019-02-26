import React from 'react';
import { getAllCommon } from './../../../../../api';
class CustomerHistory extends React.Component {
  constructor(props) {
    super(props);
    this.outlet_id = "dcba56d9-3801-40c8-9c13-8a77c39de24f";
    this.selecteId = null;
    this.state = {
      data: [],
    }
  };

  componentDidMount() {
    // const usersData = [];
    getAllCommon('customer-history', { outlet_id: this.outlet_id }).then((res) => {
      this.setState({ data: res.data })
    })

  }

  render() {
    const headers = [
      'Name',
      'Email',
      'Type',
      'Source',
      'Arrived On',
      'Left On',
      'Engagement Type',
      'Engagement Status'
    ];
    return (
      <React.Fragment >
        <div>
          {console.log(this.state.data)}
          <div className="container">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>Customer History</h2>
                  </div>
                </div>
                <div className="panel-heading" style={{ padding: '10px 10px', height: 'auto' }}>
                  <label htmlFor="user">Customer Name:</label>
                  &nbsp;
                  <input ng-model="UHC.user" type="text" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-empty" />
                  &nbsp;
                  <label htmlFor="startDate">Start Date:</label>
                  &nbsp;
                  <input ng-model="UHC.startDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
                  &nbsp;
                  <label htmlFor="endDate">End Date:</label>
                  &nbsp;
                  <input ng-model="UHC.endDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
                  &nbsp;
                  {/* <button style={{ padding: '4px',marginRight:'19px',marginTop:'-32px' }} className="btn btn-primary" ng-click="UHC.getUserHistory()">Submit</button> */}
                  <button class="btn btn-primary" style={{ marginTop: '-1px',marginRight:'124px',padding:'6px'}}>Submit</button>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    {
                      headers && headers.length ?
                        headers.map((header) => <th style={{ width: '145px' }}>{header}</th>) : null
                    }
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((d, i) =>
                    <tr key={i}>
                      <td>{d.customer_name}</td>
                      <td>{d.customer_email}</td>
                      <td>{d.customer_type}</td>
                      <td>{d.customer_source}</td>
                      <td>{d.arrived_on}</td>
                      <td>{d.left_on}</td>
                      <td>{d.engagement_type}</td>
                      <td>{d.engagement_status}</td>
                    </tr>
                  )}
                  {/* ) : null
                  } */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment >
    )
  }
}

export default CustomerHistory;
