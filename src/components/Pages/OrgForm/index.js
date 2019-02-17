import React from 'react';
import json from './data.json';
import Forms from './../Forms';
import { getAllOrg, addOrg } from './../../../api';
import ModalPopover from './../../ModalPopover';
import { IoMdCloseCircleOutline, IoMdCreate } from 'react-icons/io'

class OrgForms extends React.Component {
  constructor(props) {
    super(props);

    this.selecteId = null;
    this.state = {
      data: [],
      editData: {
        name: '',
        description: '',
        category: ''
      }
    }
  };

  componentDidMount() {
    // this.editModal.handleShow();
    getAllOrg('abc').then((res) => this.setState({ data: res.data }))

    // login().then((res) => console.log('res', res));
  }
  onModalClose = () => {
    this.error.style.display = 'none';
    this.selecteId = null;
    this.setState({
      editData: {
        name: '',
        description: '',
        category: ''
      }
    })
  }
  validate = (name, description, category) => {
    if (name === '' || description === '', category === 'Select Category') {
      return true
    } else {
      return false
    }
  }
  onSumit = () => {
    const name = this.orgName.value;
    const description = this.desc.value;
    const category = this.selectCat.options[this.selectCat.selectedIndex].label;
    if (this.validate(name, description, category)) {
      this.error.style.display = 'block';
    } else {
      this.error.style.display = 'none';
      let a = { type: 'add' }
      if (this.selecteId !== null) {
        a = {
          id: this.state.data[this.selecteId].id,
          type: 'upadte'
        }
      }
      const data = {
        ...a,
        name,
        description,
        category,
      }
      addOrg(data).then((res) => getAllOrg('abc').then((res) => this.setState({ data: res.data })));
      this.closeModal();
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
      'Category',
    ];
    const data = json.data;
    return (
      <React.Fragment >
        <div>
          <div className="container">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>Organization</h2>
                  </div>
                  <div className="col-sm-6">
                    <a onClick={() => this.openEditModal()} className="btn btn-success"> <span>Add New Organization</span></a>
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
                        <td style={{ width: '200px' }}>{d.name}</td>
                        <td>{d.description}</td>
                        <td>{d.category}</td>
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
          <ModalPopover ref={test => this.editModal = test} onClose={this.onModalClose} modalId="editOrgModal" header="Organization" isModal="true">
            <>
              <div className="form-group">
                <label>Organization Name</label>
                <input ref={name => this.orgName = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, name: e.target.value } })} value={this.state.editData.name || ''} required placeholder="Please enter Organization Name" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea ref={des => this.desc = des} className="form-control" placeholder="Please enter description here" onChange={(e) => this.setState({ editData: { ...this.state.editData, description: e.target.value } })} value={this.state.editData.description || ''} />
              </div>
              <select ref={sel => this.selectCat = sel} style={{ width: '100%', marginBottom: '20px' }} className="btn btn-secondary">
                <option value="0" >Select Category</option>
                <option value="1" selected={this.state.editData.category == 'chilin out'}>Chilin out</option>
                <option value="2" selected={this.state.editData.category == 'eatin out'}>Eatin out</option>
                <option value="3" selected={this.state.editData.category == 'nightin out'}>Nightin out</option>
                <option value="4" selected={this.state.editData.category == 'shopin out'}>Shopin out</option>
              </select>
              <h6 ref={error => this.error = error} style={{ color: 'red', display: 'none' }}>Please fill all the detais</h6>
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
        </div>
      </React.Fragment >
    )
  }
}

export default OrgForms;
