import React from 'react';
// import json from './data.json';
// import Forms from './../Forms';
import { getAllCommon } from './../../../../../api';
import ModalPopover from './../../../../ModalPopover';
import { IoMdCloseCircleOutline, IoMdCreate } from 'react-icons/io'
class Branch extends React.Component {
  constructor(props) {
    super(props);

    this.selecteId = null;
    this.state = {
      organisationData: {},
      data: [],
      editData: {
        name: '',
        description: '',
        costperperson: '',
        created_on: '',
        newcustomer: '',
        image_path: ''
      }
    }
  };

  componentDidMount() {
    // this.editModal.handleShow();
    console.log('did', sessionStorage);

    getAllCommon('outlets').then((res) => this.setState({ data: res.data }))
    getAllCommon('organisations').then((res) => this.setState({ organisationData: res.data }))

    // login().then((res) => console.log('res', res));
  }
  onModalClose = () => {
    this.selecteId = null;
    this.setState({
      editData: {
        name: '',
        description: '',
        costperperson: '',
        created_on: '',
        newcustomer: '',
        image_path:''
      }
    })
  }
  onSumit = () => {
    const name = this.name.value;
    const description = this.description.value;
    const costperperson = this.costperperson.value;
    const newcustomer = this.newcustomer.value;
    const location = this.location.value;
    const image = this.image.value;

    let a = { type: 'add' }
    console.log('selected id', this.selecteId)
    if (this.selecteId !== null) {
      a = {
        organisation_id: this.state.data[this.selecteId].organisation_id,
        id: this.state.data[this.selecteId].id,
        type: 'update'
      }
    }

    const data = {
      ...a,
      name,
      description,
      costperperson,
      newcustomer,
      location, 
      image
    }
    console.log('data', data)
    // addBeacon(data).then((res) => getBeacons({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => { this.setState({ data: res.data }); this.editModal.handleHide() }));

  }
  openEditModal = (i) => {
    if (i !== undefined) {
      this.selecteId = i;
      console.log('open edit', i, this.state.data[i])
      const editData = this.state.data[i];
      this.setState({ editData })
      console.log('edit', editData, this.state)
    }
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
      'Name',
      'Description',
      'Location',
      'Cost per Person',
      'New Customer',
      'Created On',
      'Image'
    ];
    return (
      <React.Fragment >
        <div>
          <div className="container">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>Branches</h2>
                  </div>
                  <div className="col-sm-6">
                    <a onClick={() => this.openEditModal()} className="btn btn-success"><span>Add New Branch</span></a>
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
                        <td style={{ width: '100px' }}>{d.name}</td>
                        <td style={{ width: '200px' }}>{d.description}</td>
                        <td>{d.location}</td>
                        <td>{d.costperperson}</td>
                        <td>{d.newcustomer}</td>
                        <td>{d.created_on}</td>
                        <td><img style={{ width: '150px' }} src={d.image_path} /></td>
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
                <label>Name</label>
                <input ref={name => this.name = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, name: e.target.value } })} value={this.state.editData.name || ''} required placeholder="Please enter Name" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input ref={name => this.description = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, description: e.target.value } })} value={this.state.editData.description || ''} required placeholder="Please enter Description" />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input ref={name => this.location = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, location: e.target.value } })} value={this.state.editData.location || ''} required placeholder="Please enter Location" />
              </div>
              <div className="form-group">
                <label>Cost per Person</label>
                <input ref={name => this.costperperson = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, costperperson: e.target.value } })} value={this.state.editData.costperperson || ''} required placeholder="Please enter Cost per Person" />
              </div>
              <div className="form-group">
                <label>New Customer</label>
                <input ref={name => this.newcustomer = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, newcustomer: e.target.value } })} value={this.state.editData.newcustomer || ''} required placeholder="Please enter New Customer" />
              </div>
              <div className="form-group">
                <label>Add Image</label>
                <input class="btn btn secondary" ref={name => this.image = name} onChange={(e) => this.setState({ editData: { ...this.state.editData, image_path: e.target.value } })} type='file' />
              </div>
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
