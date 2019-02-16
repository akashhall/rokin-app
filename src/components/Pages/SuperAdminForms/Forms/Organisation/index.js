import React from 'react';
// import json from './data.json';
// import Forms from './../Forms';
import { getAllOrg, getBeacons, addBeacon } from './../../../../../api';
import ModalPopover from './../../../../ModalPopover';
import { IoMdCloseCircleOutline, IoMdCreate } from 'react-icons/io'
class Branch extends React.Component {
  constructor(props) {
    super(props);

    this.selecteId = null;
    this.state = {
      data: [],
      editData: {
        name: '',
        address: '',
        beacon_room: '',
        location: '',
        major: '',
        minor: '',
        offer_beacon: false
      }
    }
  };

  componentDidMount() {
    // this.editModal.handleShow();
    console.log('did', sessionStorage);
    getAllOrg().then((res) => this.setState({ data: res.data }))

    // login().then((res) => console.log('res', res));
  }
  onModalClose = () => {
    this.selecteId = null;
    this.setState({
      editData: {
        name: '',
        description: '',
        organisation: '',
        groupName: '',
      }
    })
  }
  onSumit = () => {
    const organisation_name = this.organisation.value;
    const organisation_grouName = this.grouName.value;
    const organisation_description = this.description.value;
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
      organisation_name,
      organisation_grouName,
      organisation_description,

      outlet_id: "dcba56d9-3801-40c8-9c13-8a77c39de24f",
    }

    addBeacon(data).then((res) => getBeacons({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => { this.setState({ data: res.data }); this.editModal.handleHide() }));

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
  closeModal = () => {
    this.editModal.handleHide()
  }
  render() {
    const headers = [
      'ID',
      'Organisation',
      'Description',
      'GroupName',
    ];
    return (
      <React.Fragment >
        <div>
          <div className="container">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>Organisation</h2>
                  </div>
                  <div className="col-sm-6">
                    <a onClick={() => this.openEditModal()} className="btn btn-success"><span>Add New Organisation</span></a>
                    {/* <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a> */}
                  </div>
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
                        <td style={{ width: '200px' }}>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.description}</td>
                        <td>{d.category}</td>
                        {/* <td>{d.offer_beacon.toString()}</td> */}
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
                <label>Organisation Name:</label>
                <input ref={name => this.organisation = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, name: e.target.value } })} value={this.state.editData.name || ''} required placeholder="Please enter Organisation Name" />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <input ref={description => this.organisation_description = description} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, address: e.target.value } })} value={this.state.editData.address || ''} required placeholder="Please enter Description" />
              </div>
              <div className="form-group">
                <label>Select Group:</label>
                <input ref={grouName=> this.organisation_grouName = grouName} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, beacon_room: e.target.value } })} value={this.state.editData.beacon_room || ''} required placeholder="Please enter Beacon Room" />
              </div>
              {/* <div className="form-group">
                <label>Description</label>
                <textarea ref={des => this.desc = des} className="form-control" placeholder="Please enter description here" onChange={(e) => this.setState({editData: {...this.state.editData, description: e.target.value} })} value={this.state.editData.description || ''} />
              </div> */}
              <div style={{ padding: '20px 55px' }} className="modal-footer">
                <div className="row">
                  <div className="col-md-6">
                    <input onClick={this.closeModal} type="button" className="btn btn-secondary" data-dismiss="modal" defaultValue="Cancel" />
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

export default Branch;
