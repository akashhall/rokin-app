import React from 'react';
import json from './data.json';
import Forms from './../Forms';
import { getAllOrg, addOrg } from './../../../api';
import ModalPopover from './../../ModalPopover';

class OrgForms extends React.Component {
  constructor(props) {
    super(props);
    
    this.selecteId=null;
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
    console.log('did', sessionStorage);
    getAllOrg('abc').then((res) => this.setState({data: res.data}))

    // login().then((res) => console.log('res', res));
  }
  onModalClose = () => {
    this.selecteId = null;
    this.setState({
      editData: {
        name: '',
        description: '',
        category: ''
      }
    })
  }
  onSumit = () => {
    const name = this.orgName.value;
    const description = this.desc.value;
    const category = this.selectCat.options[this.selectCat.selectedIndex].label;
    let a = { type: 'add'}
    console.log('selected id', this.selecteId)
    if(this.selecteId !== null) {
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

    addOrg(data).then((res) =>  getAllOrg('abc').then((res) => this.setState({data: res.data})));

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
      'Name',
      'Description',
      'Category',
    ];
    const data = json.data;
    console.log('dataaa', data)
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
                    <a onClick={() => this.openEditModal()} className="btn btn-success"><i className="material-icons"></i> <span>Add New Organization</span></a>
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
                        <td style={{width: '200px'}}>{d.name}</td>
                        <td>{d.description}</td>
                        <td>{d.category}</td>
                        <td>
                          <a onClick={() => this.openEditModal(i)} className="edit"><i className="material-icons" title="Edit"></i></a>
                          <a className="delete"><i className="material-icons" title="Delete"></i></a>
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
                <input ref={name => this.orgName = name} type="text" className="form-control"  onChange={(e) => this.setState({editData: {...this.state.editData, name: e.target.value} })} value={this.state.editData.name || ''} required placeholder="Please enter Organization Name" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea ref={des => this.desc = des} className="form-control" placeholder="Please enter description here" onChange={(e) => this.setState({editData: {...this.state.editData, description: e.target.value} })} value={this.state.editData.description || ''} />
              </div>
              <select ref={sel => this.selectCat = sel} style={{ width: '100%', marginBottom: '20px' }} className="btn btn-secondary">
                <option value="0" >Select Category</option>
                <option value="1" selected={this.state.editData.category == 'chilin out'}>Chilin out</option>
                <option value="2" selected={this.state.editData.category == 'eatin out'}>Eatin out</option>
                <option value="3" selected={this.state.editData.category == 'nightin out'}>Nightin out</option>
                <option value="4" selected={this.state.editData.category == 'shopin out'}>Shopin out</option>
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

export default OrgForms;
