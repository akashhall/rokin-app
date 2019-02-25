import React from 'react';
import { getAllCommon, addUsers } from './../../../../../api';
import ModalPopover from './../../../../ModalPopover';
import { IoMdCloseCircleOutline, IoMdCreate } from 'react-icons/io'
class Users extends React.Component {
  constructor(props) {
    super(props);

    this.selecteId = null;
    this.state = {
      data: [],
      // users: [],
      editData: {
        name: '',
        email: '',
        role: '',
        mobile: '',
        role: ''
      }
    }
  };
  componentDidMount() {
    const usersData = [];
    getAllCommon('get-admin-users', { user_type: "admin" }).then((res) => {
      this.setState({ data: res.data })
    })
  }

  onModalClose = () => {
    this.selecteId = null;
    this.setState({
      editData: {
        name: '',
        email: '',
        role: '',
        mobile: '',
        role: 'superadmin'
      }
    })
    this.error.style.display = 'none';

  }
  // validate = (beacon_name, beacon_uuid, beacon_room, mac_address, offer_beacon, major, minor) => {
  //   if (beacon_name === '' || beacon_uuid === '' || beacon_room === '' || mac_address === '' || major === '' || minor === '' || offer_beacon === 'Is offer Beacon') {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  onSubmit = () => {
    const name = this.name.value;
    const email = this.email.value;
    const role = this.role.value;
    const mobile = this.select.options[this.select.selectedIndex].value;
    let a = { type: 'superadmin' }
    console.log('selected id', this.selecteId)
    // if (this.validate()) {
    //   // this.error.style.display = 'block';
    // } else {
    //   this.error.style.display = 'none';
    //   let a = { type: 'add' }
    if (this.selecteId !== null) {
      a = {
        id: this.state.data[this.selecteId].id,
        type: 'storeadmin'
        // }
      }

      const data = {
        ...a,
        name,
        email,
        type: 'superadmin',
        role,
        mobile,
        outlet_id: "dcba56d9-3801-40c8-9c13-8a77c39de24f",
      }

      addUsers(data).then((res) => getAllCommon('get-admin-users', { user_type: "admin" }, { outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => { this.setState({ data: res.data }); this.editModal.handleHide() }));

    }
  }
  openEditModal = (i) => {
    if (i !== undefined) {
      this.selecteId = i;
      const editData = this.state.data[i];
      this.setState({ editData })
    }
    this.editModal.handleShow();
  }

  //   onModalClose = () => {
  //     this.selecteId = null;
  //     this.setState({
  //       editData: {
  //         name: '',
  //         email: '',
  //         role: '',
  //         mobile: '',
  //         type: ''
  //       }
  //     })
  //   }
  //   onSubmit = () => {
  //     const name = this.name.value;
  //     const email = this.email.value;
  //     const role = this.role.value;
  //     const mobile = this.select.options[this.select.selectedIndex].value;
  //     let a = { type: 'add' }
  //     console.log('selected id', this.selecteId)
  //     if (this.selecteId !== null) {
  //       a = {
  //         id: this.state.data[this.selecteId].id,
  //         type: 'update'
  //       }
  //     }

  //     const data = {
  //       ...a,
  //       name,
  //       email,
  //       type,
  //       mobile,
  //       outlet_id: "dcba56d9-3801-40c8-9c13-8a77c39de24f",
  //     }

  //     addUsers(data).then((res) => getAllCommons('get-admin-users', { user_type: "admin" }, { outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => { this.setState({ data: res.data }); this.editModal.handleHide() }));
  // }
  // openEditModal = (i) => {
  //   if (i !== undefined) {
  //     this.selecteId = i;
  //     console.log('open edit', i, this.state.data[i])
  //     const editData = this.state.data[i];
  //     this.setState({ editData })
  //     console.log('edit', editData, this.state)
  //   }
  //   console.log('bahar', this.state.editData.category)
  //   this.editModal.handleShow();
  // }
  render() {
    const headers = [
      ' User Name',
      'Email',
      'Mobile No.',
      'Role',
      'Created Time',
      'Last Login Time',
      'Last Logout Time',
      'Updated On'
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
                    <h2>Users</h2>
                  </div>
                  {/* <div className="col-sm-6">
                    <a onClick={() => this.openEditModal()} className="btn btn-success"><span>Add New Beacon</span></a>
                    {/* <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a> */}
                  {/* </div> */}
                </div>
                <div className="panel-heading" style={{ padding: '10px 10px', height: 'auto' }}>
                  <label htmlFor="startDate">Start Date:</label>
                  &nbsp;
                  <input ng-model="UHC.startDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
                  &nbsp;
                  <label htmlFor="endDate">End Date:</label>
                  &nbsp;
                  <input ng-model="UHC.endDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
                  &nbsp;
                  <button style={{ padding: '2px' }} className="btn-primary col-md-1 butnadd submit_form submit_dis floatRight add_button_custom" ng-click="UHC.getUserHistory()">Submit</button>
                  <button onClick={() => this.openEditModal()} style={{ padding: '2px', marginLeft: '10px' }} className="btn-primary" ng-click="UHC.getUserHistory()">Add New User</button>

                  {/* <h3 class="panel-title">Payment Form</h3> */}
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
                        <td>{d.email}</td>
                        <td>{d.mobile_number}</td>
                        <td>{d.role}</td>
                        <td>{d.created_time}</td>
                        <td>{d.last_login_time}</td>
                        <td>{d.last_logout_time}</td>
                        <td>{d.updated_on}</td>
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
          <ModalPopover ref={test => this.editModal = test} onClose={this.onModalClose} modalId="editOrgModal" header="Users" isModal="true">
            <>
              <div className="form-group">
                <label>Name</label>
                <input ref={name => this.userName = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, name: e.target.value } })} value={this.state.editData.name || ''} required placeholder="Please Enter Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input ref={name => this.email = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, email: e.target.value } })} value={this.state.editData.email || ''} required placeholder="Please Enter Your Email" />
              </div>
              <div className="form-group">
                <label>Role</label>
                {/* <input ref={name => this.room = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, beacon_room: e.target.value } })} value={this.state.editData.beacon_room || ''} required placeholder="Please Enter Beacon Room" /> */}
                <select ref={type => this.selecteId = type} style={{ height: '38px', width: '100%', marginTop: '10px', border: '1px solid lightgrey' }} required placeholder="Please select Type">
                  {/* <option value="0" >Select Type</option> */}
                  <option value="storeadmin" selected={this.state.editData.type == 'storeadmin'}>storeadmin</option>
                  <option value="superadmin" selected={this.state.editData.type == 'superadmin'}>superadmin</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mobile</label>
                <input ref={name => this.mobile = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, mobile: e.target.value } })} value={this.state.editData.mobile || ''} required placeholder="Please Enter Your Mobile No. " />
              </div>

              {/* <select ref={sel => this.select = sel} style={{ height: '38px', width: '100%', marginBottom: '20px', marginTop: '10px', border: '1px solid lightgrey' }} >
                <option value="0" >Is offered Beacon</option>
                <option value="true" selected={this.state.editData.offer_beacon == true}>Yes</ option>
                <option value="false" selected={this.state.editData.offer_beacon == false}>No</option>
              </select> */}
              <div style={{ padding: '20px 55px' }} className="modal-footer">
                <div className="row">
                  <div className="col-md-6">
                    <input type="button" className="btn btn-secondary" data-dismiss="modal" defaultValue="Cancel" />
                  </div>
                  <div className="col-md-6">
                    <input onClick={this.onSubmit} type="submit" className="btn btn-primary" defaultValue="Add" />

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

export default Users;
