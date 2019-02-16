import React from 'react';
// import json from './data.json';
// import Forms from './../Forms';
import { getCustomerHistory, addBeacon } from './../../../../../api';
import ModalPopover from './../../../../ModalPopover';
import { IoMdCloseCircleOutline, IoMdCreate } from 'react-icons/io'
class CurrentUsers extends React.Component {
  constructor(props) {
    super(props);

    this.selecteId = null;
    this.state = {
      data: [],
      editData: {
        name: '',
        date: '',
        room: ''
      }
    }
  };

  componentDidMount() {

    console.log('did', sessionStorage);
    getCustomerHistory({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => this.setState({ data: res.data }))

    // login().then((res) => console.log('res', res));
  }
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
      'name',
      'date',
      'room',
    ];
    return (
      <React.Fragment >
        <div>
          <div className="container">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>Current Users</h2>
                  </div>
                  <button style={{ marginLeft: '460px' }} className="btn btn-primary">REFRESH</button>
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

export default CurrentUsers;
